const RestClient = (() =>
  class {
    constructor(baseUrl) {
      this.baseUrl = baseUrl;
    }

    getConfig(method, data) {
      const config = {
        method: method.toUpperCase(),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      };

      if (data) {
        config.body = JSON.stringify(data);
      }

      return config;
    }

    request(endpoint, config) {
      return fetch(endpoint, config).then((response) => {
        const { status } = response;

        if (status === 204) {
          return { status: response.status };
        }

        if (status >= 200 && status < 300) {
          return response
            .json()
            .then((data) => data)
            .catch((error) => {
              throw error;
            });
        }

        return response.json().then((err) => {
          const error = err;
          error.status = response.status;
          throw error;
        });
      });
    }

    get(endpoint = "", params = "") {
      return this.request(
        `${this.baseUrl}${endpoint}?${params}`,
        this.getConfig("get", null)
      );
    }

    post(endpoint, data) {
      return this.request(
        `${this.baseUrl}${endpoint}`,
        this.getConfig("post", data)
      );
    }

    patch(endpoint, data) {
      return this.request(
        `${this.baseUrl}${endpoint}`,
        this.getConfig("patch", data)
      );
    }

    put(endpoint, data) {
      return this.request(
        `${this.baseUrl}${endpoint}`,
        this.getConfig("put", data)
      );
    }

    delete(endpoint, data) {
      return this.request(
        `${this.baseUrl}${endpoint}`,
        this.getConfig("delete", data)
      );
    }
  })();

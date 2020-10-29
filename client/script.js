const api = new Client();
const { getReviewsData, createReview, deleteReview } = api.reviews;

const handleDelete = (e) => {
  e.preventDefault();
  if (e.target.id === 'del') {
    console.log(e.currentTarget.id);
    deleteReview('', { id: e.currentTarget.id });
  }
};

const render = ({ reviews }) => {
  reviews.map((review) => {
    const item = document.createElement('div');
    item.id = review.id;
    const name = document.createElement('div');
    const email = document.createElement('div');
    const comment = document.createElement('div');
    const del = document.createElement('div');

    name.innerHTML = review.name;
    email.innerHTML = review.email;
    comment.innerHTML = review.review;
    del.innerHTML = 'x';
    del.id = 'del';

    item.appendChild(name);
    item.appendChild(email);
    item.appendChild(comment);
    item.appendChild(del);

    item.addEventListener('click', handleDelete);

    container.appendChild(item);
  });
};

getReviewsData().then(render);

send.addEventListener('click', (e) => {
  e.preventDefault();

  const data = [...document.forms[0].elements]
    .filter((item) => item.type === 'text')
    .reduce((obj, item) => {
      obj[item.name] = item.value;
      return obj;
    }, {});

  createReview('', data);
});

// const xhr = new XMLHttpRequest();

// xhr.open("GET", url);

// xhr.send();

// xhr.onload = (e) => console.log(xhr.status, xhr.response);

// fetch(url)
//   .then((e) => e.json())
//   .then(console.log);

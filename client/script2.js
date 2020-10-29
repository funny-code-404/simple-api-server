const handleDeleteReview = (id) => {
  return deleteReview('', { id });
};

const handleCreateReview = () => {
  const data = [...document.forms[0].elements]
    .filter((item) => item.type === 'text')
    .reduce((obj, item) => {
      obj[item.name] = item.value;
      return obj;
    }, {});

  createReview('', data);
};

const handleUpdateReview = (id) => {
  updateReview(`/${id}`, {
    id,
    name: 'updated',
    email: 'updated',
    review: 'updated',
  });
};

const handleClick = (e) => {
  e.preventDefault();

  switch (e.target.id) {
    case 'del':
      return handleDeleteReview(e.currentTarget.id);
    case 'upd':
      return handleUpdateReview(e.currentTarget.id);
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
    const upd = document.createElement('div');

    name.innerHTML = review.name;
    email.innerHTML = review.email;
    comment.innerHTML = review.review;
    del.innerHTML = 'x';
    upd.innerHTML = 'update';
    del.id = 'del';
    upd.id = 'upd';

    item.appendChild(name);
    item.appendChild(email);
    item.appendChild(comment);
    item.appendChild(del);
    item.appendChild(upd);

    item.addEventListener('click', handleClick);

    container.appendChild(item);
  });
};

const fetchData = async () => {
  const res = await getReviews();

  return render(res.data);
};

fetchData();

send.addEventListener('click', (e) => {
  e.preventDefault();

  handleCreateReview();
});

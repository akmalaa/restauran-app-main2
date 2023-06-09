/* eslint-disable no-alert */
import RestaurantSource from '../data/restaurant-source';
import UrlParser from '../routes/url-parser';

const PostReview = async () => {
  const url = UrlParser.parseActiveUrlWithoutCombiner();
  const inputReviewName = document.getElementById('inputName');
  const inputReview = document.getElementById('inputReview');
  const reviewContainer = document.querySelector('.detail-review');

  const dataInput = {
    id: url.id,
    name: inputReviewName.value,
    review: inputReview.value,
  };

  const date = new Date().toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const newReview = `
    <div class="detail-review-item">
      <div class="header-review">
        <p class="name-review">${dataInput.name}</p>

        <p class="date-review">${date}</p>
      </div>

      <div class="body-review">
        ${dataInput.review}
      </div>
    </div>
  `;
  if (dataInput.name !== '' && dataInput.review !== '') {
    await RestaurantSource.postReview(dataInput);
    reviewContainer.innerHTML += newReview;
    inputReviewName.value = '';
    inputReview.value = '';
  } else {
    alert('jangan kosongin form reviewnya mas :(');
  }
};

export default PostReview;

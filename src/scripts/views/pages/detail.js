import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonInitiatior from '../../utils/likebutton-initiator';
import PostReview from '../../utils/postreview-initiator';
import { createRestaurantDetailTemplate, Load } from '../templates/template-creator';
import FavoriteRestaurantIdb from '../../data/favoriterestaurant-db';

const Detail = {
  async render() {
    return `
        <section class="content">
            <div class="latest">
                <div class="loading-container" id="loading-cont"></div>
                <h1 class="main-title" tabindex="0" >Detail Restaurant</h1>
                <div class="detail-container" id="detail-container"></div>
                <div class="like" id="likeButtonContainer"></div>
            </div>
        </section>
    `;
  },

  async afterRender() {
    const itemContainer = document.querySelector('#detail-container');
    const loadContainer = document.querySelector('#loading-cont');

    loadContainer.innerHTML = Load();
    loadContainer.style.display = 'block';

    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await RestaurantSource.detailRestaurant(url.id);

    // detail
    itemContainer.innerHTML = createRestaurantDetailTemplate(resto);
    loadContainer.style.display = 'none';

    // post review
    const submitReview = document.getElementById('submit-review');
    submitReview.addEventListener('click', (event) => {
      event.preventDefault();
      PostReview();
    });

    // favorite
    LikeButtonInitiatior.init({
      likeButtonContainer: document.getElementById('likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: resto.id,
        name: resto.name,
        city: resto.city,
        pictureId: resto.pictureId,
        description: resto.description,
        rating: resto.rating,
      },
    });

    // scroll
    const left = document.querySelector('#left-btn');
    const right = document.querySelector('#right-btn');
    const left2 = document.querySelector('#left-btnn');
    const right2 = document.querySelector('#right-btnn');
    const menuDrink = document.querySelector('#drink');
    const menuFood = document.querySelector('#food');

    left.addEventListener('click', () => {
      menuDrink.scrollBy(-100, 0);
    });

    right.addEventListener('click', () => {
      menuDrink.scrollBy(100, 0);
    });

    left2.addEventListener('click', () => {
      menuFood.scrollBy(-100, 0);
    });

    right2.addEventListener('click', () => {
      menuFood.scrollBy(100, 0);
    });
  },
};

export default Detail;

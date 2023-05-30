import FavoriteRestaurantIdb from '../../data/favoriterestaurant-db';
import {
  createRestaurantItemTemplate,
} from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
        <section class="content">
            <div class="latest">
              <h1 class="main-title" tabindex="0" >Your Favorite Restaurants</h1>
              <div class="empty" id="empty"></div>
              <div class="list" id="list"></div>
            </div>
        </section>
    `;
  },

  async afterRender() {
    const resto = await FavoriteRestaurantIdb.getAllRestaurant();
    const listContainer = document.querySelector('#list');
    const empty = document.querySelector('#empty');

    if (resto.length === 0) {
      empty.innerHTML = `
        <img class="empty-thumb" src="./image/empty.jpg" alt="">
        <h1>There is no data yet, <a href="#/">go to homepage</a></h1>
      `;
    }

    resto.forEach((restaurant) => {
      listContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favorite;

import RestaurantSource from '../../data/restaurant-source';
// import Load from '../../utils/loading';
import { createRestaurantItemTemplate, Load } from '../templates/template-creator';

const Home = {
  async render() {
    return `
        <section class="content">
            <div class="latest">
                <div class="loading-container" id="loading-cont"></div>
                <h1 tabindex="0" class="main-title" >Explore Restaurant</h1>
                <div class="list" id="list"></div>
            </div>
        </section>
    `;
  },

  async afterRender() {
    const loadContainer = document.querySelector('#loading-cont');
    const listContainer = document.querySelector('#list');

    loadContainer.innerHTML = Load();
    loadContainer.style.display = 'block';

    const listResto = await RestaurantSource.getRestaurants();

    listResto.forEach((resto) => {
      listContainer.innerHTML += createRestaurantItemTemplate(resto);
      loadContainer.style.display = 'none';
    });
  },
};

export default Home;

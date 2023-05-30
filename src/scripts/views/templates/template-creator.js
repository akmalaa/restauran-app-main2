import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => `
        <div class="list-item">
            <img class="list-item-thumb" src="${CONFIG.BASE_IMAGE_MEDIUM_URL + restaurant.pictureId}" alt="${restaurant.name}" title="${restaurant.name}">
            <div class="list-item-content">
              <div class="list-item-content-top">
                <p class="list-item-rating">
                    Rating : 
                    <a href="#" class="list-item-rating-value">${restaurant.rating}</a>
                </p>
                <div class="city">${restaurant.city}</div>
              </div>
                <h1 class="list-item-title"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h1>
                <div class="list-item-desc">${restaurant.description.slice(0, 100)}...&nbsp;&nbsp;<a class="remo" href="/#/detail/${restaurant.id}">read more</a></div>
            </div>
        </div>
`;

const createRestaurantDetailTemplate = (restaurant) => `
          <div class="detail">
            <div class="container-detail"> 
              <img class="list-detail-thumb" src="${CONFIG.BASE_IMAGE_LARGE_URL + restaurant.pictureId}" alt="${restaurant.name}" title="${restaurant.name}">
              <div class="list-detail-content">
                  <h1 tabindex="0" class="list-detail-title">${restaurant.name}</h1>
                  <div class="detail-container-subtitel">
                    <h3 tabindex="0" class="city-detail">${restaurant.address}, ${restaurant.city}</h3>
                    <h3 class="list-detail-rating">
                      <p>Rating:</p>
                      <p tabindex="0" class="list-detail-rating-value">${restaurant.rating}</p>
                    </h3>
                  </div>
                  <div class="detail-desc">
                    <h4 tabindex="0">Description:</h4>
                    <p>${restaurant.description}</p>
                  </div>
              </div>
              
              </div>
            
            <div class="detail-menu">
              <ul class="drink"> 
              <h4 class="menu-titel" tabindex="0"> Drink </h4>
                        <div class="menu-wrap">
                        <button class="left" id="left-btn"><</button>
                          <div class="menu-container" id="drink">
                            ${restaurant.menus.drinks.map((drink) => `
                              <li class="menu-items" tabindex="0"><p>${drink.name}</p></li>
                            `).join('')}
                          </div>
                        <button class="right" id="right-btn">></button>
                        </div> 
                </ul>
                <ul class="food"> 
                <h4 class="menu-titel" tabindex="0"> Food </h4>
                          <div class="menu-wrap">
                          <button class="left" id="left-btnn"><</button>
                            <div class="menu-container" id="food">
                              ${restaurant.menus.foods.map((food) => `
                                <li class="menu-items" tabindex="0"><p>${food.name}</p></li>
                              `).join('')}
                            </div>
                          <button class="right" id="right-btnn">></button>
                        </div> 
                </ul>
            </div>
        </div>

        <h2 tabindex="0" class="title-review">${restaurant.customerReviews.length} Review(s)</h2>

        <div class="container-review">
          <div class="form-review">
            <h1><span>Post your review!</span></h1>
            <form>
              <div class="form-content">
                <label for="inputName" class="form-label">Name</label>
                <input name="inputName" type="text" class="form-control" id="inputName">
              </div>
              <div class="form-content">
                <label for="inputReview" class="form-label">Your Review</label>
                <input name="inputReview" type="text" class="form-control" id="inputReview">
              </div>
              <button id="submit-review" type="submit" class="btn">Submit</button>
            </form>
        </div>
        
        <div tabindex="0" class="detail-review">
          ${restaurant.customerReviews.map((review) => `
              <div class="detail-review-item">
                <div class="header-review">
                  <p class="name-review">${review.name}</p>
                  <p class="date-review">${review.date}</p>
                </div>
                <div class="body-review">
                  ${review.review}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
        `;

const createLikeRestaurantButtonTemplate = () => `
        <button aria-label="like this restaurant" id="likeButton" class="like">
          <i class="fa fa-heart-o" aria-hidden="true"></i>
        </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
        <button aria-label="unlike this restaurant" id="likeButton" class="like">
          <i class="fa fa-heart" aria-hidden="true"></i>
        </button>
`;

const Load = () => `
    <div class="preloader">
        <svg class="cart" role="img" aria-label="Shopping cart line animation" viewBox="0 0 128 128" width="128px" height="128px" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="8">
                <g class="cart__track" stroke="hsla(0,10%,10%,0.1)">
                    <polyline points="4,4 21,4 26,22 124,22 112,64 35,64 39,80 106,80" />
                    <circle cx="43" cy="111" r="13" />
                    <circle cx="102" cy="111" r="13" />
                </g>
                <g class="cart__lines" stroke="currentColor">
                    <polyline class="cart__top" points="4,4 21,4 26,22 124,22 112,64 35,64 39,80 106,80" stroke-dasharray="338 338" stroke-dashoffset="-338" />
                    <g class="cart__wheel1" transform="rotate(-90,43,111)">
                        <circle class="cart__wheel-stroke" cx="43" cy="111" r="13" stroke-dasharray="81.68 81.68" stroke-dashoffset="81.68" />
                    </g>
                    <g class="cart__wheel2" transform="rotate(90,102,111)">
                        <circle class="cart__wheel-stroke" cx="102" cy="111" r="13" stroke-dasharray="81.68 81.68" stroke-dashoffset="81.68" />
                    </g>
                </g>
            </g>
        </svg>
    </div>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
  Load,
};

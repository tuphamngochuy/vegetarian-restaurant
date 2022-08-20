import './menu.css';
import Slider, { SliderInfo } from '../../component/slide-image/slider';

const info: SliderInfo = {
  image: [{
    src: 'https://i.imgur.com/8SLjZec.jpg',
    label: '',
    description:'',
  }, {
    src: 'https://i.imgur.com/2WqS9f5.jpg',
    label: '',
    description:'',
  }, {
    src: 'https://i.imgur.com/sGACRjR.jpg',
    label: '',
    description: '',
  }],
  width: 500,
  height: 500,
}

export default function Menu() {
  return (
    <div id="menu-wrapper">
      <div id="menu-title-wrapper">
        <div id="menu-title">
          <h1>MENU</h1>
        </div>
        <div id="menu-title-image">
          <img src="https://i.imgur.com/J2MQ7Uu.jpg" alt="" />
        </div>
      </div>
      <div id="menu-content-wrapper">
        <div id="starter-wrapper">
          <h1>STARTER</h1>
          <div id="starter-content">
            <div id="starter-text">
              <p>
                All of the appetizers at Bliss Mind Bistro are 
                produced with fresh ingredients and come in a 
                range of hues, giving guests a flavorful and 
                energizing experience.
              </p>
            </div>
            <div id="starter-image">
              <img src='https://i.imgur.com/AOmqdni.png' alt=''/>
            </div>
          </div>
        </div>
        <div id="salad-wrapper">
          <h1>SALADS</h1>
          <div id="salad-content">
            <div id="salad-image">
              <img src='https://i.imgur.com/Xx7CJf0.jpg' alt=''/>
            </div>
            <div id="salad-text">
              <p>
                We also brought to customers a variety 
                of salads and soups from Asian to European 
                styles. The salad at Bliss Mind Bistro is 
                made with just the freshest ingredients available, 
                guaranteeing the dish's freshness and flavor when 
                it is served to customers.
              </p>
            </div>
          </div>
        </div>
        <div id="sushi-wrapper">
          <div id="sushi-image">
            <img src='https://i.imgur.com/EA3xEGe.jpg' alt='' />
            <div id="sushi-name">
              <h2>Sushi</h2>
            </div>
          </div>
          <div id="fresh-image">
            <img src='https://i.imgur.com/mAIhrTj.jpg' alt='' />
            <div id="fresh-name">
              <h2>Daily fresh</h2>
            </div>
          </div>
        </div>
        <div id="to-share-wrapper">
          <div id="to-share-image">
            <img src='https://i.imgur.com/lVJfGEl.png' alt=''/>
            <div id="to-share-name">
              <h2>To share</h2>
            </div>
          </div>
          <div id="brooth-image">
            <img src='https://i.imgur.com/OwaI8DS.png' alt=''/>
            <div id="brooth-name">
              <h2>Brooth</h2>
            </div>
          </div>
        </div>
        <div id="must-try-wrapper">
          <h1>Must try</h1>
          <div id="must-try-content">
            <div id="must-try-text">
              <p>
                You'll find tasty foods on the must-try 
                menu that are both high in quality and plentiful. 
                As soon as you enter the restaurant, make sure you 
                can't miss.
              </p>
            </div>
            <div id="must-try-image">
              <img src='https://i.imgur.com/0qUtKlh.jpg' alt=''/>
            </div>
          </div>
        </div>
        <div id="main-dish-wrapper">
          <div id="main-dish-image">
            <img src='https://i.imgur.com/vSfNZrK.png' alt=''/>
            <div id="main-dish-name">
              <h2>Main dish</h2>
            </div>
          </div>
          <div id="rice-image">
            <img src="https://i.imgur.com/9TO2pHr.jpg" alt=''/>
            <div id="rice-name">
              <h2>Rice</h2>
            </div>
          </div>
        </div>
        <div id="pizza-wrapper">
          <h1>Pizza</h1>
          <div id="pizza-content">
            <div id="pizza-image">
              <img src='https://i.imgur.com/pkag67U.jpg' alt=''/>
            </div>
            <div id="pizza-text">
              <p>
                Pizza enthusiasts will fall in love with 
                the flavorful and tasty pizzas. Fresh 
                vegetable flavors are preserved at Bliss 
                Mind Bistro and mixed with the flavor of 
                fatty leopard cheese made on-site in accordance 
                with a proprietary formula.
              </p>
            </div>
          </div>
        </div>
        <div id="hotpot-wrapper">
          <h1>Hot pot</h1>
          <div id="hotpot-content">
            <div id="hotpot-text">
              <p>
                On chilly days or while entertaining guests, 
                vegetarian hot pot is a popular vegetarian cuisine. 
                At Bliss Mind Bistro, vegetarian hot pot meals are 
                consistently varied with lots of fresh ingredients 
                and precisely prepared broth. guarantees to keep the 
                pickiest eaters.
              </p>
            </div>
            <div id="hotpot-slider">
              <Slider data={info}/>
            </div>
          </div>
        </div>
        <div id="drink-wrapper">
          <div id="seasonal-image">
            <img src='https://i.imgur.com/5KwZYXZ.jpg' alt=''/>
            <div id="seasonal-name">
              <h2>Seasonal Tea</h2>
            </div>
          </div>
          <div id="drink-image">
            <img src='https://i.imgur.com/MfoJulu.jpg' alt=''/>
            <div id="drink-name">
              <h2>Drink</h2>
            </div>
          </div>
        </div>
        <div id="dessert-wrapper">
          <h1>Dessert</h1>
          <div id="dessert-content">
            <div id="dessert-image1">
              <img src='https://i.imgur.com/zPa0KcL.jpg' alt=''/>
            </div>
            <div id="dessert-image2">
              <img src='https://i.imgur.com/so9n6TP.png' alt=''/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
import Slider, { SliderInfo} from "../../component/slide-image/slider";
import { Link } from "react-router-dom";
import './home.css';

const sliderData: SliderInfo = {
  image: [
    {
      src: 'https://i.imgur.com/aSsMVJK.jpg',
      label: '"Veganism is not a "sacrifice". It is a joy."',
      description: '- GaryLFrancione -',
    }, {
      src: 'https://i.imgur.com/ebZfLox.png',
      label: '"May all that have life be delivered from suffering."',
      description: '- Buddha -',
    }, {
      src: 'https://i.imgur.com/xGHZLmP.jpg',
      label: 'Vegan is just pure love. Love for animals, love for the planet, and love for yourself."',
      description: '- Mischa Temaul -',
    },
  ],
  width: 1519,
  height: 719,
};

export default function Home() {
  return(
    <div id="home-wrapper">
      <div id="slide-wrapper">
        <Slider data={sliderData}/>
      </div>
      <div id="introduction-wrapper">
        <Introduction />
      </div>
      <div id="intro-menu-wrapper">
        <IntroMenu />
      </div>
      <div id="intro-reservation-wrapper">
        <IntroReservation />
      </div>
    </div>
  )
}

function Introduction() {
    return (
      <div id="intro-container">
        <div id="intro-script-container">
          <p>
          The idea for Bliss Mind Bistro originated from a love of both 
          classic vegetarian cooking and vegetarian meals with a contemporary twist. 
          In addition to spices and herbs, a rich vegetarian cuisine that is infused 
          with national character is merged with the most distinctive and iconic 
          elements from cuisines like Thailand, Japan, and China. Bliss Mind Bistro, 
          located in the center of Vietnam, is happy to offer guests an entirely 
          new experience in vegetarian cuisine in addition to tasty, wholesome, and healthy food.
          </p>
          <p>
          Bliss Mind wants to establish a restaurant where customers truly want 
          to return for reasons other than only religious ones, such as love, health, and the environment.
          </p>
          <p>Sincerely,</p>
          <p>Bliss Mind.</p>
        </div>
        <div id="intro-image-container">
          <img src="https://i.imgur.com/NGxhfHA.jpg" alt='' />
        </div>
      </div>
    )
}

type Menu = {
  id: string,
  foodName: string,
  foodImg: string,
}

const menuList: Menu[] = [{
  id: 'food-1',
  foodName: 'Beetroot Salad',
  foodImg: 'https://i.imgur.com/rdqFanJ.jpg',
}, {
  id: 'food-1',
  foodName: 'Vietnamese Spring Rolls',
  foodImg: 'https://i.imgur.com/Yi5oL5h.jpg',
}, {
  id: 'food-1',
  foodName: 'Coconut Sweety',
  foodImg: 'https://i.imgur.com/5m4BAaz.jpg',
}, {
  id: 'food-1',
  foodName: 'Coconut Sweety',
  foodImg: 'https://i.imgur.com/33Dkmyy.jpg',
}, {
  id: 'food-1',
  foodName: 'Coconut Sweety',
  foodImg: 'https://i.imgur.com/1Gyhquq.png',
}, {
  id: 'food-1',
  foodName: 'Coconut Sweety',
  foodImg: 'https://i.imgur.com/1Gyhquq.png',
}, {
  id: 'food-1',
  foodName: 'Coconut Sweety',
  foodImg: 'https://i.imgur.com/1Gyhquq.png',
}, {
  id: 'food-1',
  foodName: 'Coconut Sweety',
  foodImg: 'https://i.imgur.com/1Gyhquq.png',
}];

function IntroMenu() {
  return (
    <div id="intro-menu-container">
      <div id="intro-menu-title-container">
        <h2>Bliss Mind Menu</h2>
      </div>
      <div id="intro-menu-image-list">
        {
          menuList.map((food) => {
            return (
              <div className="intro-menu-image" data-id={`${food.id}`}>
                <img src={food.foodImg} alt={food.foodName} />
              </div>
            )
          })
        }
      </div>
      <div id="intro-menu-button-container">
        <Link to='/menu'>
          <button>
            <div id="intro-menu-button">
              More
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
              </svg> 
            </div>
          </button>
        </Link>
      </div>
    </div>
  )
}

function IntroReservation() {
  return (
    <div id="intro-reservation-container">
      <h1>Enjoy the vegetarian meal today</h1>
      <Link to='/reservation'>
          <button>
            <div id="intro-reservation-button">
              Reservation now
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
              </svg> 
            </div>
          </button>
        </Link>
    </div>
  )
}
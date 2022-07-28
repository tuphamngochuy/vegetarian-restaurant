import './menu.css';
import Slider, { SliderInfo } from '../../component/slide-image/slider';

const sliderData: SliderInfo = {
  image: [
    {
      src: 'https://i.imgur.com/J2MQ7Uu.jpg',
      label: 'First slide label',
      description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    }, {
      src: 'https://i.imgur.com/5BehPdM.jpg',
      label: 'Second slide label',
      description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    }, {
      src: 'https://i.imgur.com/kZPpyoF.jpg',
      label: 'Third slide label',
      description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    }
  ],
  width: 1000,
  height: 700,
};

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
        <div className="menu-content" id="menu-content-salad">
          <div className="menu-content-lable" id="menu-salad-label">
            <h3>Salad</h3>
          </div>
          <div className="menu-content-slide" id="menu-salad-slide">
            <Slider data={sliderData} />
          </div>
        </div>
        <div className="menu-content" id="menu-content-appetizer">
          <div className="menu-content-lable" id="menu-appetizer-label">
            <h3>Appetizer</h3>
          </div>
          <div className="menu-content-slide" id="menu-appetizer-slide">
            <Slider data={sliderData} />
          </div>
        </div>
        <div className="menu-content" id="menu-content-main">
          <div className="menu-content-lable" id="menu-main-label">
            <h3>Main Courser</h3>
          </div>
          <div className="menu-content-slide" id="menu-main-slide">
            <Slider data={sliderData} />
          </div>
        </div>
        <div className="menu-content" id="menu-content-soup">
          <div className="menu-content-lable" id="menu-soup-label">
            <h3>Soup and Hot pot</h3>
          </div>
          <div className="menu-content-slide" id="menu-soup-slide">
            <Slider data={sliderData} />
          </div>
        </div>
      </div>
    </div>
  )
}
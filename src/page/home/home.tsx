import SLider from "../../component/slide-image/slider";
import { Link } from "react-router-dom";

import './home.css';
export default function Home() {
  return(
    <div id="home-wrapper">
      <div id="slide-wrapper">
        <SLider />
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
          Câu kệ Sadhu (phát âm: sa-du) xuất phát từ ngôn ngữ Ma Kiệt Đà (Pali), 
          khi dịch sang tiếng Việt có nghĩa là: Lành thay. 
          Tiếng Sadhu là câu nói mà phật Thích Ca Mâu Ni nói với các Phật Từ lúc phổ độ chúng sinh, 
          “Lành thay” vì những việc thiện người Phật Tử đã làm, “Lành thay” như một lời khích lệ, tán dương từ Đức Phật. 
          Sadhu là tiếng ngợi ca thiện sự mỹ mãn, là lời chia sẻ may mắn và bình an tới cho tâm hồn người Phật tử.
          </p>
          <p>
          Nhà hàng chay Sadhu được tạo nên với mong muốn mang tới những vỗ về, 
          những may mắn an lành như câu kệ Sadhu cho từng thực khách. 
          Sadhu Chay hi vọng, thông qua những món ăn chay an lành trong không gian mộc mạc và thanh tĩnh, 
          sẽ mang tới được những giây phút nghỉ ngơi và thư thái cho mọi thực khách. 
          Từ đó tiếp thêm năng lượng cho cơ thể và tâm hồn, để mỗi thực khách đều có thể khởi tâm thiện lành, 
          đón nhận sự bình an từ Đức Phật.
          </p>
          <p>Lành thay,</p>
          <p>Sadhu Chay.</p>
        </div>
        <div id="intro-image-container">
          <img src="https://i.imgur.com/Fy8AVX1.png" alt='' />
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
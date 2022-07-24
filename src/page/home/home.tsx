import SLider from "../../component/slide-image/slider"

export default function Home() {
  return(
    <div>
      <div id="slide-wrapper">
        <SLider />
      </div>
      <div id="introduction-wrapper">
        <Introduction />
      </div>
      <div id="intro-menu-wrapper">

      </div>
      <div id="intro-reservation-wrapper">

      </div>
    </div>
  )
}

function Introduction() {
    return (
      <div id="intro-container">
        <div id="intro-script-container">
          <p>
          Câu kệ Sadhu (phát âm: sa-du) xuất phát từ ngôn ngữ Ma Kiệt Đà (Pali), khi dịch sang tiếng Việt có nghĩa là: Lành thay. Tiếng Sadhu là câu nói mà phật Thích Ca Mâu Ni nói với các Phật Từ lúc phổ độ chúng sinh, “Lành thay” vì những việc thiện người Phật Tử đã làm, “Lành thay” như một lời khích lệ, tán dương từ Đức Phật. Sadhu là tiếng ngợi ca thiện sự mỹ mãn, là lời chia sẻ may mắn và bình an tới cho tâm hồn người Phật tử.
Nhà hàng chay Sadhu được tạo nên với mong muốn mang tới những vỗ về, những may mắn an lành như câu kệ Sadhu cho từng thực khách. Sadhu Chay hi vọng, thông qua những món ăn chay an lành trong không gian mộc mạc và thanh tĩnh, sẽ mang tới được những giây phút nghỉ ngơi và thư thái cho mọi thực khách. Từ đó tiếp thêm năng lượng cho cơ thể và tâm hồn, để mỗi thực khách đều có thể khởi tâm thiện lành, đón nhận sự bình an từ Đức Phật.
Lành thay,
Sadhu Chay.
          </p>
        </div>
        <div id="intro-image-container">
          <img src="https://i.imgur.com/MUVtk9I.jpg" alt='' />
        </div>
      </div>
    )
}
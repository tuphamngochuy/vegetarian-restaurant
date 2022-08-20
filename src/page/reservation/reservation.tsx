import './reservation.css';
import { BsFillGeoAltFill, BsFillTelephoneFill, BsInstagram, BsFacebook } from 'react-icons/bs'

const locationInfo = [{
  locate: 'Vincom Danang, Son Tra Dist',
  phone: '0123 456 789',
}];

export default function Reservation() {
  return (
    <div id="reservation-wrapper">
      <div id="reservation-title-wrapper">
        <div id="reservation-title">
          <h1>RESERVATION</h1>
        </div>
        <div id="reservation-title-image">
          <img src="https://i.imgur.com/J2MQ7Uu.jpg" alt="" />
        </div>
      </div>
      <div id="reservation-content">
        <div id="reservation-info-wrapper">
          <div id="reservation-info-label">
            <h2>Our locations</h2>
          </div>
          {
            locationInfo.map(info => {
              return (
                <div className="reservation-info-container">
                  <div className="reservation-info locate">
                    <BsFillGeoAltFill />
                    <h4>{info.locate}</h4>
                  </div>
                  <div className="reservation-info phone">
                    <BsFillTelephoneFill />
                    <h4>{info.phone}</h4>
                  </div>
                </div>
              )
            })
          }
          <div id="reservation-media-label">
            <h2>Our social media</h2>
          </div>
          <div id="reservation-media-content">
            <div id="reservation-media-facebook" className='reservation-info'>
              <BsFacebook /> <a href="facebook.com">Facebook</a>
            </div>
            <div id="reservation-media-instagram" className='reservation-info'>
              <BsInstagram /> <a href="instagram.com">Instagram</a>
            </div>
          </div>
        </div>
        <div id="reservation-form-wrapper">
          <div id="reservation-form-script">
            <h2>You need to book a table?</h2>
            <p>Fill in this form and we will connect as soon as possible!</p>
            <input className='text-small' type="text" name="Name" placeholder="enter your name..." />
            <input className='text-small' type="text" name="Phone" placeholder='enter your phone number...' />
            <input className='text-large' type="text" name="Description" placeholder='please give us your special require...' />
            <button>Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}
import './footer.css';

const info = [
  'Address', 'Hotline',
  'Open Daily', 'Facebook',
  '12 Yen Bai St, Hai Chau Dist', '0236 3699 888',
  'MON-SUN: 10AM - 22PM', 'Instagram',
]

export default function Footer() {
  return (
    <div id="footer-container">
      <div id="footer-title">
        <h2>Bliss Mind - The buffet restaurant for vegetarian</h2>
      </div>
      <div id="footer-info-list">
        {
          info.map((s => {
            const contentFB = <a href="facebook.com">Facebook</a>;
            const contentINS = <a href="instagram.com">Instagram</a>;
            const content = s === 'Facebook' ? contentFB : s === 'Instagram' ? contentINS : s;
            return (
              <div className="footer-info">
                {
                  content
                }
              </div>
            )
          }))
        }
      </div>
    </div>
  )
}
import './footer.css';

const info = [
  'Vincom Danang, Son Tra Dist', '10 Tran Phu St, Hai Chau Dist',
  'Open Daily', 'Facebook',
  '0123 456 789', '0123 659 899',
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
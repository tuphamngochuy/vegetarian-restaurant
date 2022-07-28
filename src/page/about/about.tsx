import './about.css';

const aboutInfo = [{
    name: 'Bliss Mind Buffet',
    idName: 'buffet-space-wrapper',
    image: 'https://i.imgur.com/CX6AgqR.png',
}, {
    name: 'Bliss Mind Dining',
    idName: 'dining-space-wrapper',
    image: 'https://i.imgur.com/CX6AgqR.png',
}];

export default function About() {
    return (
        <div className="about-wrapper">
            <div id="about-title-wrapper"> 
                <div id="about-title">
                    <h1>SPACE IN BLISS MIND</h1>
                </div>
                <div id="about-image">
                    <img src="https://i.imgur.com/kZPpyoF.jpg" alt=""/>
                </div>
            </div>
            <div id="about-content-wrapper">
                {
                    aboutInfo.map((info) => {
                        return (
                            <div id={info.idName} className="about-content-image">
                                <h3>{info.name}</h3>
                                <img src={info.image} alt='' />
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}
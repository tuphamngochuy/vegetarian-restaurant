import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';

type PropType = {
  data: SliderInfo,
}

export type SliderInfo = {
  image: ImageInfo[],
  width: number,
  height: number,
};

type ImageInfo = {
  src: string,
  label: string,
  description: string,
};

export default function Slider({data}: PropType) {

  return (
    <Carousel>
      {
        data.image.map((img) => {
          return (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img.src}
                alt=""
                style={{width: `${data.width}px`, height: `${data.height}px`}}
              />
              <Carousel.Caption>
                <h3 style={{fontSize: '1.6em'}}>{img.label}</h3>
                <p style={{fontSize: '1.3em'}}>{img.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          )
        })
      }
    </Carousel>
  );
}
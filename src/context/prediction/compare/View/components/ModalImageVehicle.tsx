import { Modal, Carousel, Image } from 'antd';
import './ModalImageVehicle.css';

export const ModalImageVehicle = ({
  visible,
  onClose,
  images,
  title,
}: {
  visible: boolean;
  onClose: () => void;
  images: string[];
  title: string;
}) => {
  return (
    <Modal
      open={visible}
      onCancel={onClose}
      footer={null}
      closable={false}
      centered
      width={1000}
      style={{ top: 40 }}
      bodyStyle={{ backgroundColor: '#000', padding: 0 }}
      className="gallery-modal"
    >
      <div className="gallery-container">
        <Carousel arrows className="gallery-carousel">
          {images.map((img, idx) => (
            <div key={idx} className="gallery-slide">
              <Image
                src={img}
                alt={`preview-${idx}`}
                preview={false}
                className="gallery-image"
              />
            </div>
          ))}
        </Carousel>

        <div className="gallery-thumbnails">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`thumb-${idx}`}
              className="gallery-thumbnail"
              onClick={() => {
                document
                  .querySelectorAll('.gallery-carousel .slick-dots li')[idx]
                  ?.querySelector('button')
                  ?.click();
              }}
            />
          ))}
        </div>

        <div className="gallery-header">
          <h3>{title}</h3>
          <button onClick={onClose}>✕</button>
        </div>
      </div>
    </Modal>
  );
};

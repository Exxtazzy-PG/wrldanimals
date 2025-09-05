import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow, Autoplay } from 'swiper/modules';
import { Camera, Video } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import './GallerySection.css';

const GallerySection = () => {
  const galleryData = [
    {
      id: 1,
      type: 'image',
      title: 'Львиная семья',
      url: 'https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Прайд львов отдыхает в тени акации'
    },
    {
      id: 2,
      type: 'image',
      title: 'Слоненок с мамой',
      url: 'https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Нежные моменты материнской заботы'
    },
    {
      id: 3,
      type: 'video',
      title: 'Охота гепарда',
      url: 'https://images.pexels.com/photos/1598377/pexels-photo-1598377.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Самое быстрое наземное животное в действии'
    },
    {
      id: 4,
      type: 'image',
      title: 'Полярная лисица',
      url: 'https://images.pexels.com/photos/1661546/pexels-photo-1661546.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Арктическая красавица в зимней шубке'
    },
    {
      id: 5,
      type: 'image',
      title: 'Тропические птицы',
      url: 'https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Яркие краски тропического леса'
    },
    {
      id: 6,
      type: 'video',
      title: 'Подводный мир',
      url: 'https://images.pexels.com/photos/1076758/pexels-photo-1076758.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Удивительная жизнь океанских глубин'
    }
  ];

  return (
    <section id="gallery" className="section gallery-section">
      <div className="container">
        <motion.div
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-lg">Галерея дикой природы</h2>
          <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
            Потрясающие кадры из мира животных
          </p>
        </motion.div>

        <motion.div
          className="gallery-slider"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Swiper
            modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            navigation
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            className="gallery-swiper"
          >
            {galleryData.map((media) => (
              <SwiperSlide key={media.id} className="gallery-slide">
                <motion.div
                  className="gallery-card"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="gallery-image">
                    <img src={media.url} alt={media.title} />
                    <div className="gallery-overlay">
                      <div className="media-type-icon">
                        {media.type === 'video' ? <Video size={40} /> : <Camera size={40} />}
                      </div>
                    </div>
                  </div>
                  
                  <div className="gallery-info">
                    <h3 className="gallery-title">{media.title}</h3>
                    <p className="gallery-description">{media.description}</p>
                    <div className="media-type-badge">
                      {media.type === 'video' ? 'Видео' : 'Фото'}
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
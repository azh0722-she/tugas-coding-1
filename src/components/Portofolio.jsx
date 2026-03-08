import { Portofoliolist } from '../Data/DataPortofolio';
import { Link } from 'react-router-dom';
import '../styles/Portofolio.css';

// Import Swiper React components & styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Portofolio() { 
  return (
    <section id="Portofolio">
      <div className="wrapper">
        <h3>Portofolio</h3>
        
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={25}
          slidesPerView={3} // Default tampilan 3 kolom
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            // Responsive breakpoints
            0: { slidesPerView: 1 },    // Mobile
            768: { slidesPerView: 2 },  // Tablet
            1000: { slidesPerView: 3 }  // Desktop
          }}
          className="mySwiper"
        >
          {Portofoliolist.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="item">
                <Link to={`/Portofolio/${item.id}`}>
                  <img src={item.image} alt={item.title} />
                </Link>
                {/* Opsional: Menambahkan judul di bawah gambar */}
                <h4>{item.title}</h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Portofolio;
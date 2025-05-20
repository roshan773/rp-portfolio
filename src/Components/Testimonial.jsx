import { useEffect, useState } from 'react';
import "./Testimonial.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-coverflow';
import './Loader.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import axios from 'axios';

// Import Swiper modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

const Testimonial = () => {

  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://personal-portfolio-db.onrender.com/testimonials");
        setUser(res.data);
      } catch (err) {
        console.log("Invalid API", err);
      } finally {
        setLoading(false);
      }
    };

    setTimeout(fetchData, 3000);
  }, []);

  return (
    <div className='container-fluid testimonial'>
      <div className='container'>
        <h2 className="text-uppercase fw-bold pb-2">Testimonials</h2>
        <p className="text-muted fs-5 pb-4">Real stories from real clients.</p>

        {loading ? (
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        ) : (
          <div className='row'>
            <Swiper
              spaceBetween={20}
              centeredSlides={true}
              pagination={{ clickable: true }}
              effect={'coverflow'}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
                slideShadows: false,
              }}
              modules={[Pagination, EffectCoverflow]}
              breakpoints={{
                320: { slidesPerView: 1 },
                480: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 2 },
              }}
              style={{ paddingBottom: "40px", margin: "0 auto" }}
            >
              {user.map((user) => (
                <SwiperSlide key={user.id}>
                  <div className="slide container-fluid">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="img-fluid img-top"
                      style={{
                        borderRadius: "50%",
                        width: "70px",
                        height: "70px",
                        boxShadow: "2px 2px 7px #000000",
                        margin: "0 auto",
                      }}
                      loading="lazy"
                    />
                    <div className="card-body">
                      <div className="fs-5 pt-4">
                        {user.message} <span className="fw-bold">~ {user.name}</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>
    </div>
  );
}

export default Testimonial;

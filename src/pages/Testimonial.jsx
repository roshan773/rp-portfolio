import { useEffect, useState } from 'react';
import "./Testimonial.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-coverflow';
// import './Loader.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import axios from 'axios';

// Import Swiper modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

const Testimonial = () => {

    const [testimonials, settestimonials] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("https://personal-portfolio-db.onrender.com/testimonials");
                settestimonials(res.data);
            } catch (err) {
                console.log("Invalid API", err);
            } finally {
                setLoading(false);
            }
        };

        setTimeout(fetchData, 3000);
    }, []);

    return (
        <div className='container-fluid testimonial py-5'>
            <div className='container-fluid'>
                <h1 className="display-1 pb-2 text-center">Testimonials</h1>
                <p className="text-black pb-4 text-center">Words from those I’ve worked with</p>

                {loading ? (
                    <span className="spinner text-center w-100">Loading...</span>
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
                            {testimonials.map((testimonials) => (
                                <SwiperSlide key={testimonials.id}>
                                    <div className="slide container-fluid">
                                        <img
                                            src={testimonials.avatar}
                                            alt={testimonials.name}
                                            className="img-fluid img-top"
                                            style={{
                                                borderRadius: "50%",
                                                width: "70px",
                                                height: "70px",
                                                // boxShadow: "2px 2px 7px #000000",
                                                margin: "0 auto",
                                            }}
                                            loading="lazy"
                                        />
                                        <p className='text-muted fs-5'>{testimonials.date}</p>
                                        <div className="card-body">
                                            <div className="fs-5 pt-4">
                                                {testimonials.message}
                                                <span className="fw-bold">~ {testimonials.name}</span>
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

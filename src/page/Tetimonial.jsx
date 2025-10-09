import React from 'react'
import Container from '../component/Container'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from '../component/NextArrow';
import PrevArrow from '../component/PrevArrow';
import TestimonialCart from '../component/TestimonialCart';
import Reviewer1 from '../assets/reviewer1.png'
import Reviewer2 from '../assets/reviewer2.png'
import Reviewer3 from '../assets/reviewer3.png'
// import reviews from './reviews';
const Tetimonial = () => {
      var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ],
       nextArrow:<NextArrow/>,
      prevArrow:<PrevArrow/>
  };

  
  return (
    <section className='pb-12 md:pb-[100px]'>
        <Container>
                                            <h3 className='text-lg font-semibold text-amber-600 font-Pop text-center '>Testimonials</h3>
                                <h2 className='capitalize text-3xl md:text-4xl font-Pop font-bold text-center pb-8 md:pb-[100px]'>Our Client Reviews</h2>
                                      <Slider  {...settings}>
                                       
                                          <div className='flex justify-center items-center rounded-lg bg-[url(/src/assets/testimonial1.png)] w-full bg-no-repeat bg-cover bg-center '> <TestimonialCart rev='Lizon' text='Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal' img={Reviewer1}/></div>
                                          <div className='flex justify-center items-center rounded-lg bg-[url(/src/assets/testimonial2.png)] w-full bg-no-repeat bg-cover bg-center '> <TestimonialCart rev='Toha' text='“Makasih Panto, aku sekarang berasa tinggal di apartment karena barang-barang yang terlihat mewah“' img={Reviewer2}/></div>
                                          <div className='flex justify-center items-center rounded-lg bg-[url(/src/assets/testimonial3.png)] w-full bg-no-repeat bg-cover bg-center '> <TestimonialCart rev='Dipu' text='“Sangat terjangkau untuk kantong saya yang tidak terlalu banyak“' img={Reviewer3}/></div>
                                          <div className='flex justify-center items-center rounded-lg bg-[url(/src/assets/testimonial1.png)] w-full bg-no-repeat bg-cover bg-center '> <TestimonialCart rev='Tamam' text='“Makasih Panto, aku sekarang berasa tinggal di apartment karena barang-barang yang terlihat mewah“' img={Reviewer1}/></div>
                                          <div className='flex justify-center items-center rounded-lg bg-[url(/src/assets/testimonial2.png)] w-full bg-no-repeat bg-cover bg-center '> <TestimonialCart rev='Titu' text='“Sangat terjangkau untuk kantong saya yang tidak terlalu banyak“' img={Reviewer2}/></div>
                                          <div className='flex justify-center items-center rounded-lg bg-[url(/src/assets/testimonial3.png)] w-full bg-no-repeat bg-cover bg-center '> <TestimonialCart rev='Marzan' text='“Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal“'  img={Reviewer3}/></div>
                                          
                                           
                                        
                                        
                                         

                                      </Slider>
        </Container>
    </section>
  )
}

export default Tetimonial
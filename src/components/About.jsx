import React from 'react';
import Slider from 'react-slick';

const AboutUsPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Hides the previous and next buttons
  };

  const slides = [
    {
      image: 'assets/about/about_1.jpg',
    },
    {
      image: 'assets/about/about_2.jpg',
    },
    {
      image: 'assets/about/about_3.jpg',
    },
  ];

  return (
    <div className='flex'>
      <div className='w-1/2'>
        <div className='max-w-screen-lg mx-auto py-40'>
          <h2 className='text-3xl  mb-4'>About Us</h2>
          <p style={{ fontFamily: 'Georgia, serif', fontSize: '40px', fontWeight: 'bold' }}><b>PURE AURA</b></p>
          <div>
  <p className='text-lg mb-4'>
    Embracing a harmonious bond between nature and humanity, PureAura offers uncomplicated skincare solutions infused with unique, natural elements from the earth.
  </p>
  <p className='text-lg mb-8'>
    When you choose PureAura, it's akin to connecting with a trusted companion, one who understands skincare intricately and consistently offers stellar suggestions. Our online boutique is meticulously curated to ensure seamless and delightful shopping experiences, featuring comprehensive product details and vivid imagery that guarantees clarity about your selections.
  </p>
</div>

          <button className='py-2 px-4 bg-indigo-600 hover:bg-indigo-800 rounded text-white'>Brand Story</button>
        </div>
      </div>
      <div className='w-1/2 bg-indigo-100'>
        <div className='max-w-screen-lg mx-auto py-40'>
          <Slider {...settings}>
            {slides.map((slide, index) => (
              <div key={index} className='relative'>
                <img src={slide.image} alt={`Slide ${index + 1}`} className='w-4/5 h-auto object-cover mx-auto' /> {/* Adjust the width as needed */}
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;

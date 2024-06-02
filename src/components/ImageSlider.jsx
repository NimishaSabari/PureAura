// import React from 'react';
// import Slider from 'react-slick';

// const ImageSlider = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//   };

//   const slides = [
//     {
//       image: 'assets/images/image1.jpg',
//       text: 'Slide 1 Text',
//       buttonText: 'Button 1',
//       buttonLink: '/button1',
//     },
//     {
//       image: 'assets/images/image2.jpg',
//       text: 'Slide 2 Text',
//       buttonText: 'Button 2',
//       buttonLink: '/button2',
//     },
//     {
//       image: 'assets/images/image3.jpg',
//       text: 'Slide 3 Text',
//       buttonText: 'Button 3',
//       buttonLink: '/button3',
//     },
//   ];

//   return (
//     <div className='w-full max-w-screen-lg mx-auto py-10'>
//       <Slider {...settings}>
//         {slides.map((slide, index) => (
//           <div key={index} className='relative'>
//             <img src={slide.image} alt={`Slide ${index + 1}`} className='w-full h-auto object-cover' />
//             <div className='absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white'>
//               <p className='mb-4 text-xl'>{slide.text}</p>
//               <a href={slide.buttonLink} className='py-2 px-4 bg-indigo-600 hover:bg-indigo-800 rounded'>
//                 {slide.buttonText}
//               </a>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default ImageSlider;
import React from 'react';
import Slider from 'react-slick';

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slides = [
    {
      image: 'assets/images/image1.jpg',
      text: 'Transform your skin with the power of hydration',
      buttonText: 'SHOP NOW ',
      buttonLink: '/button1',
    },
    {
      image: 'assets/images/image2.jpg',
      text: 'Revitalize your lips with our nourishing lip balm',
      buttonText: 'BUY1GET1',
      buttonLink: '/button2',
    },
    {
      image: 'assets/images/image3.jpg',
      text: 'Elevate your skincare routine with our jade rollers',
      buttonText: 'EXTRA 15%OFF',
      buttonLink: '/button3',
    },
  ];

  return (
    <div className='w-full bg-indigo-100'>
      <div className='max-w-screen-lg mx-auto py-40'>
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className='relative'>
              <img src={slide.image} alt={`Slide ${index + 1}`} className='w-full h-auto object-cover' />
              <div className='absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white'>
                <p className='mb-4 text-xl'>{slide.text}</p>
                <a href={slide.buttonLink} className='py-2 px-4 bg-indigo-600 hover:bg-indigo-800 rounded'>
                  {slide.buttonText}
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ImageSlider;

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

// function App() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1
//   };
//   return (
//     <div className='w-3/4 m-auto'>
//       <div className="mt-20">
//       <Slider {...settings}>
//         {data.map((d) => (
//           <div key={d.name} className="bg-white h-[450px] text-black rounded-xl">
//             <div className='h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl'>
//               <img src={d.img} alt="" className="h-44 w-44 rounded-full"/>
//             </div>

//             <div className="flex flex-col items-center justify-center gap-4 p-4">
//               <p className="text-xl font-semibold">{d.name}</p>
//               <p className="text-center">{d.review}</p>
//               <button className='bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl'>View Collection</button>
//             </div>
//           </div>
//         ))}
//       </Slider>
//       </div>
      
//     </div>
//   );
// }

// const data = [
//   {
//     name: `Apple Morgan`,
//     img: `/products/apple_Morgan.jpg`,
//     review: `Apple morgan oil: where the essence of autumn's bounty meets the promise of luscious locks.`
//   },
//   {
//     name: `Berry Bliss`,
//     img: `/products/lipbalm.jpg`,
//     review: `Berry Bliss Lip Balm: A burst of natural color and an irresistible scent to sweeten your smile.`
//   },
//   {
//     name: `Herb Mist`,
//     img: `/products/rosemary water.jpg`,
//     review: `Herb Mist: A refreshing botanical burst for your skin.`
//   },
//   {
//     name: `Citrus Zest`,
//     img: `/products/moistruizer.jpg`,
//     review: `Citrus Zest Moisturizer: A zesty burst of hydration for radiant skin.`
//   },
//   {
//     name: `Dragon Glow Serum`,
//     img: `/products/serum.jpg`,
//     review: `Dragon Fruit Serum: Elevate your skincare routine with the exotic vitality of dragon fruit for a radiant complexion.`
//   },
  
// ];

// export default App;
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Carouselpage.css'; 
import './App.css';
function Carouselpage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true, 
  };

  return (
    <div className="w-3/4 m-auto">
      <div className="mt-20">
        <h2 className="text-2xl font-bold text-center mb-2">PureAura's collection</h2>
        <p className="text-center mb-8">Remarkably effective, purely natural.</p>
        <Slider {...settings} className="carousel-slider">
          {data.map((d) => (
            <div key={d.name} className="carousel-slide-item">
              <div className="h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl">
                <img src={d.img} alt="" className="h-44 w-44 rounded-full"/>
              </div>
              <div className="flex flex-col items-center justify-center gap-4 p-4 bg-white text-black rounded-xl">
                <p className="text-xl font-semibold">{d.name}</p>
                <p className="text-center">{d.review}</p>
                <button className="bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl">View Collection</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

const data = [
  {
    name: `Apple Morgan`,
    img: `/products/apple_Morgan.jpg`,
    review: `Apple morgan oil:Essence  of autumn's bounty meets the promise of luscious locks.`
  },
  {
    name: `Berry Bliss`,
    img: `/products/lipbalm.jpg`,
    review: `Berry Bliss LipBalm: natural color and an irresistible scent to sweeten your smile.`
  },
  {
    name: `Herb Mist`,
    img: `/products/rosemary water.jpg`,
    review: `Herb Mist:Refreshing botanical burst revitalizing  senses with nature's touch.`
  },
  {
    name: `Citrus Zest`,
    img: `/products/moistruizer.jpg`,
    review: `Citrus Zest Moisturizer: A zesty burst of hydration for  radiant & glowing  skin.`
  },
  {
    name: `Dragon Glow Serum`,
    img: `/products/serum.jpg`,
    review: `Dragon Fruit Serum:  The  exotic vitality of dragon fruit for a radiant complexion.`
  },
];

export default Carouselpage;

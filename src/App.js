// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Nav from './components/Nav';
// import Home from './components/Home';
// import About from './components/About';

// import Signup from './components/Signup';
// import Cart from './components/Cart';  // Assuming you have a Cart component
// import ImageSlider from './components/ImageSlider';
// import NewArrivals from './components/NewArrivals';
// import Carouselpage from './components/Carouselpage';
// import ScrollingText from './components/ScrollingText';
// import FollowPage from './components/FollowPage';
// import BlogPage from './components/BlogPage';
// import NewsletterPage from './components/NewsletterPage';
// import CopyrightPage from './components/CopyrightPage';

// const App = () => {
//     return (
//         <Router>
//             <Nav />
//             <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/about" element={<About />} />
//                 <Route path="/blogs" element={<Blog />} />
            
//                 <Route path="/signup" element={<Signup />} />
//                 <Route path="/cart" element={<Cart />} />
//             </Routes>
//             <ImageSlider />
//             <NewArrivals />
//             <Carouselpage />
//             <ScrollingText />     
//             <FollowPage/>
//             <BlogPage/>
//             <NewsletterPage />
//             <CopyrightPage />
//         </Router>
//     )
// }

// export default App;
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Nav from './components/Nav'
import ImageSlider from './components/ImageSlider'
import NewArrivals from "./components/NewArrivals";
import Carouselpage from "./components/Carouselpage";
import ScrollingText from "./components/ScrollingText";
import AboutUsPage from "./components/About";
import BlogPage from "./components/Blog";
import FollowPage from "./components/follow";
import NewsletterPage from "./components/Newsletter";
import CopyrightPage from "./components/Copyright";

const App = () =>
{
  return (
    <>
  
      <Nav/>
      <ImageSlider/>
      <NewArrivals/>
      <Carouselpage/>
      <ScrollingText/>
      <AboutUsPage/>
      <BlogPage/>
      <FollowPage/>
      <NewsletterPage/>
      <CopyrightPage/>
    </>
  )
}

export default App
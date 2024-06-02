import React from 'react';
import Slider from 'react-slick';

const BlogPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 slides at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const blogs = [
    {
      image: '/assets/blog/blog_1.jpg',
      title: 'The Benefits of Hydration for Healthy Skin',
      text: 'Hydration is the cornerstone of skincare, as it replenishes moisture, maintains elasticity, and promotes a youthful complexion. With proper hydration, skin feels supple, plump, and resilient, combating dryness, dullness, and signs of aging.',
    },
    {
      image: '/assets/blog/blog_2.jpg',
      title: 'Understanding the Importance of Exfoliation in Your Skincare Routine',
      text: 'Exfoliation is essential for removing dead skin cells, unclogging pores, and promoting cell turnover, resulting in smoother, brighter, and more even-toned skin.',
    },
    {
      image: '/assets/blog/blog_3.jpg',
      title: 'Unlocking the Secrets of Serums for Radiant Skin',
      text: 'Serums are potent formulations packed with active ingredients that target specific skin concerns, such as hydration, brightening, and anti-aging. By penetrating deeper layers of the skin, serums deliver concentrated nutrients, antioxidants, and peptides, resulting in a more luminous, youthful complexion.',
    },
    {
      image: '/assets/blog/blog_4.jpg',
      title: 'DIY Natural Face Masks',
      text: 'Creating your own face masks using natural ingredients can be a fun and rewarding way to pamper your skin. From soothing oatmeal masks to revitalizing avocado masks, discover how to nourish and rejuvenate your skin with simple, homemade recipes.',
    },
    {
      image: '/assets/blog/blog_5.jpg',
      title: 'Sunscreen 101',
      text: 'Sunscreen is your skin\'s best defense against sun damage, premature aging, and skin cancer. By providing broad-spectrum protection against UVA and UVB rays, sunscreen helps prevent sunburns, dark spots, and wrinkles while preserving skin health and vitality for years to come.',
    }
  ];

  return (
    <div className="flex justify-center items-center">
      <div className="w-3/4 m-auto">
        <h2 className="text-2xl font-bold mb-4">On the Blog</h2>
        <Slider {...settings}>
          {blogs.map((blog, index) => (
            <div key={index} className="px-2">
              <img src={blog.image} alt={`Blog ${index + 1}`} className="w-full rounded" />
              <h3 className="text-lg font-bold my-2">{blog.title}</h3>
              <p className="text-sm">{blog.text}</p>
            </div>
          ))}
        </Slider><div className="mt-4 text-right"> 
        {/* Updated to align button to the top right */}
          <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-800">See More Articles</button>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;

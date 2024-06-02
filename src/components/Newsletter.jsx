import React from 'react';

const NewsletterPage = () => {
  return (
    <div className="max-w-screen-lg mx-auto py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Subscribe to our newsletter</h2>
        <p className="text-lg">Receive updates, exclusive deals, and more!</p>
      </div>
      
      {/* Newsletter Subscription Box */}
      <div className="flex items-center justify-center mb-8">
        <input 
          type="email" 
          placeholder="Your email" 
          className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:border-indigo-600" 
        />
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-r-md hover:bg-indigo-800 focus:outline-none">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5l7 7-7 7" 
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default NewsletterPage;

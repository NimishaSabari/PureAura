import React, { useState } from 'react';

const NewArrivals = () => {
    const [enlargedImage, setEnlargedImage] = useState(null);

    const handleClick = (image) => {
        setEnlargedImage(image);
    };

    const handleClose = () => {
        setEnlargedImage(null);
    };

    return (
        <div className="bg-indigo-100 p-8">
            <h1 className="text-center mb-6 text-4xl font-bold font-serif">Explore a selection of top-tier products, including the latest trending arrivals</h1>
            <div className="flex flex-wrap justify-center">
                <div className="relative m-4 w-64 md:w-1/3 lg:w-1/4">
                    <img 
                        src="/assets/images/verticalimage.jpg" 
                        alt="Vertical" 
                        className={`w-full h-auto cursor-pointer ${enlargedImage === "/assets/images/verticalimage.jpg" ? 'w-2/3' : ''}`} 
                        onClick={() => handleClick("/assets/images/verticalimage.jpg")} 
                    />
                    {(enlargedImage === "/assets/images/verticalimage.jpg") && (
                        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75">
                            <span className="font-bold text-indigo-500">Back in Stock</span>
                            <button className="absolute top-0 right-0 p-2 text-lg text-gray-800" onClick={handleClose}>✕</button>
                        </div>
                    )}
                </div>
                <div className="relative m-4 w-64 md:w-1/3 lg:w-1/4">
                    <img 
                        src="/assets/images/horizontalimage1.jpg" 
                        alt="Horizontal 1" 
                        className={`w-full h-auto cursor-pointer ${enlargedImage === "/assets/images/horizontalimage1.jpg" ? 'w-2/3' : ''}`} 
                        onClick={() => handleClick("/assets/images/horizontalimage1.jpg")} 
                    />
                    {(enlargedImage === "/assets/images/horizontalimage1.jpg") && (
                        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75">
                            <span className="font-bold text-indigo-500">Trending</span>
                            <button className="absolute top-0 right-0 p-2 text-lg text-gray-800" onClick={handleClose}>✕</button>
                        </div>
                    )}
                </div>
                <div className="relative m-4 w-64 md:w-1/3 lg:w-1/4">
                    <img 
                        src="/assets/images/horizontalimage2.jpg" 
                        alt="Horizontal 2" 
                        className={`w-full h-auto cursor-pointer ${enlargedImage === "/assets/images/horizontalimage2.jpg" ? 'w-2/3' : ''}`} 
                        onClick={() => handleClick("/assets/images/horizontalimage2.jpg")} 
                    />
                    {(enlargedImage === "/assets/images/horizontalimage2.jpg") && (
                        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75">
                            <span className="font-bold text-indigo-500">On Sale</span>
                            <button className="absolute top-0 right-0 p-2 text-lg text-gray-800" onClick={handleClose}>✕</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NewArrivals;

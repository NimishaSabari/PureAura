import React from 'react';
import { IonIcon } from '@ionic/react';
import { locationOutline, lockClosedOutline, logoInstagram } from 'ionicons/icons';
import CardCarousel from './CardCarousel';

const FollowPage = () => {
  return (
    <div className="max-w-screen-lg mx-auto py-8">
      <div className="flex items-center justify-center mb-8">
        <h2 className="text-2xl font-bold">Follow us @PureAura</h2>
      </div>
      
      {/* Displaying 6 images in a row */}
      <div className="flex justify-between items-center mb-8">
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <div 
            key={index} 
            className="relative w-1/6 h-auto rounded-md overflow-hidden mr-4"
            style={{ maxWidth: '180px', maxHeight: '180px' }}
          >
            <img 
              src={`/assets/follow/flw_${index}.jpg`} 
              alt={`Follow ${index}`} 
              className="w-full h-full object-cover cursor-pointer transition duration-300 ease-in-out hover:opacity-90" 
            />
            {/* Instagram icon */}
            <IonIcon 
              icon={logoInstagram} 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition duration-300 ease-in-out" 
              style={{ fontSize: '48px' }}
            />
          </div>
        ))}
      </div>
      
      {/* Two line gap */}
      <div className="mb-8"></div>
      
      {/* Shipping, Secure Payment, and Contact Us */}
      <div className="flex justify-between items-center mb-8">
        {/* Shipping */}
        <div className="flex flex-col items-center justify-center mr-8">
          <IonIcon icon={locationOutline} className="w-12 h-12 mb-2" />
          <p className="text-lg font-bold mb-1">FREE US SHIPPING</p>
          <p>On $50+ US orders. Worldwide shipping available.</p>
        </div>

        {/* Secure Payment */}
        <div className="flex flex-col items-center justify-center mr-8">
          <IonIcon icon={lockClosedOutline} className="w-12 h-12 mb-2" />
          <p className="text-lg font-bold mb-1">SECURE PAYMENT</p>
          <p>Your payment information is processed securely.</p>
        </div>

        {/* Contact Us */}
        <div className="flex flex-col items-center justify-center">
          <IonIcon icon={lockClosedOutline} className="w-12 h-12 mb-2" />
          <p className="text-lg font-bold mb-1">CONTACT US</p>
          <p>E-mail us at pure@aura.com</p>
        </div>
      </div>

      {/* Card Carousel Component */}
      <div className="mb-8">
        <CardCarousel />
      </div>
    </div>
  );
};

export default FollowPage;

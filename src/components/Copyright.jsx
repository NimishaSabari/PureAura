import React from 'react';
import { IonIcon } from '@ionic/react';
import { logoFacebook, logoInstagram, logoTwitter, copy } from 'ionicons/icons';

const Copyright = () => {
    return (
        <div className="bg-white py-4 px-6 flex justify-between items-center w-full">
            <div className="text-gray-800 font-bold text-2xl">
                <span className="text-3xl text-indigo-600 mr-1 pt-2">
                    <IonIcon icon={copy} />
                </span>
                © 2024 PureAura
            </div>
            <div className="flex space-x-4">
                <IonIcon icon={logoInstagram} className="text-3xl text-gray-800 hover:text-gray-400 duration-500 cursor-pointer" />
                <IonIcon icon={logoTwitter} className="text-3xl text-gray-800 hover:text-gray-400 duration-500 cursor-pointer" />
                <IonIcon icon={logoFacebook} className="text-3xl text-gray-800 hover:text-gray-400 duration-500 cursor-pointer" />
            </div>
        </div>
    );
};

export default Copyright;

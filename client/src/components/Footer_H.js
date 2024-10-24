import { faFacebookF, faInstagram, faLinkedin, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function Footer_H() {
    return (
    <footer className="bg-blue-800 text-white py-4">
            <div className="container mx-auto flex justify-between">
             
            <div>
                <h2 className="text-2xl font-bold"></h2>
                </div>
                
             <h1 className="text-4xl">YouDawi</h1>
            <div className="flex space-x-4">
                
                <a href="#" className="text-zinc-200 font-serif text-lg">Are You A Doctor?</a>
                               
                </div>
              
                  <div>
                        <p>Address: Dhaka, Bangladesh</p>
                        <p>Phone: +880 12345-6789</p>
                        <p>Email: info@example.com</p>
                    </div>
                    <div className="flex gap-3">
                        <a href="/#" className="border-2 border-white text-white w-7 h-5 flex rounded-full justify-center items-center text-base hover:bg-blue-900 hover:text-white transition-colors">
                            <FontAwesomeIcon icon={faFacebookF} className=""></FontAwesomeIcon>
                        </a>
                        <a href="/#" className="border-2 border-white  text-white  w-7 h-5 flex rounded-full justify-center items-center text-base hover:bg-blue-900 hover:text-white transition-colors">
                            <FontAwesomeIcon icon={faTwitter} className=""></FontAwesomeIcon>
                        </a>
                        <a href="/#" className="border-2  border-white  text-white  w-7 h-5 flex rounded-full justify-center items-center text-base hover:bg-blue-900 hover:text-white transition-colors">
                            <FontAwesomeIcon icon={faLinkedin} className=""></FontAwesomeIcon>
                        </a>
                        <a href="/#" className="border-2  border-white  text-white  w-7 h-5 flex rounded-full justify-center items-center text-base hover:bg-blue-900 hover:text-white transition-colors">
                            <FontAwesomeIcon icon={faInstagram} className=""></FontAwesomeIcon>
                        </a>
                        <a href="/#" className="border-2  border-white  text-white w-7 h-5 flex rounded-full justify-center items-center text-base hover:bg-blue-900 hover:text-white transition-colors">
                            <FontAwesomeIcon icon={faTelegram} className=""></FontAwesomeIcon>
                        </a>
                    </div>
                       
            </div>
            
    </footer>
    );
}

export default Footer_H;
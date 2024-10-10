import React from 'react';
import Navbar from './Navbar';
import myImage from '../pics/photo_doctors.jpg';
import myImage2 from '../pics/home_visit.jpeg';
import myImage3 from '../pics/mobile.jpeg';
import './style.css'
import Footer_h from './Footer';


function LandingPage() {
  return (
    <div>
      <Navbar />
      
       <main className="bg-white text-sky-600 text-center py-16">
                        <h1 className="text-8xl font-bold mb-4">Feel better about finding healthcare</h1>
                        <div className="flex justify-center space-x-8 mb-8">
                  <div className="text-center">
                                 
                                <i className="fas fa-user-md text-3xl mb-2"></i>
                                <p>Profiles for Every Doctor in America</p>
                            </div>
                            <div className="text-center">
                                <i className="fas fa-search text-3xl mb-2"></i>
                                <p>Search by What Matters Most to You</p>
                            </div>
                            <div className="text-center">
                                <i className="fas fa-star text-3xl mb-2"></i>
                                <p>More Than 10 Million Patient Ratings</p>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <img src={myImage} alt="Doctor 1" className="rounded-full shadow-md border-white border-spacing-4 hover:border-8 h-90 w-200 object-cover"/>
                            
                        </div>
                        <section className="flex  py-0">
                        <div className=" mx-auto">
                            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                                <h1 className="text-6xl font-bold mb-4 text-blue-600">Find the care you need</h1>
                          <div className="flex space-x-4 mb-4">
                                     <input type="text" placeholder="Specialties" className="flex-1 p-2 rounded-lg border border-gray-300"/>
                                    <input type="text" placeholder="Search Doctors" className="flex-1 p-2 rounded-lg border border-gray-300"/>
                                    <input type="text" placeholder="Location" className="flex-1 p-2 rounded-lg border border-gray-300"/>

                                    <button className="p-3 bg-blue-600 text-white rounded-lg"><i className="fas fa-search">Search</i></button>
                                </div>
                                <div className="flex space-x-4 text-blue-600">
                                    <p>Search by department and your current location </p>
                                </div>
                            </div>
                        </div>
                    </section>
      </main>
      
      <div className="flex text-black-600 text-6xl p-4">New solutions for better care of you</div>
                <div className="flex justify-center items-center min-h-screen">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
                            <div className="flex-1">
                                <h2 className="text-xl font-bold mb-2">Visit At Home</h2>
                                <p className="text-gray-600 mb-4">Choose a specialty, and the doctor will come to your home.</p>
                                <a href="#" className="text-blue-500">Book a visit</a>
                            </div>
                            <div className="w-1/3">
                                <img src={myImage3} alt="Doctor visiting a child at home" className="rounded-lg"/>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
                            <div className="flex-1">
                                <h2 className="text-xl font-bold mb-2">Doctor call</h2>
                                <p className="text-gray-600 mb-4">To follow up, make a voice or video call.</p>
                                <a href="#" className="text-blue-500">Book Now</a>
                            </div>
                            <div className="w-1/3">
                                <img src={myImage2} alt="Doctor on a video call" className="rounded-lg"/>
                            </div>
                        </div>
                    </div>
                </div>
          );
          <Footer_h/>
    </div>
  );
}

export default LandingPage;

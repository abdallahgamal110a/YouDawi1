import React from 'react';
import Navbar from './Navbar';
import myImage from '../pics/photo_doctors.jpg';
import myImage2 from '../pics/home_visit.jpeg';
import myImage3 from '../pics/mobile.jpeg';
import './style.css'
import Footer_h from './Footer';
import Banner from './Banner';


function LandingPage() {
  return (
    <div>
          <Navbar />
           <Banner/>
      
       <main className="bg-white text-sky-600 text-center py-16">
                        <h1 className="text-6xl font-bold mb-4">Feel better about finding healthcare</h1>
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
                        <section className="flex  py-0">
                        <div className="mx-auto absolute  top-12 bottom-50 left-20 right-15">
                            <div className="bg-gray-100 p-4 rounded-lg shadow-md opacity-90">
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
          <Footer_h/>
    </div>
  );
}

export default LandingPage;

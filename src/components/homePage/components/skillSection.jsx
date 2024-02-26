import React from 'react';

const SkillSection = () => {
  return (
    <div className='container mx-auto px-10 mt-20'>
      <h1 className='font-bold text-4xl text-center mb-10'>
        Our Services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Column 1 */}
        <div className="relative border border-gray-300 pr-4 mb-6 md:mb-0 group overflow-hidden rounded-xl transition duration-300 ease-in-out transform hover:scale-110 hover:border-blue-500 hover:shadow-lg">
          <div className="p-4">
            <h3 className="text-blue-500">
              Development
            </h3>
            <h2 className="text-lg font-bold">Software Development</h2>
            <p className="mt-2 mb-4">We specialize in creating robust and scalable software solutions tailored to your specific needs. From web applications to mobile apps, our development team ensures high-quality products that meet your business objectives.</p>
            <button className="text-white bg-blue-500 rounded-xl px-4 py-2 hover:bg-blue-600 transition duration-300 ease-in-out">Learn More</button>
          </div>
        </div>

        {/* Column 2 */}
        <div className="relative border border-gray-300 pr-4 mb-6 md:mb-0 group overflow-hidden rounded-xl transition duration-300 ease-in-out transform hover:scale-110 hover:border-blue-500 hover:shadow-lg">
          <div className="p-4">
            <h3 className="text-blue-500">
              Graphics
            </h3>
            <h2 className="text-lg font-bold">UI/UX Design</h2>
            <p className="mt-2 mb-4">Our team of designers crafts captivating user experiences and intuitive interfaces to elevate your brand. Whether it's a website redesign or creating a brand new application, we focus on usability and aesthetics to engage your audience effectively.</p>
            <button className="text-white bg-blue-500 rounded-xl px-4 py-2 hover:bg-blue-600 transition duration-300 ease-in-out">Learn More</button>
          </div>
        </div>

        {/* Column 3 */}
        <div className="relative border border-gray-300 pl-4 mb-6 md:mb-0 group overflow-hidden rounded-xl transition duration-300 ease-in-out transform hover:scale-110 hover:border-blue-500 hover:shadow-lg">
          <div className="p-4">
            <h3 className="text-blue-500">
              Upgrade
            </h3>
            <h2 className="text-lg font-bold">Upgrade Existing Application</h2>
            <p className="mt-2 mb-4">Enhance the functionality and performance of your current applications with our seamless upgrade services. Whether it's adding new features, optimizing code, or improving user experience, our team ensures your application stays competitive in the market.</p>
            <button className="text-white bg-blue-500 rounded-xl px-4 py-2 hover:bg-blue-600 transition duration-300 ease-in-out">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillSection;

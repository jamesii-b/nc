import React from "react";
import MaintenancePage from "./maintenance";
function About() {
  return (
    <div className="about-us-page">
      {/* Hero Section */}
      <section className="hero bg-center bg-cover h-screen relative">
        <video
          src="hero-video.mp4"
          autoPlay
          loop
          muted
          className="absolute inset-0 object-cover w-full h-full opacity-25"
        />
        <div className="container mx-auto px-4 py-24 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-bold text-white">
            Where Tech Innovation Meets Youthful Energy
          </h1>
          <p className="text-xl text-gray-300 mt-4">
            We help businesses of all sizes achieve their tech goals through
            expert outsourcing in software development, UI/UX design, and more.
          </p>
          <button className="btn btn-primary mt-8">Get a Free Quote</button>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="our-story py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Our Story</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="story-content">
              <p className="text-xl leading-loose">
                {/* Replace with your captivating story narrative */}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas sed diam eget risus porta condimentum. Aenean eu leo
                quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
                Fusce dapibus, tellus eget pulvinar euismod, felis enim pretium
                nulla, at imperdiet libero magna vitae diam.
              </p>
            </div>
            <img
              src="story-image.jpg"
              alt="Story image"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="our-values py-16 bg-gray-100">
        <div className="container mx-auto px-4 flex flex-wrap justify-center">
          {/* Replace with your core values and corresponding icons */}
          <div className="value-item w-full md:w-1/2 lg:w-1/3 px-4 py-8 text-center">
            <i className="fas fa-lightbulb text-3xl text-primary mb-4"></i>
            <h3>Innovation</h3>
            <p className="text-gray-700">
              We are passionate about creating cutting-edge solutions that drive
              results.
            </p>
          </div>
          <div className="value-item w-full md:w-1/2 lg:w-1/3 px-4 py-8 text-center">
            <i className="fas fa-rocket text-3xl text-primary mb-4"></i>
            <h3>Quality</h3>
            <p className="text-gray-700">
              We deliver exceptional work that exceeds your expectations.
            </p>
          </div>
          <div className="value-item w-full md:w-1/2 lg:w-1/3 px-4 py-8 text-center">
            <i className="fas fa-handshake text-3xl text-primary mb-4"></i>
            <h3>Integrity</h3>
            <p className="text-gray-700">
              We build trust through transparency, honesty, and ethical
              practices.
            </p>
          </div>
          <div className="value-item w-full md:w-1/2 lg:w-1/3 px-4 py-8 text-center">
            <i className="fas fa-users text-3xl text-primary mb-4"></i>
            <h3>Collaboration</h3>
            <p className="text-gray-700">
              We thrive on teamwork and communication to achieve shared goals.
            </p>
          </div>
          <div className="value-item w-full md:w-1/2 lg:w-1/3 px-4 py-8 text-center"></div>
        </div>
      </section>
    </div>
  );
}

export default About;

import React, { useState } from 'react';

const contentData = [
  {
    id: 1,
    title: 'Software Development',
    description:
      ` We understand that your business is unique, and so are your requirements.Our approach to custom software development ensures that every solution we deliver is tailor- made to fit your specific needs, offering unparalleled functionality and efficiency.From conceptualization to implementation, we have the skills and knowledge to handle even the most complex projects with ease. 
      From initial consultations to regular progress updates, you can trust us to keep you informed and involved throughout the development process.
      `,
    image: '/services/custom.webp',
  },
  {
    id: 2,
    title: 'App Development',
    description:
      ` Whether you need an iOS, Android, or cross-platform app, our team has the expertise and experience to deliver exceptional results. From native to hybrid development, we leverage the latest tools and technologies to ensure that your app performs flawlessly on any device. A great app is not just about functionality; it's also about the user experience. Our design philosophy revolves around creating intuitive interfaces and engaging experiences that keep users coming back for more, ultimately driving customer satisfaction and loyalty.`,
    image: '/services/mobile.webp',
  },
  {
    id: 3,
    title: 'Web Development',
    description:
      `We understand that your website is often the first point of contact between your business and potential customers.That's why we tailor our web development services to reflect your brand identity, values, and goals, ensuring a unique and memorable online experience for your visitors.Our commitment to responsive design ensures that your website will adapt seamlessly to desktops, laptops, tablets, and smartphones, providing an optimal user experience every time.`,
    image: '/services/web.webp',
  },
];

function ContentBox() {
  const [selectedSection, setSelectedSection] = useState(contentData[0].title);

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  const renderContent = () => {
    const selectedContent = contentData.find((item) => item.title === selectedSection);

    if (!selectedContent) return null;

    return (
      <div className="md:p-10 md:flex md:items-center md:justify-between md:mx-auto md:max-w-4xl ">
        <img
          src={selectedContent.image}
          alt={selectedContent.title}
          className="w-full max-h-60 md:mr-5 h-auto mx-10 md:inset-0 md:max-w-64 md:min-h-52 md:h-auto md:max-h-80 md:ml-5 object-cover rounded-lg md:rounded-none"
        />
        <div className="md:w-2/3 md:mr-20 ">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">{selectedContent.title}</h2>
          <p className="text-lg text-gray-700">{selectedContent.description}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="hidden md:block lg:block ">
      <div className="bg-inherit flex flex-wrap justify-center md:justify-between px-5 md:px-20 overflow-x-auto">
        {contentData.map((item) => (
          <div
            key={item.id}
            className={`cursor-pointer text-lg font-semibold mx-2 my-2 md:my-0 p-3 ${selectedSection === item.title ? 'bg-black text-white' : 'text-gray-800 hover:bg-gray-300'
              }`}
            onClick={() => handleSectionClick(item.title)}
          >
            {item.title}
          </div>
        ))}
      </div>
      <div className="bg-gray-100   md:mb-10 overflow-x-auto">{renderContent()}</div>
    </div>
  );
}

export default ContentBox;

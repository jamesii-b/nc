import React from 'react';
import HeadBar from '../reusable/head-bar';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface BlogPreview {
    title: string;
    sub_title: string;
    image: string;
    url: string;
}

const blogDatum: BlogPreview[] = [
    {
        title: "Navigating the Pandemic: The Resilient Journey of Amul with Technology",
        sub_title: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates error blanditiis recusandae provident! Ex, repellat.`,
        image: "/misc/amul.webp",
        url: "/blogs/amul"
    },
    {
        title: "Mastering Cost Efficiency: Strategies for Optimizing Spending in AWS Without Compromising Performance",
        sub_title:
            ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates error blanditiis recusandae provident! Ex, repellat.`,
        image: "/misc/aws.webp",
        url: "/blogs/aws"
    },
    
];

function BlogPage() {
    const navigate = useNavigate(); // Move useNavigate hook inside the component

    function goToBlog(url: string) {
        navigate(url); // Use the navigate function inside the component
    }

    return (
        <div>
            {/* Header component */}
            <HeadBar backgroundColor="bg-primary" imageSrc="/misc/blog01.webp" title="Blogs" />
            <div className='my-20'>

                <h1 className='font-bold text-center font-body text-3xl'>
                    Blogs
                </h1>
                <div className="flex flex-col md:mx-32 md:my-10 md:flex-row items-center justify-between gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="md:w-1/2"
                    >
                        <img src="/misc/case-study.webp" alt="Case Study Left" className="w-full rounded-lg shadow-md" />
                    </motion.div>
                    <div className="md:w-1/2 md:pl-8"> {/* Right Column */}
                        <div className="text-center md:text-left"> {/* Text Container */}
                            <motion.h2
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
                            >
                                The Apubt Case Study
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                                className="text-lg text-gray-600 mb-6"
                            >
                                Explore the Apubt case study to learn how we helped them achieve their business goals.
                            </motion.p>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => { goToBlog('/blogs/apubt') }}
                                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-md shadow-md transition duration-300 ease-in-out"
                            >
                                Read More
                            </motion.button>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 my-10 md:grid-cols-2 gap-8 mx-auto max-w-screen-lg">
                    {blogDatum.map((blog, index) => (
                        <div className='md:mx-2' key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="rounded-lg overflow-hidden shadow-md h-full bg-white"
                            >
                                <img src={blog.image} alt="Blog Preview" className="w-full h-52 object-cover object-center" />
                                <div className="p-6 h-full"> {/* Ensure the inner content takes up full height */}
                                    <h2 className="text-2xl md:text-2xl font-bold mb-4 text-gray-900">{blog.title}</h2>
                                    <p className="text-base md:text-xl text-gray-700 mb-6">{blog.sub_title}</p>
                                    <button
                                        onClick={() => { goToBlog(blog.url) }}
                                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-md shadow-md transition duration-300 ease-in-out"
                                    >
                                        Read More
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div >
        </div >
    );
}

export default BlogPage;

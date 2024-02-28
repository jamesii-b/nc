import React from 'react';

const BlogPost = ({ title, date, coverImgSrc, backgroundText, children }) => {
    return (
        <div className=" flex py-20 flex-col sm:px-10 items-center justify-center md:max-w-4xl mx-auto">
            <div className=" w-full overflow-hidden">
                <header className="bg-blue-500 px-6 py-4 md:hidden lg:hidden">
                    <h1 className="text-3xl font-semibold text-white">{title}</h1>
                    <p className="">Published on{date}</p>
                </header>
                <article className=" w-full">
                    <section className="mb-8 md:flex items-end  ">
                        <img src={coverImgSrc} alt="" className="max-h-96 mx-auto " id='img-top' />

                        <div>
                            <header className="text-black px-6 py-4 ">
                                <h1 className="text-3xl font-semibold  ">{title}</h1>
                                <p className=" ml-3">Published on February 28, 2024</p>
                            </header>
                            <p className="text-lg  ml-10  text-wrap">
                                {backgroundText}
                            </p>
                        </div>
                    </section>
                    {children}
                </article>

            </div>
        </div>
    );
};

export default BlogPost;

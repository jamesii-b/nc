import React from 'react';
import BlogPost from '../blogPost';
import HeadBar from '../../reusable/head-bar';


const APUBT = () => {

    return (
        <div>
            <HeadBar imageSrc="/misc/blog01.webp" title="Blogs" backgroundColor="bg-primary" />
            <BlogPost

                backgroundText="
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum id velit quisquam sequi error iusto labore laborum perspiciatis non a.
           "
                children={
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum id velit quisquam sequi error iusto labore laborum perspiciatis non a.
                    </div>
                }
                coverImgSrc="/public/others/amul.webp"
                date="Feburary 20, 2024"
                title="The APUBT way: Transforming the Education System"

            />
        </div>
    )
};

export default APUBT;




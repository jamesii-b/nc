import React from 'react';
import BlogPost from '../blogPost';
import HeadBar from '../../reusable/head-bar';


const AWS = () => {

    return (
        <div>
            <HeadBar imageSrc="/public/others/h1.webp" title="Blogs" backgroundColor="bg-primary" />
            <BlogPost

                backgroundText="
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum id velit quisquam sequi error iusto labore laborum perspiciatis non a.
           "
                children={
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum id velit quisquam sequi error iusto labore laborum perspiciatis non a.
                    </div>
                }
                coverImgSrc="/public/others/aws.webp"
                date="January 12, 2024"
                title="Mastering Cost Efficiency: Optimizing Spending in AWS Without Compromising Performance"
            />
        </div>
    )
};

export default AWS;




import React from 'react';

const About = () => {
    return (
        <>
            <div className="hero min-h-screen bg-base-200 rounded">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://tajdining.com/uploads/chefs/small/53_small_2022_07_26_03_37_47.jpg" alt='' className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">About My Self</h1>
                        <p className="py-6">Cooking is something that makes me happy and I love cooking for others. I always wanted to be a chef and I really worked hard. It is a very nice profession where you can learn new things daily. When I serve a bowl of a recipe, it contains my love, hard work, and passion for my profession. I have brought here some essays on the different aspects of being a chef. Hope you will like it and will be helpful for you.</p>
                    </div>
                </div>
            </div>
            <div className="hero min-h-screen bg-base-200 my-12">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">About this Website</h1>
                        <p className="py-6">You can see my all dishes in this website. You also can review my dishes.You can write about my dishes.Please review my dishes that makes me more anchorage to hard work.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
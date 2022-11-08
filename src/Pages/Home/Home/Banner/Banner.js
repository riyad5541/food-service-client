import React from 'react';

const Banner = () => {
    return (
        <div className="carousel w-full my-12">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://www.thespruceeats.com/thmb/0jGgChgd4URSWa1_pM0q-UUtZvk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/PepperoniPizzaSliders-05fc7f904514447093f0ee212ad17cf1.jpg" alt="" className="w-full rounded-xl h-96" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/10/2/0/FNM_110112-Beef-Pho-Recipe_s4x3.jpg.rend.hgtvcom.406.305.suffix/1382451880742.jpeg" alt="" className="w-full rounded-xl h-96" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://1.bp.blogspot.com/-lGwIVB12lzc/XydvYzmpHtI/AAAAAAAAkls/MQSRghvcbP4kITAIpKA-uRDbLWoADbw_wCLcBGAsYHQ/s640/20200622_115533.jpg" alt="" className="w-full rounded-xl h-96" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;
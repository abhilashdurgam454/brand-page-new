import React from 'react'

const Hero = () => {
    return (
        <div className='container'>

            <div className='box'>
                <h1 className='box-1'>
                    YOUR FEET <br /> DESERVES <br /> THE BEST
                </h1>

                <p className='para'>
                    YOUR FEET DESERVE THE BEST AND WE’RE HERE TO  <br />HELP YOU WITH OUR SHOES.YOUR FEET DESERVE <br /> THE BEST AND WE’RE HERE TO HELP YOU WITH OUR <br /> SHOES.
                </p>
                <div className='btn-1'>
                    <button className='btn-left'>Shop Now</button>
                    <button className='btn-right'>Category</button>
                </div>
                <div>
                   
                    <img src='/images/shop.png' />
                </div>


            </div>
            <div>
                <img src='/images/shoe_image.png' />
            </div>

        </div>
    )
}

export default Hero
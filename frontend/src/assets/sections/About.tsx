import React from 'react';
import GridImg1 from '../images/image 1.png';
import GridImg2 from '../images/image 2.png';
import GridImg3 from '../images/image 3.png';
import { BsArrowRight } from 'react-icons/bs';

const About = () => {
  return (
    <div>

      {/* Heading */}
      <div>
        <div />
        <h1>Why should you have a cat?</h1>
        <p>
          Having a cat around you can actually trigger the
          release of calming chemicals in your body, which 
          lower your stress and anxiety levels.
        </p>
        <span className='flex items-center text-[#29150799] font-bold text-lg md:text-xl gap-2 hover:underline cursor-pointer hover:underline-offset-2'>READ MORE <BsArrowRight /></span>
      </div>

      {/* Grid images */}
      <div>

      </div>
    </div>
  )
}

export default About
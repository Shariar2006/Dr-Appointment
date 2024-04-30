import banner2 from '../../../assets/banner2.png'
import { FaLocationDot } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";


const Banner = () => {
    return (
        <div>
            <div>
                <img src={banner2} alt="" />
                <div className='absolute -mt-44 ml-[420px] max-w-6xl mx-auto text-center'>
                    <p className='text-2xl font-semibold mb-8'>Find expert Doctors for an In-clinic session here </p>
                    <div className='flex justify-center items-center'>
                            <div>
                            <input className='w-[200px] border rounded-lg outline-none py-3 px-5 bg-white mr-3' type="text" name="" id="" />
                            <span className='absolute flex items-center justify-center gap-3 text-[#3A643B] -mt-9 ml-5'><FaLocationDot/> <span className='text-gray-500'>Select Location</span> <IoIosArrowDown/></span>
                            </div>
                            <div>
                            <input placeholder='eg. Doctor, specialisation, clinic name' className='w-[474px] border rounded-lg outline-none py-3 px-5 bg-white' type="text" name="" id="" />
                            <span className='absolute mt-4 -ml-9'><FaArrowRightLong/></span>
                            </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
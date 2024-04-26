import banner1 from '../../../assets/banner1.png'
import avatar from '../../../assets/avatar2.png'
import { HiBadgeCheck } from "react-icons/hi";
import { FaStar } from "react-icons/fa";



const Banner = () => {
    return (
        <div className="mt-12">
            <div className='relative'>
                <img className='' src={banner1} alt="" />
                <div className='absolute w-full h-[150px] bg-[#FFFBF2] z-10 -mt-16 border flex items-center'>
                    <img className='w-40 -mt-9 ml-5' src={avatar} alt="" />
                    <div className='mr-16 ml-5'>
                        <h1 className='text-xl font-semibold flex items-center gap-1'>Dr. Bruce Willis <span><HiBadgeCheck className='text-blue-800' /></span></h1>
                        <h3 className='text-sm font-semibold text-[#3A643B] my-1'>Gynecologist</h3>
                        <h1 className='flex items-center gap-1'>4.2 <span className='flex text-orange-500'><FaStar /><FaStar /><FaStar /><FaStar /></span></h1>
                    </div>
                    <div className='flex items-center justify-center gap-16 text-center'>
                        <div>
                            <h1 className='text-sm font-semibold text-[#3A643B]'>Followers</h1>
                            <h4 className='text-lg font-bold'>850</h4>
                        </div>
                        <div>
                            <h1 className='text-sm font-semibold text-[#3A643B]'>Following</h1>
                            <h4 className='text-lg font-bold'>18k</h4>
                        </div>
                        <div>
                            <h1 className='text-sm font-semibold text-[#3A643B]'>Post</h1>
                            <h4 className='text-lg font-bold'>250</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
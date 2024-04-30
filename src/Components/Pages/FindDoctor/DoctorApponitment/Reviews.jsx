import avatar from '../../../assets/avatar3.png'
import { FaStar } from "react-icons/fa";

const Reviews = () => {
    return (
        <div className=" border rounded-xl mb-5">
            <div className="bg-gradient-to-r from-[#F4F7EC] to-[#FBFCFB] rounded-tl-xl rounded-tr-xl h-16 flex px-8 items-center">
                <h1 className="text-xl font-semibold">My Work Experience</h1>
            </div>
            <div className="px-8 py-7 space-y-5">
                <div className='space-y-3 bg-gray-50 rounded-xl p-4'>
                    <div className='flex items-center'>
                        <img className='w-12' src={avatar} alt="" />
                        <div className='ml-4 mr-20 font-semibold'>
                            <h1>Alicent Hightower</h1>
                            <p className='text-gray-400'>Consulted for Skin care</p>
                        </div>
                        <p className='text-gray-400'>20 January 2023</p>
                    </div>
                    <h1 className='flex items-center gap-1'> <span className='flex text-orange-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span></h1>
                    <p className='text-gray-600'>Might be bit early to confirm but yes I can see noticeable difference in my hairfall. will write again after using it for longer periods</p>
                </div>
                <div className='space-y-3 bg-gray-50 rounded-xl p-4'>
                    <div className='flex items-center'>
                        <img className='w-12' src={avatar} alt="" />
                        <div className='ml-4 mr-20 font-semibold'>
                            <h1>Alicent Hightower</h1>
                            <p className='text-gray-400'>Consulted for Skin care</p>
                        </div>
                        <p className='text-gray-400'>20 January 2023</p>
                    </div>
                    <h1 className='flex items-center gap-1'> <span className='flex text-orange-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span></h1>
                    <p className='text-gray-600'>Might be bit early to confirm but yes I can see noticeable difference in my hairfall. will write again after using it for longer periods</p>
                </div>
            </div>
        </div>
    );
};

export default Reviews;
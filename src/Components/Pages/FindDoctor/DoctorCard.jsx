import { FaStar } from 'react-icons/fa';
import avatar1 from '../../../assets/avatar1.png'
import { CiTablets1 } from "react-icons/ci";
import { MdOutlineMessage } from "react-icons/md";
import { LuGraduationCap } from "react-icons/lu";
import { Link } from 'react-router-dom';


const DoctorCard = () => {
    return (
        <div className="max-w-6xl mx-auto mb-10 flex justify-between items-center gap-10">
            <div className="w-[356px] h-[561px] bg-[#FFF7E2] rounded-2xl p-8 border shadow-md">
                <img className='w-[150px] mx-auto' src={avatar1} alt="" />
                <h1 className='absolute flex justify-between items-center bg-black text-white w-[65px] mx-auto px-3 rounded-full -mt-6 ml-28'>4.2 <span className='flex text-orange-500'><FaStar /></span></h1>
                <h1 className='text-center text-3xl font-semibold mt-4'>Dr. Prerna Narang</h1>
                <div className='mt-4 space-y-2 ml-5'>
                    <p className='flex items-center gap-2 text-gray-600'><CiTablets1 className='font-bold' />Male-Female Infertility</p>
                    <p className='flex items-center gap-2 text-gray-600'><LuGraduationCap />7 years of Experience</p>
                    <p className='flex items-center gap-2 text-gray-600'><MdOutlineMessage />Speaks: English, Hindi, Marathi</p>
                </div>
                <div className="my-5 flex items-center justify-center gap-2">
                    <div className="text-center p-2 border border-gray-300 rounded-lg text-sm">
                        <h2 className="font-semibold">Video Consultation</h2>
                        <h2 className="text-[#3A643B] font-semibold">₹800</h2>
                    </div>

                    <div className="text-center p-2 border border-gray-300 rounded-lg text-sm">
                        <h2 className="font-semibold">Chat Consultation</h2>
                        <h2 className="text-[#3A643B] font-semibold">Free</h2>
                    </div>
                </div>
                <div>
                    <Link to='/doctorAppointment'>
                        <button className='w-full border-2 border-[#3A643B] py-2 px-6 rounded-lg font-semibold text-[#3A643B] bg-white mb-2'>View Profile</button>
                    </Link>
                    <Link to='/doctorAppointment'>
                        <button className='w-full bg-[#3A643B] py-2 px-7 rounded-lg font-semibold text-[#fff]'>Book a consultation</button>
                    </Link>
                </div>
            </div>
            <div className="w-[356px] h-[561px] bg-[#FFF7E2] rounded-2xl p-8 border shadow-md">
                <img className='w-[150px] mx-auto' src={avatar1} alt="" />
                <h1 className='absolute flex justify-between items-center bg-black text-white w-[65px] mx-auto px-3 rounded-full -mt-6 ml-28'>4.2 <span className='flex text-orange-500'><FaStar /></span></h1>
                <h1 className='text-center text-3xl font-semibold mt-4'>Dr. Prerna Narang</h1>
                <div className='mt-4 space-y-2 ml-5'>
                    <p className='flex items-center gap-2 text-gray-600'><CiTablets1 className='font-bold' />Male-Female Infertility</p>
                    <p className='flex items-center gap-2 text-gray-600'><LuGraduationCap />7 years of Experience</p>
                    <p className='flex items-center gap-2 text-gray-600'><MdOutlineMessage />Speaks: English, Hindi, Marathi</p>
                </div>
                <div className="my-5 flex items-center justify-center gap-2">
                    <div className="text-center p-2 border border-gray-300 rounded-lg text-sm">
                        <h2 className="font-semibold">Video Consultation</h2>
                        <h2 className="text-[#3A643B] font-semibold">₹800</h2>
                    </div>

                    <div className="text-center p-2 border border-gray-300 rounded-lg text-sm">
                        <h2 className="font-semibold">Chat Consultation</h2>
                        <h2 className="text-[#3A643B] font-semibold">Free</h2>
                    </div>
                </div>
                <div>
                    <Link to='/doctorAppointment'>
                        <button className='w-full border-2 border-[#3A643B] py-2 px-6 rounded-lg font-semibold text-[#3A643B] bg-white mb-2'>View Profile</button>
                    </Link>
                    <Link to='/doctorAppointment'>
                        <button className='w-full bg-[#3A643B] py-2 px-7 rounded-lg font-semibold text-[#fff]'>Book a consultation</button>
                    </Link>
                </div>
            </div>
            <div className="w-[356px] h-[561px] bg-[#FFF7E2] rounded-2xl p-8 border shadow-md">
                <img className='w-[150px] mx-auto' src={avatar1} alt="" />
                <h1 className='absolute flex justify-between items-center bg-black text-white w-[65px] mx-auto px-3 rounded-full -mt-6 ml-28'>4.2 <span className='flex text-orange-500'><FaStar /></span></h1>
                <h1 className='text-center text-3xl font-semibold mt-4'>Dr. Prerna Narang</h1>
                <div className='mt-4 space-y-2 ml-5'>
                    <p className='flex items-center gap-2 text-gray-600'><CiTablets1 className='font-bold' />Male-Female Infertility</p>
                    <p className='flex items-center gap-2 text-gray-600'><LuGraduationCap />7 years of Experience</p>
                    <p className='flex items-center gap-2 text-gray-600'><MdOutlineMessage />Speaks: English, Hindi, Marathi</p>
                </div>
                <div className="my-5 flex items-center justify-center gap-2">
                    <div className="text-center p-2 border border-gray-300 rounded-lg text-sm">
                        <h2 className="font-semibold">Video Consultation</h2>
                        <h2 className="text-[#3A643B] font-semibold">₹800</h2>
                    </div>

                    <div className="text-center p-2 border border-gray-300 rounded-lg text-sm">
                        <h2 className="font-semibold">Chat Consultation</h2>
                        <h2 className="text-[#3A643B] font-semibold">Free</h2>
                    </div>
                </div>
                <div>
                    <Link to='/doctorAppointment'>
                        <button className='w-full border-2 border-[#3A643B] py-2 px-6 rounded-lg font-semibold text-[#3A643B] bg-white mb-2'>View Profile</button>
                    </Link>
                    <Link to='/doctorAppointment'>
                        <button className='w-full bg-[#3A643B] py-2 px-7 rounded-lg font-semibold text-[#fff]'>Book a consultation</button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default DoctorCard;
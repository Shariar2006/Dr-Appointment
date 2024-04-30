// import AboutMe from "./DoctorApponitment/AboutMe";
// import Banner from "./DoctorApponitment/Banner";
// import Concerns from "./DoctorApponitment/Concerns";
// import MyExperience from "./DoctorApponitment/MyExperience";
// import PickTimeSlot from "./DoctorApponitment/PickTimeSlot";
// import Reviews from "./DoctorApponitment/Reviews";
// import SelectSession from "./DoctorApponitment/SelectSession";
// import SelectShift from "./DoctorApponitment/SelectShift";
// import SpecializeIn from "./DoctorApponitment/SpecializeIn";
import { IoIosArrowDown } from "react-icons/io";

import Banner from "./Banner";

const FindDoctor = () => {
    return (

        <div>
            <Banner />
            <div className="border-b">
                <div className="max-w-6 mx-auto p-4 flex justify-center items-center gap-6">
                    <button className="text-gray-500 flex items-center gap-5 bg-gray-100 px-3 rounded-md py-1">Expertise <IoIosArrowDown /></button>
                    <button className="text-gray-500 flex items-center gap-5 bg-gray-100 px-3 rounded-md py-1">Gender <IoIosArrowDown /></button>
                    <button className="text-gray-500 flex items-center gap-5 bg-gray-100 px-3 rounded-md py-1">Fees <IoIosArrowDown /></button>
                    <button className="text-gray-500 flex items-center gap-5 bg-gray-100 px-3 rounded-md py-1">Languages <IoIosArrowDown /></button>
                    <button className="text-[#3A643B] flex items-center gap-5 bg-[#dceedc] px-3 rounded-md py-1">Allfilters <IoIosArrowDown /></button>
                </div>
            </div>
        </div>

        // <div className="max-w-7xl mx-auto">
        //     <Banner/>
        //     <div className="flex justify-between mt-32 gap-7">
        //         <div className="flex-1  w-full">
        //             <AboutMe/>
        //             <SpecializeIn/>
        //             <Concerns/>
        //             <MyExperience/>
        //             <Reviews/>
        //         </div>
        //         <div className="flex-1 border w-full h-full px-8 py-7 rounded-xl">
        //             <div className="border border-gray-200 rounded-xl py-3 px-6 flex justify-between items-center text-xl font-semibold">
        //                 <p>Appointment Fee</p>
        //                 <p className="text-[#3A643B]">₹699.00</p>
        //             </div>
        //                 <SelectSession/>
        //                 <PickTimeSlot/>
        //                 <SelectShift/>
        //                 <button className='bg-[#3A643B] w-full py-4 mt-8 rounded-lg text-xl text-center font-semibold text-[#fff]'>Make an appointment</button>
        //         </div>
        //     </div>
        // </div>
    );
};

export default FindDoctor;
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
import { IoMdClose } from "react-icons/io";


import Banner from "./Banner";
import DoctorCard from "./DoctorCard";

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

            <div className="py-12 px-36 flex justify-end items-center gap-6">
                <p className="text-gray-700 flex items-center gap-5 bg-gray-100 px-4 rounded-full py-2">Hair care  <IoMdClose /></p>
                <p className="text-gray-700 flex items-center gap-5 bg-gray-100 px-4 rounded-full py-2">Female <IoMdClose /></p>
                <p className="text-gray-700 flex items-center gap-5 bg-gray-100 px-4 rounded-full py-2">Rs.0-Rs.500 <IoMdClose /></p>
                <p className="text-gray-700 flex items-center gap-5 bg-gray-100 px-4 rounded-full py-2">Hindi <IoMdClose /></p>
            </div>
            <DoctorCard/>
        </div>
    );
};

export default FindDoctor;
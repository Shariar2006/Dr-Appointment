import AboutMe from "./AboutMe";
import Banner from "./Banner";
import Concerns from "./Concerns";
import MyExperience from "./MyExperience";
import PickTimeSlot from "./PickTimeSlot";
import Reviews from "./Reviews";
import SelectSession from "./SelectSession";
import SelectShift from "./SelectShift";
import SpecializeIn from "./SpecializeIn";

const DoctorAppointment = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Banner/>
            <div className="flex justify-between mt-32 gap-7">
                <div className="flex-1  w-full">
                    <AboutMe/>
                    <SpecializeIn/>
                    <Concerns/>
                    <MyExperience/>
                    <Reviews/>
                </div>
                <div className="flex-1 border w-full h-full px-8 py-7 rounded-xl">
                    <div className="border border-gray-200 rounded-xl py-3 px-6 flex justify-between items-center text-xl font-semibold">
                        <p>Appointment Fee</p>
                        <p className="text-[#3A643B]">₹699.00</p>
                    </div>
                        <SelectSession/>
                        <PickTimeSlot/>
                        <SelectShift/>
                        <button className='bg-[#3A643B] w-full py-4 mt-8 rounded-lg text-xl text-center font-semibold text-[#fff]'>Make an appointment</button>
                </div>
            </div>
        </div>
    );
};

export default DoctorAppointment;
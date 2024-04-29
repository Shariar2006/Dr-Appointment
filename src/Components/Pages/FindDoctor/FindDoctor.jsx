import AboutMe from "./AboutMe";
import Banner from "./Banner";
import Concerns from "./Concerns";
import MyExperience from "./MyExperience";
import Reviews from "./Reviews";
import SelectSession from "./SelectSession";
import SpecializeIn from "./SpecializeIn";

const FindDoctor = () => {
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
                <div className="flex-1 border w-full px-8 py-7 rounded-xl">
                    <div className="border border-gray-200 rounded-xl py-3 px-6 flex justify-between items-center text-xl font-semibold">
                        <p>Appointment Fee</p>
                        <p className="text-[#3A643B]">₹699.00</p>
                    </div>
                        <SelectSession/>
                </div>
            </div>
        </div>
    );
};

export default FindDoctor;
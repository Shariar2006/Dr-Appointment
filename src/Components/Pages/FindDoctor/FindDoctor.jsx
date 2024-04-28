import AboutMe from "./AboutMe";
import Banner from "./Banner";
import SpecializeIn from "./SpecializeIn";

const FindDoctor = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <Banner/>
            <div className="flex justify-between mt-32 gap-7">
                <div className="flex-1  w-full">
                    <AboutMe/>
                    <SpecializeIn/>
                </div>
                <div className="flex-1 border w-full">kjhkjh</div>
            </div>
        </div>
    );
};

export default FindDoctor;
import { LuCalendar } from "react-icons/lu";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";


const PickTimeSlot = () => {
    return (
        <div>
            <div className="border-t border-gray-400 mt-10">
                <div className="absolute -mt-5 flex items-center justify-between">
                    <p className="text-xl font-semibold  bg-white px-3 border-gray-500">Pick a Time slot</p>
                    <div className="text-2xl p-2 border rounded-full bg-white ml-[387px]"><LuCalendar /></div>
                </div>
                <div className="mt-10 flex items-center justify-center space-x-3">
                    <IoIosArrowDropleft className="text-3xl text-gray-500"/>
                    <div className="text-center p-3 border border-gray-300 rounded-lg">
                        <h2 className="font-semibold text-lg">Mon, 10 Oct</h2>
                        <h2 className="text-gray-500 text-lg font-semibold">10 slots</h2>
                    </div>
                    <div className="text-center p-3 border border-[#3A643B] bg-gray-100 rounded-lg">
                        <h2 className="text-[#3A643B] font-semibold text-lg flex items-center gap-2">Tue, 11 Oct</h2>
                        <h2 className="text-red-500 text-lg font-semibold">02 slots</h2>
                    </div>
                    <div className="text-center p-3 border border-gray-300 rounded-lg">
                        <h2 className="font-semibold text-lg">Wed, 12 Oct</h2>
                        <h2 className="text-yellow-500 text-lg font-semibold">05 Mins</h2>
                    </div>
                    <IoIosArrowDropright className="text-3xl text-gray-500"/>
                </div>
            </div>
        </div>
    );
};

export default PickTimeSlot;
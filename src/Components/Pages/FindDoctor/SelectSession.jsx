import { FaCheckCircle } from "react-icons/fa";

const SelectSession = () => {
    return (
        <div aria-disabled>
            <div className="border-t border-gray-400 mt-10">
                <p className="absolute text-xl font-semibold -mt-4 bg-white px-3 border-gray-500">Select your mode of session</p>
            </div>
            <div className="mt-10 flex items-center justify-center space-x-7">
                <div className="text-center py-3 px-10 border border-gray-300 rounded-lg">
                    <h2 className="font-semibold text-lg">In-Clinic</h2>
                    <h2 className="text-gray-500 text-lg">45 Mins</h2>
                </div>
                <div className="text-center py-3 px-10 border border-[#3A643B] bg-gray-100 rounded-lg">
                    <h2 className="text-[#3A643B] font-semibold text-lg flex items-center gap-2">Video <FaCheckCircle/></h2>
                    <h2 className="text-gray-500 text-lg">45 Mins</h2>
                </div>
                <div className="text-center py-3 px-10 border border-gray-300 rounded-lg">
                    <h2 className="font-semibold text-lg">Chat</h2>
                    <h2 className="text-gray-500 text-lg">10 Mins</h2>
                </div>
            </div>
        </div>
    );
};

export default SelectSession;
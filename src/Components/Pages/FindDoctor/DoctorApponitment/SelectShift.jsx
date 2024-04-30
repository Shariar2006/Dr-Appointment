
const SelectShift = () => {
    return (
        <div className="mt-8">
            <div>
                <h1 className="text-xl font-semibold ml-3">Morning</h1>
                <div className="mt-3 grid grid-cols-4 items-center justify-center space-x-3 space-y-3">
                    <div className="text-center p-3 border border-gray-300 rounded-2xl">
                        <h2 className="font-semibold text-lg">09:00 AM</h2>
                    </div>
                    <div className="text-center p-3 border border-gray-300 rounded-2xl">
                        <h2 className="font-semibold text-lg">09:30 AM</h2>
                    </div>
                    <div className="text-center p-3 border border-gray-300 rounded-lg">
                        <h2 className="font-semibold text-lg">10:00 AM</h2>
                    </div>
                    <div className="text-center p-3 border border-gray-300 rounded-2xl">
                        <h2 className="font-semibold text-lg">10:15 AM</h2>
                    </div>
                    <div className="text-center p-3 border border-gray-300 rounded-2xl">
                        <h2 className="font-semibold text-lg">10:45 AM</h2>
                    </div>
                    <div className="text-center p-3 text-[#fff] bg-[#3A643B] rounded-2xl">
                        <h2 className="font-semibold text-lg">11:00 AM</h2>
                    </div>
                </div>
            </div>

            <div>
                <h1 className="text-xl font-semibold ml-3">Evening</h1>
                <div className="mt-3 grid grid-cols-4 items-center justify-center space-x-3 space-y-3">
                    <div className="text-center p-3 border border-gray-300 rounded-2xl">
                        <h2 className="font-semibold text-lg">04:00 PM</h2>
                    </div>
                    <div className="text-center p-3 border border-gray-300 rounded-2xl">
                        <h2 className="font-semibold text-lg">04:15 PM</h2>
                    </div>
                    <div className="text-center p-3 border border-gray-300 rounded-lg">
                        <h2 className="font-semibold text-lg">04:30 PM</h2>
                    </div>
                    <div className="text-center p-3 border border-gray-300 rounded-2xl">
                        <h2 className="font-semibold text-lg">04:45 PM</h2>
                    </div>
                    <div className="text-center p-3 border border-gray-300 rounded-2xl">
                        <h2 className="font-semibold text-lg">05:15 PM</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelectShift;
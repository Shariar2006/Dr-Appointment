
const Concerns = () => {
    return (
        <div className=" border rounded-xl mb-5">
            <div className="bg-gradient-to-r from-[#F4F7EC] to-[#FBFCFB] rounded-tl-xl rounded-tr-xl h-16 flex px-8 items-center">
                <h1 className="text-xl font-semibold">The Concerns I Treat</h1>
            </div>
            <div className="px-8 py-7 gird grid-cols-4  space-x-4 space-y-4">
            <button className="text-[#3A643B] bg-gray-100 px-4 rounded-xl font-semibold py-1">Skin Treatment</button>
            <button className="text-[#3A643B] bg-gray-100 px-4 rounded-xl font-semibold py-1">Pregnancy</button>
            <button className="text-[#3A643B] bg-gray-100 px-4 rounded-xl font-semibold py-1">Period Doubts</button>
            <button className="text-[#3A643B] bg-gray-100 px-4 rounded-xl font-semibold py-1">Endometriosis</button>
            <button className="text-[#3A643B] bg-gray-100 px-4 rounded-xl font-semibold py-1">Pelvic Pain</button>
            <button className="text-[#3A643B] bg-gray-100 px-4 rounded-xl font-semibold py-1">Ovarian Cysts</button>
            <button className="text-[#3A643B] border border-gray-300 px-4 rounded-xl font-semibold py-1">+ 5 More</button>
            </div>
        </div>
    );
};

export default Concerns;
import home from '../../../assets/home.png'

const MyExperience = () => {
    return (
        <div className=" border rounded-xl mb-5">
            <div className="bg-gradient-to-r from-[#F4F7EC] to-[#FBFCFB] rounded-tl-xl rounded-tr-xl h-16 flex px-8 items-center">
                <h1 className="text-xl font-semibold">My Work Experience</h1>
            </div>
            <div className="px-8 py-7">
                <p className="text-lg font-bold text-[#3A643B]">I have been in practice for : 7+ Years</p>
                <div className='border border-gray-200 mt-4 mb-5'></div>
                <div>
                <div className='flex items-start'>
                    <img className='w-12' src={home} alt="" />
                    <div className='ml-4 mr-20 font-semibold'>
                        <h1>Midtown Medical Clinic</h1>
                        <p className='text-gray-400'>Senior doctor</p>
                    </div>
                    <p className='text-gray-400'>2016-present</p>
                </div>
                <div className='flex items-start'>
                    <img className='w-12' src={home} alt="" />
                    <div className='ml-4 mr-20 font-semibold'>
                        <h1>Midtown Medical Clinic</h1>
                        <p className='text-gray-400'>Senior doctor</p>
                    </div>
                    <p className='text-gray-400'>2010-2015</p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default MyExperience;
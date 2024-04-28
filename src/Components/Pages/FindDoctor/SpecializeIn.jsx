import womenHealth from '../../../assets/women-health.png'
import skinCare from '../../../assets/skin-care.png'
import immunity from '../../../assets/immunity.png'
import hairCare from '../../../assets/hair-care.png'
 
const SpecializeIn = () => {
    return (
        <div className=" border rounded-xl mb-5">
            <div className="bg-gradient-to-r from-[#F4F7EC] to-[#FBFCFB] rounded-tl-xl rounded-tr-xl h-16 flex px-8 items-center">
                <h1 className="text-xl font-semibold">I Specialize In</h1>
            </div>
            <div className="px-8 py-7 flex items-center justify-between">
                <div className='text-center'>
                    <img className='w-24' src={womenHealth} alt="women health" />
                    <p className='mt-1 font-semibold'>women’s health</p>
                </div>
                <div className='text-center'>
                    <img className='w-24' src={skinCare} alt="women health" />
                    <p className='mt-1 font-semibold'>Skin Care</p>
                </div>
                <div className='text-center'>
                    <img className='w-24' src={immunity} alt="women health" />
                    <p className='mt-1 font-semibold'>Immunity</p>
                </div>
                <div className='text-center'>
                    <img className='w-24' src={hairCare} alt="women health" />
                    <p className='mt-1 font-semibold'>Hair care</p>
                </div>
            </div>
        </div>
    );
};

export default SpecializeIn;
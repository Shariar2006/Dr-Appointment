import { LuPlus } from "react-icons/lu";
import { PiYoutubeLogoThin } from "react-icons/pi";
import { PiInstagramLogoThin } from "react-icons/pi";
import { CiTwitter } from "react-icons/ci";
import { SlSocialFacebook } from "react-icons/sl";

const AboutMe = () => {
    return (
        <div className=" border rounded-xl mb-5">
            <div className="bg-gradient-to-r from-[#F4F7EC] to-[#FBFCFB] rounded-tl-xl rounded-tr-xl h-16 flex justify-between px-8 items-center">
                <h1 className="text-xl font-semibold">A Little About me</h1>
                <button className="flex items-center border border-gray-400 px-3 rounded-md bg-white">Follow <LuPlus /></button>
            </div>
            <div className="px-8 py-7">
                <p className="font-semibold text-gray-400">Hello I am Dr. Bruce Willis a Gynaecologist in Sanjivni Hospital Surat. love to work with all my hospital staff and seniour doctors. Completed my graduation in Gynaecologist Medicine from the </p>
                <div className="border-t border-gray-400 mt-5">
                    <button className="absolute font-semibold ml-[416px] -mt-3 bg-white px-2 border-b border-gray-500">Read More</button>
                </div>
                <p className="mt-10 font-semibold text-lg">Language Spoken <span className="text-gray-400 ml-5 bg-gray-50 px-4 rounded-xl py-1">English</span> <span className="text-gray-400 ml-5 bg-gray-50 px-4 rounded-xl py-1">Hindi</span> <span className="text-gray-400 ml-5 bg-gray-50 px-4 rounded-xl py-1">Telugu</span></p>
                <div className="mt-8 space-x-3">
                    <button className="border text-gray-400 rounded-full text-3xl p-1 bg-gray-50"><SlSocialFacebook/></button>
                    <button className="border text-gray-400 rounded-full text-3xl p-1 bg-gray-50"><PiInstagramLogoThin/></button>
                    <button className="border text-gray-400 rounded-full text-3xl p-1 bg-gray-50"><PiYoutubeLogoThin/></button>
                    <button className="border text-gray-400 rounded-full text-3xl p-1 bg-gray-50"><CiTwitter/></button>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
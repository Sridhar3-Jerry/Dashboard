import { div } from "framer-motion/client";

function Profile({src,name,comment,link}){
    return(
        <div>
            <div className="flex justify-around items-center p-5">
                            <img src={src} alt="" className="w-15 rounded-full h-15"/>
                            <div className="w-2/3">
                                <h4 className="font-semibold text-lg">{name}</h4>
                                <div className="flex gap-2">
                                    <p className="text-gray-500">{comment}</p>
                                    <a className="cursor-pointer hover:underline text-blue-400">{link}</a>
                                </div>
                            </div>
                            <p className="text-gray-400">10:15 Am</p>
            </div>
        </div>
    )
}
export default Profile;
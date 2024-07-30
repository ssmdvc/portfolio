import { LANDING_CONTENT } from "../constants"
import profilePic from "../assets/me.png"

const Landing = () => {
  return (
    <div className="border-transparent border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
                <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16
                lg:text-6xl">
                    Shekinah Marie Cayco
                </h1>
                <span className="bg-gradient-to-r from-pink-500 via-slate-500
                to-purple-300 bg-clip-text text-4xl tracking-tight text-transparent">
                    Frontend Developer
                </span>
                <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
                    {LANDING_CONTENT}
                </p>
            </div>
         </div>
        <div className="w-full lg:w-1/2 lg:p-6">
            <div className="flex justify-center">
                <img src={profilePic} className="w-[300px] sm:w-[350px] md:w-[300px] lg:w-[400px] rounded-[10px]" alt="Shekinah Marie Cayco"></img>
            </div>
        </div>
        </div>
    </div>
  )
}
export default Landing
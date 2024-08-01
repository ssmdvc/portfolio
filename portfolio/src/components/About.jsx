import profilePic from "../assets/me.png"
import { ABOUT_TEXT } from "../constants"

const About = () => {
  return (
    <div className="border-transparent border-neutral-900 pb-4">
        <h2 className="my-20 text-center text-4xl">About 
          <span className="text-green-800"> Me</span>
        </h2>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img className="w-[300px] sm:w-[350px] md:w-[300px] lg:w-[400px] rounded-[10px]" src={profilePic} alt="Shekinah"></img>
          </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="flex justify-center lg:justify-start">
              <p className="my-2 max-w-xl py-20"> {ABOUT_TEXT} </p>
            </div>
          </div>
        </div>
    </div>
  )
}
export default About
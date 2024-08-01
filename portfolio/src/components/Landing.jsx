import { LANDING_CONTENT } from "../constants"


const Landing = () => {
  return (
    <div className="flex flex-col items-center min-h-screen border-transparent border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full text-center lg:text-left">
            <div className="flex flex-col text-center items-center ">
                <h1 className="pb-16 text-6xl font-medium tracking-wider lg:mt-16
                lg:text-6xl">
                    Shekinah Marie Cayco
                </h1>
                <span className="my-2 max-w-xl py-6 bg-gradient-to-r from-green-700 via-slate-500
                to-blue-300 bg-clip-text text-4xl tracking-tight text-transparent">
                    Frontend Developer
                </span>
                <p className="my-8 max-w-xl py-6 font-medium tracking-wider">
                    {LANDING_CONTENT}
                </p>
            </div>
         </div>
        </div>
    </div>
  )
}
export default Landing
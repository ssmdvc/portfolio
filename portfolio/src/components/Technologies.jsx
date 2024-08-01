import { RiReactjsLine } from "react-icons/ri"
import { SiJavascript  } from "react-icons/si"
import { GrMysql  } from "react-icons/gr"
import { FaNpm } from "react-icons/fa6";
import { FaGithub  } from "react-icons/fa6"

const Technologies = () => {
  return (
    <div className="border-transparent border-neutral-800 pb-24">
        <h2 className="my-20 text-center text-4xl">Technologies</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-4 border-neutral-200 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-200 p-4">
                <SiJavascript  className="text-7xl text-yellow-400" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-200 p-4">
                <FaNpm className="text-7xl" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-200 p-4">
                <GrMysql className="text-7xl text-cyan-400" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-200 p-4">
                <FaGithub className="text-7xl text-black-400" />
            </div>
        </div>
    </div>
  )
}
export default Technologies
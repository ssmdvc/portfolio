import { CERTIFICATE } from "../constants"


const Certificates = () => {
  return (
    <div className="border-transparent border-neutral-900 pb-4">
        <h2 className="my-20 text-center text-4xl">Certificates</h2>
        <div>{CERTIFICATE.map((certificate, index) =>(
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                <div className="w-full lg:w-1/4">
                <img 
                src={certificate.image} 
                width={350} 
                height={250} 
                alt={certificate.title} 
                className="mb-6 rounded"
                />
                </div>
                <div className="w-full max-w-xl lg:w-3/4">
                    <h6 className="mb-3 font-semibold">{certificate.title}</h6>
                    <p className="mb-4 text-black-500">{certificate.description}</p>
                    <p className="mb-2 text-black-100 text-sm">{certificate.sub}</p>
                </div>
            </div>
        ))}
        
        </div>
    </div>
  )
}
export default Certificates
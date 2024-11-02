import { CONTACT } from "../constants"

const Contacts = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
        <h2 className="my-10 text-center text-4xl">Get in Touch</h2>
        <div className="text-center tracking-tighter">
            <p className="my-4">{CONTACT.phoneNo}</p>
            <p className="my-4">{CONTACT.email}</p>
            <a href="#" className="border-b">{CONTACT.address}</a>
        </div>
    </div>
  )
}
export default Contacts
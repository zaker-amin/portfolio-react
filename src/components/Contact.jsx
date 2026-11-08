import { CONTACT } from "../constants"
import ContactIcons from "./ContactIcons"

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h1 className="my-10 text-center text-5xl">
        Get In <span className="text-purple-400">Touch</span>
      </h1>
      <div className="text-center py-2 tracking-tighter">
        <p className="my-4">{CONTACT.address}</p>
        <a href={`mailto:${CONTACT.email}`} className="underline">
          {CONTACT.email}
        </a>
        <div className="flex justify-center gap-5 my-9 text-2xl">
          <ContactIcons />
        </div>
      </div>
    </div>
  )
}

export default Contact

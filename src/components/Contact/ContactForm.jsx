import emailjs from "emailjs-com";
import { emailjsPublicID, emailjsSurviceID, emailjsTemplateID } from "../../utils/variables";
import toast from "react-hot-toast";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "../UI/Loader";
export const ContactForm = () => {
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        emailjs.sendForm(
            emailjsSurviceID,
            emailjsTemplateID,
            e.target,
            emailjsPublicID
        ).then(() => {
            setLoading(false);
            e.target.reset();
           toast.success("Message sent successfully");
        },(error) => {
            setLoading(false);
            toast.error("Error sending message");
        })
    }
    return(
        <>
        <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" name="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" name="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <textarea rows="4" name="message" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="btn btn--primary">Send Message</button>
        </form>
        <AnimatePresence>{loading && <Loader />}</AnimatePresence>
        </>
    )
}
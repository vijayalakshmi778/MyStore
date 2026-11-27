
import './Contact.css';

function Contact() {
    return (
        <div className="contact-container">

            <h1>Contact Us</h1>

            <p>Have questions? We would love to hear from you.</p>

            <form className="contact-form">

                <input
                    type="text"
                    placeholder="Enter Your Name"
                />

                <input
                    type="email"
                    placeholder="Enter Your Email"
                />

                <input
                    type="text"
                    placeholder="Enter Subject"
                />

                <textarea
                    placeholder="Enter Your Message"
                ></textarea>

                <button type="submit">
                    Send Message
                </button>

            </form>

        </div>
    );
}

export default Contact;

import React, {useState} from 'react';
import './Contact.css';
import axios from 'axios';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [business, setBusiness] = useState('');
    const [text, setText] = useState('');
    const [msg, setMsg] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSend = async () => {
        if (!name || !email || !text) {
            return setMsg("Please complete all starred fields.");
        }

        if (!email.includes('@') || !email.includes('.')) {
            return setMsg("Please use a valid e-mail address");
        }


        let res = await axios.post('/api/mail', { name, email, business, text });
        if (res.status === 200) {
            console.log('Email Sent');
            setSuccess(true);
        } else {
            setMsg("Something went wrong. Please try again soon, or contact me via LinkedIn.")
        }

    }

    const handleClear = () => {
        setMsg("");
        setName("");
        setEmail("");
        setBusiness("");
        setText("");
        setSuccess(false);
    }

    const msgSent = (
        <div>
            <h1>Thank you for your message! I'll get back to you soon.</h1>
            <button style={{backgroundColor: 'hotpink'}} onClick={handleClear}>Send Another</button>
        </div>
    )

    return (
        <div id="contact">
            {(!success) ? (
            <div className="contactContent">
            <h2>I'd love to hear from you!</h2>
            <div className="emailForm">
                {(msg) && <p style={{color: 'red'}}>{msg}</p>}
                <div className="labelInputPair">
                    <label for="name">Your Name*</label>
                    <br />
                    <input name="name"
                    onChange={(e) => {setName(e.target.value); setMsg('');}} type="text"
                    id="name" required />
                </div>
                <div className="labelInputPair">
                    <label for="email">Your Email*</label>
                    <br />
                    <input onChange={(e) => {setEmail(e.target.value); setMsg('');}} type="email" name="email"
                    id="email" required />
                </div>
                <div className="labelInputPair">
                    <label for="business">Your Business</label>
                    <br />
                    <input onChange={(e) => {setBusiness(e.target.value)}} type="text" name="business"
                    id="business" />
                </div>
                <div className="labelInputPair">
                <label for="message">Your Message*</label>
                <br />
                <textarea onChange={(e) => {setText(e.target.value); setMsg('');}} name="message" rows="10" id="message" required />
                </div>
                <button style={{backgroundColor: 'hotpink'}} onClick={handleSend}>
                    Send
                </button>
            </div>

            </div>) : msgSent }
            
        </div>
    )
}

import React, {useState} from 'react';
import './Contact.css';

export default function Contact() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleClick = () => {
        const data = {
            email,
            name,
            message
        };
        if (!email.includes('@') || !email.includes('.')) {
            console.log("Please use a valid email address.");
            return;
        }
        if (name === '') {
            console.log('Please include your name.');
            return;
        }
        if (message === '') {
            console.log('Please include a message.');
            return;
        }

        console.log(data);

    }

    return (
        <div id="contact">
            <div className="contactContent">
            <h2>I'd love to hear from you!</h2>
            <div className="emailForm">
                <div className="labelInputPair">
                    <label for="name">Your Name:</label>
                    <br />
                    <input name="name"
                    onChange={(e) => {setName(e.target.value)}} type="text"
                    id="name" required />
                </div>
                <div className="labelInputPair">
                    <label for="email">Your Email:</label>
                    <br />
                    <input onChange={(e) => {setEmail(e.target.value)}} type="email" name="email"
                    id="email" required />
                </div>
                <div className="labelInputPair">
                <label for="message">Your Message:</label>
                <br />
                <textarea onChange={(e) => {setMessage(e.target.value)}} name="message" rows="10" id="message" required />
                </div>
                <button onClick={handleClick}>
                    Send
                </button>
            </div>
            </div>
            
        </div>
    )
}

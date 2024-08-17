import React, { useState } from "react";
import "./Contact.css";
import axios from "axios";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [business, setBusiness] = useState("");
  const [text, setText] = useState("");
  const [msg, setMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [complete, setComplete] = useState(false);

  const handleSend = async () => {
    if (!name || !email || !text) {
      return setMsg("Please complete all starred fields.");
    }

    if (!email.includes("@") || !email.includes(".")) {
      return setMsg("Please use a valid e-mail address");
    }

    setMsg("Sending...");
    axios
      .post("/api/mail", { name, email, business, text })
      .then((res) => {
        console.log("Email Sent");
        setSuccess(true);
        setComplete(true);
      })
      .catch((err) => {
        setComplete(true);
      });
  };

  const handleClear = () => {
    setMsg("");
    setName("");
    setEmail("");
    setBusiness("");
    setText("");
    setSuccess(false);
    setComplete(false);
  };

  const msgSent = success ? (
    <div>
      <h1>Thank you for your message!</h1>{" "}
      <p>I&apos;ll get back to you soon.</p>
      <button style={{ backgroundColor: "hotpink" }} onClick={handleClear}>
        Send Another
      </button>
    </div>
  ) : (
    <div>
      <h1>Something went wrong.</h1>{" "}
      <p>
        Please try again soon, or contact me via{" "}
        <a
          href="https://www.linkedin.com/in/pslang/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        .
      </p>
      <button style={{ backgroundColor: "hotpink" }} onClick={handleClear}>
        Try Again
      </button>
    </div>
  );

  return (
    <div id="contact">
      {!complete ? (
        <div className="contactContent">
          <h2>I&apos;d love to hear from you!</h2>
          <div className="emailForm">
            {msg && <p style={{ color: "red" }}>{msg}</p>}
            <div className="labelInputPair">
              <label htmlFor="name">Your Name*</label>
              <br />
              <input
                name="name"
                onChange={(e) => {
                  setName(e.target.value);
                  setMsg("");
                }}
                type="text"
                id="name"
                required
              />
            </div>
            <div className="labelInputPair">
              <label htmlFor="email">Your Email*</label>
              <br />
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                  setMsg("");
                }}
                type="email"
                name="email"
                id="email"
                required
              />
            </div>
            <div className="labelInputPair">
              <label htmlFor="business">Your Business</label>
              <br />
              <input
                onChange={(e) => {
                  setBusiness(e.target.value);
                }}
                type="text"
                name="business"
                id="business"
              />
            </div>
            <div className="labelInputPair">
              <label htmlFor="message">Your Message*</label>
              <br />
              <textarea
                onChange={(e) => {
                  setText(e.target.value);
                  setMsg("");
                }}
                name="message"
                rows="10"
                id="message"
                required
              />
            </div>
            <button disabled={msg === "Sending..."} style={{ backgroundColor: "hotpink" }} onClick={handleSend}>
              {msg === "Sending..." ? "Sending..." : "Send"}
            </button>
          </div>
          <p>
            Or contact me via{" "}
            <a
              href="https://www.linkedin.com/in/pslang/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            .
          </p>
        </div>
      ) : (
        msgSent
      )}
    </div>
  );
}

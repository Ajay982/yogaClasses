import React, { useState } from "react";
import ContactCard from "./ContactCard";
import axios from "axios";
import '../css/Contact.css'

const Contact = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(name, mail, query);
    const data = {
      Name: name,
      Mail: mail,
      Query: query,
    };
    axios
      .post(
        "https://sheet.best/api/sheets/42e862e2-9288-40bb-a6a2-c9bb94c1d366",
        data
      )
      .then((response) => {
        console.log(response);
        setName("");
        setMail("");
        setQuery("");
      });
  };
  return (
    <div>
      <h1>Contact Us</h1>

      <div className="contact">
      <ContactCard />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        /> <br />
        <label htmlFor="name"> Name</label><br />
        
        <input
          type="text"
          onChange={(e) => setMail(e.target.value)}
          value={mail}
        /> <br />
        <label htmlFor="email">E-mail</label> <br />
        
        <input
          type="text"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        /> <br />
        <label htmlFor="message">Query</label><br />

        <button type="Submit">Submit</button>
      </form>
      </div>
    </div>
  );
};

export default Contact;

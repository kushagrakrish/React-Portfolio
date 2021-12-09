import React, { useRef, useState } from "react";
import "./form.scss";
import emailjs from "emailjs-com";

const Form = () => {
  // const formData = setFormData;
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  // React.useState(false);

  const sendEmail = (e) => {
    console.log(formData);
    e.preventDefault();
    emailjs
      .sendForm(
        "service_w0npwxl",
        "template_8t7wrah",
        form.current,
        "user_SM1UYa3KnZ7HwBaH3RyGj"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    window.alert("Thank you for reaching me out!");
  };
  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // const isValid = this.validate();
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <section className='form-card'>
      <form className='form-container' ref={form} onSubmit={sendEmail}>
        <input
          required
          type='text'
          placeholder='Name'
          name='name'
          value={formData.name}
          onChange={(e) => changeHandler(e)}
        />
        <input
          required
          type='email'
          placeholder='Your Email'
          name='email'
          value={formData.email}
          onChange={(e) => changeHandler(e)}
        />
        <input
          required
          type='text'
          placeholder='Subject'
          name='subject'
          value={formData.subject}
          onChange={(e) => changeHandler(e)}
        />
        <textarea
          required
          placeholder='Message'
          name='message'
          value={formData.message}
          onChange={(e) => changeHandler(e)}
        />
        <button className='form-btn' type='submit'>
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Form;

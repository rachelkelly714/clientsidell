import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

export const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_202aze4', 'template_08yppvs', form.current, 'user_8XT8gU4HE5qfrHOLXiMu2')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  const pStyles = {
      color: 'gold',
      fontSize: '25px'
      }

      const formStyles = {
          marginLeft: '500px',
          backgroundColor: 'gold'
      }

  return (
      <div>
    <p style={pStyles}>Request Access</p>
    <form  ref={form} style= {formStyles} onSubmit={sendEmail}>
      <label>Name</label>
      <br/>
      <input type="text" name="user_name" />
      <br />
      <label>Email</label>
      <br />
      <input type="email" name="user_email" />
      <br />
      <label>Message</label>
      <br/>
      <textarea name="message" />
      <br />
      <input type="submit" value="Send" />
    </form>

    </div>
  );
};

export default Email;
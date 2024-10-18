import React from 'react'
import './Contact.css'
import icon from '../../assets/icon.gif'
import icon2 from '../../assets/icon2.png'
import icon3 from '../../assets/icon3.png'
import icon5 from '../../assets/icon5.png'


const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "1e2fb27d-fe5d-4228-aa77-9782ef3a6e62");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };



  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={icon} alt="" /></h3> 
            <p>Feel free to share your thoughts through contact form our find our contact information below.
                Your feedbacks, questions ,and suggestions and important to us to provide exceptional service.
            </p>
            <ul>
                <li><img src={icon2} alt="" />shreerankhamb@gmail.com</li>
                <li><img src={icon3} alt="" />+91 8806566949</li>
                <li><img src={icon5} alt="" />Pune, Maharashtra</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label >Your Name</label>
                <input type="text" name="name" placeholder='Enter your name' required/>
                <label>Phone number</label>
                <input type="tel" name='phone' placeholder='Enter your mobile number' required />
                <label >Write your message here</label>
                <textarea name="Message" rows="6" placeholder='Enter your message' required></textarea>
                <button type="submit" className='btn dark-btn'>Submit now</button>
            </form>
            <span>{result}</span>
        </div>
      
    </div>
  )
}

export default Contact

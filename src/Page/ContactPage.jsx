import React, { useState } from 'react';
import './Contact.css'; // 

function ContactPage() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    
    const formData = new FormData(event.target);

    // TOTOONG ACCESS KEY MO
    formData.append("access_key", "6471f6ea-efd7-46a9-8e70-21becb1c7aba");

    // Ito ang magpapadala ng form sa email mo nang walang backend
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message Sent Successfully! We will reply soon.");
      event.target.reset(); 
    } else {
      console.log("Error", data);
      setResult("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="contact-page-container">
      
      {/* WRAPPER PARA MAGKATABI ANG FORM (KALIWA) AT INFO (KANAN) */}
      <div className="contact-content-wrapper">
        <div className="contact-form-card">
          <h2>Send us a Message</h2>
          
          <form onSubmit={onSubmit}>
            {/* Name Field */}
            <div className="contact-form-group">
              <input type="text" name="name" placeholder="Your Name (e.g. Acquadon)" className="contact-input" required />
            </div>

            {/* Email Field */}
            <div className="contact-form-group">
              <input type="email" name="email" placeholder="Your Email Address" className="contact-input" required />
            </div>

            {/* Inquiry Type Dropdown */}
            <div className="contact-form-group">
              <select name="inquiry_type" className="contact-select" required defaultValue="">
                <option value="" disabled>Select Inquiry Type...</option>
                <option value="Residential Plumbing">Residential Plumbing</option>
                <option value="Commercial Project">Commercial Project</option>
                <option value="Products Order">Products Order</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Message Area */}
            <div className="contact-form-group">
              <textarea name="message" placeholder="Write your message here..." className="contact-textarea" required></textarea>
            </div>

            {/* Send Button */}
            <button type="submit" className="contact-submit-btn">Send Message</button>
          </form>

          {/* Mensahe kung successful ba ang pag-send */}
          <p className="contact-result-msg">{result}</p>
        </div>


        <div className="contact-info-card">
          <h2>Contact Information</h2>
          
          <p>
            <strong>📍 Office Address:</strong><br />
            {/* Pwede mong palitan ito ng totoong address ninyo */}
            Acquadon Waterworks<br />
            Daang Marinig/SouthVille, Cabuyao City, Laguna, Philippines
          </p>

          <p>
            <strong>📞 Phone Numbers:</strong><br />
            (+63) 77-854-9865<br/>(+63) 77-855-0368
          </p>

          <p>
            <strong>✉️ Email Address:</strong><br />
            Acquadonwaterworks@gmail.com
          </p>

          <p>
            <strong>🕒 Business Hours:</strong><br />
            Monday to Saturday: 8:00 AM - 5:00 PM<br />
            Closed on Sunday
          </p>

          <div style={{ marginTop: '30px', borderTop: '1px solid #eee', paddingTop: '20px' }}>
            <p style={{ fontSize: '0.9rem', color: '#777' }}>
              We are ready to assist you with all your water treatment, engineering, and plumbing needs. Reach out to us today!
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ContactPage;
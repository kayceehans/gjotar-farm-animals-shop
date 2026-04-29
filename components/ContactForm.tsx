"use client";
import { useRef, useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Replace with your EmailJS credentials
  const SERVICE_ID = 'YOUR_SERVICE_ID';
  const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
  const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formElement = form.current;
    
    if (formElement) {
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formElement, PUBLIC_KEY)
        .then(() => {
          setIsSent(true);
          setIsLoading(false);
          formElement.reset();
          setTimeout(() => setIsSent(false), 5000);
        })
        .catch((error) => {
          console.error('EmailJS Error:', error);
          alert('Failed to send message. Please try again.');
          setIsLoading(false);
        });
    } else {
      alert('Form reference not found. Please refresh the page.');
      setIsLoading(false);
    }
  };

  return (
    <div className="contact-section" id="contact">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-grid">
        <div className="contact-info">
          <h3>📍 G-Jotar Acres Farm</h3>
          <div className="contact-detail">
            <strong>📞 Phone</strong>
            <p>Stephen Ayeni</p>
            <p>+234 8154068323</p>
          </div>
          <div className="contact-detail">
            <strong>📧 Email</strong>
            <p>info@gjotar.com</p>
            <p>sales@gjotar.com</p>
          </div>
          <div className="contact-detail">
            <strong>🏠 Address</strong>
            <p>Km 15, Lagos-Ibadan Expressway,</p>
            <p>Mowe, Ogun State, Nigeria</p>
          </div>
          <div className="contact-detail">
            <strong>🕒 Visiting Hours</strong>
            <p>Mon-Sat: 8am - 6pm</p>
            <p>Sunday: By appointment</p>
          </div>
        </div>
        
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-group">
            <input type="text" name="user_name" placeholder="Your Full Name" required />
          </div>
          <div className="form-group">
            <input type="email" name="user_email" placeholder="Your Email Address" required />
          </div>
          <div className="form-group">
            <input type="tel" name="user_phone" placeholder="Your Phone Number" required />
          </div>
          <div className="form-group">
            <select name="animal_interest" required>
              <option value="">Select Animal Interest</option>
              <option value="Pig">🐷 Pig</option>
              <option value="Goat">🐐 Goat</option>
              <option value="Poultry (Broilers)">🐔 Poultry (Broilers)</option>
              <option value="Poultry (Layers)">🥚 Poultry (Layers)</option>
              <option value="Mixed">🦃 Mixed</option>
            </select>
          </div>
          <div className="form-group">
            <textarea name="message" rows={4} placeholder="Tell us about your farm or requirements..." required></textarea>
          </div>
          <button type="submit" className="send-btn" disabled={isLoading}>
            {isLoading ? 'Sending...' : '📧 Send Message'}
          </button>
          {isSent && <p style={{ color: 'green', textAlign: 'center', marginTop: '1rem' }}>✓ Message sent successfully! We'll reply within 24 hours.</p>}
        </form>
      </div>
    </div>
  );
}
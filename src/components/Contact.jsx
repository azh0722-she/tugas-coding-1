import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
// import '../styles/Contact.css';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Ganti string di bawah dengan ID dari akun EmailJS kamu
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then(() => {
          alert("Pesan terkirim! Terima kasih telah menghubungi.");
          form.current.reset();
      }, () => {
          alert("Gagal mengirim pesan, silakan coba lagi.");
      });
  };

  return (
    <section id="contact">
      <div className="wrapper">
        <h3>Hubungi Saya</h3>
        <p>Punya pertanyaan atau ingin bekerja sama? Kirimkan pesan di bawah ini!</p>
        
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="input-group">
            <input type="text" name="user_name" placeholder="Nama Lengkap" required />
          </div>
          <div className="input-group">
            <input type="email" name="user_email" placeholder="Email Anda" required />
          </div>
          <div className="input-group">
            <textarea name="message" placeholder="Tulis pesan Anda di sini..." rows="5" required></textarea>
          </div>
          <button type="submit" className="btn-submit">Kirim Pesan</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
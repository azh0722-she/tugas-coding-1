import React, { useState } from 'react';
import '../styles/Accordion.css';

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-item">
      <button className={`accordion-title ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
        {title}
        <span className="icon">{isOpen ? '−' : '+'}</span>
      </button>
      <div className={`accordion-panel ${isOpen ? 'open' : ''}`}>
        <div className="content">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

const Accordion = () => {
  const data = [
    { title: "Pengalaman Kerja", content: "Saya memiliki pengalaman di bidang web development selama 1 bulan,tepatnya saat menempuh pendidikan di MAN 1 Model Banda Aceh." },
    { title: "Keahlian Utama", content: "React, JavaScript, HTML, dan CSS." },
    { title: "Pendidikan", content: "Sedang menempuh pendidikan di MAN 1 Model Banda Aceh." },
    { title: "Tujuan Pembuatan Web ini", content: "untuk melatih kemampuan dalam menggunakan React js didalam vscode." }
  ];

  return (
    <div className="accordion-container">
      {data.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default Accordion;
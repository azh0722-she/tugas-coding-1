import React, { useEffect } from 'react';

const GoogleTranslate = () => {
  useEffect(() => {
    // Fungsi inisialisasi widget
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'id', // Bahasa asal web kamu (Indonesia)
          includedLanguages: 'en,id,jw,ms', // Bahasa tujuan (Inggris, Indo, Jawa, Melayu)
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        'google_translate_element'
      );
    };

    // Menambahkan script Google ke dokumen
    const addScript = document.createElement('script');
    addScript.setAttribute(
      'src',
      '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
    );
    document.body.appendChild(addScript);
  }, []);

  return (
    <div className="translate-container">
      <span className="translate-label">Pilih Bahasa: </span>
      <div id="google_translate_element"></div>
    </div>
  );
};

export default GoogleTranslate;
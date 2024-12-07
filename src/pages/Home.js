import React, { useState, useEffect } from 'react';
  
  export default function Home() {
    const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    // Ваш зовнішній URL
    const externalURL = 'https://sites.google.com/view/shkolageroev/home';

    // Редирект на зовнішній URL
    window.location.href = externalURL;

    // Позначте, що редирект вже відбувся
    setRedirect(true);
  }, []);

  if (redirect) {
    // Якщо ви хочете відобразити щось перед редиректом, ви можете використовувати React-елементи
    return (
      <div>
        Redirecting to external URL...
      </div>
    );
  }
    // Якщо редирект ще не відбувся, компонент повертає null або щось інше
    return null;
};
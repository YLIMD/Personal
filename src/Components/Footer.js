import React from 'react';
import github from "./../img/icons/gitHub.svg";
import email from "./../img/icons/email-logo.png";

const Footer = () => {
    return (   <footer className="footer">
        <div className="container">
            <h1 className="title-1">Contacts</h1>
            <ul className="content-list">
                <li className="content-list__item">
                    <h2 className="title-2">Telegram / WhatsApp</h2>
                    <p><a href="tel:+79497135202">+7 (949) 713-52-02</a></p>
                </li>
                <li className="content-list__item">
                    <h2 className="title-2"> <img className='contactImage mail' src={email} alt='GitHub'></img> Email</h2>
                    
                    <p><a href="mailto:pavel-radionov-work@mail.ru">pavel-radionov-work@mail.ru</a></p>
                </li>
                <li className="content-list__item">
                    <h2 className="title-2">
                        <img className='contactImage ' src={github} alt='GitHub'></img> GitHub</h2>
                    <p><a href="https://github.com/Gt4ynow">https://github.com/Gt4ynow</a></p>
                </li>
            </ul>
    </div>  
</footer>);
}
 
export default Footer;
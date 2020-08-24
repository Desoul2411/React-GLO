
import React from 'react';
import FormInput from './FormInput';
import Button from './Button';

const Form = ()  => (
    <form action="../mailer.smart.php" className="contact-form">
    <FormInput inputType="text" placeholder="Ваше имя"/>
    <FormInput inputType="tel" placeholder="Телефон"/>
    <FormInput inputType="email" placeholder="E-mail"/>
    <Button value="Позвоните мне" className="btn contact-btn"/>
</form>
);

export default Form;






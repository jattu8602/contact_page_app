import React from 'react';
import { MdMessage } from "react-icons/md";
import styles from "./ContactForm.module.css";
import Button from '../Button/Button';
import { RiPhoneLine } from "react-icons/ri";
import { IoMdMail } from "react-icons/io";
import {useState} from 'react';
const ContactForm = () => {
const [name, setName] = useState("jatin");
const [email, setEmail] = useState("jatin@123");
const [text, setText] = useState("hi");

// let name = "jatin";
// let email= "jatin@123";
// let text="hi";


const onViaCallSubmit = ()=>{
  alert('I am from call');
}
const onViaCallSubmitX = ()=>{
  alert('I am from support');
}
const onViaCallSubmitY = ()=>{
  alert('I am from email support');
}
const onViaCallSubmitZ = ()=>{
  alert('Form is Submitted!');
}


const onSubmit = (event) => {
  event.preventDefault();

// name = event.target[0].value;
setName(event.target[0].value);
setEmail(event.target[1].value);
setText(event.target[2].value);


// email = event.target[1].value;
// text = event.target[2].value;







console.log({
  name,
  email,
  text
})



  // console.log("name",event,target[0].value);
  // console.log("emial",event,target[1].value);
  // console.log("text",event,target[2].value);
}





  return (
   <section className={`${styles.container} `}>
   <div className={styles.contact_form}>
    <div className={styles.top_btn}>

    <Button
    onClick={onViaCallSubmitX}
    text="VIA SUPPORT CHAT" icon={<MdMessage  fontSize="24px"/>} />
    <Button
    onClick={onViaCallSubmit}
    text="VIA CALL" icon={<RiPhoneLine  fontSize="24px"/>} />


    </div>

    <Button
onClick={onViaCallSubmitY}
    isOutline={true}
    text="VIA EMAIL FORM" icon={<IoMdMail  fontSize="24px"/>} />





{/* inputs */}
<form
onSubmit={onSubmit}
 action="">
  <div className={styles.form_control}>

  <label htmlFor="name">Name</label>
  <input type="text" name='name'/>
  </div>
  <div className={styles.form_control}>

  <label htmlFor="email">Email</label>
  <input type="email" name='email'/>
  </div>
  <div className={styles.form_control}>

  <label htmlFor="text">Text</label>
  <textarea  name='text' rows="8" />
  </div>
  <div style={{display:'flex', justifyContent:'end'}}>
  <Button
onClick={onViaCallSubmitZ}
    text="SUBMIT BUTTON" />
  </div>
  <div>
    {

      name
    }
  </div>
  {/* <br /> */}
  <div>
    {

      email

    }
  </div>
  {/* <br /> */}
  <div>
    {

      text
    }
  </div>


</form>











   </div>
   <div className={styles.contact_image}>
    <img src="../public/images/contact.svg" alt="contact image" />

   </div>

   </section>
  )
}

export default ContactForm

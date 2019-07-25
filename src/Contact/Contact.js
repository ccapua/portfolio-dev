import React from 'react';

export default function Contact() {
  return (
    <section id="contact-me" class="contact-me scroll">
      <h2>Contact Me</h2>
      <hr/>
      <form target="_self" action="send_message.php" method="post" >
        <label for="title">Message title</label>
        <input type="text" class="title" name="title" placeholder="Message title"/><br/>
        <label for="name">Your name</label>
        <input type="text" class="name" name="name" placeholder="Your name"/>
        <span class="error">*</span><br/>
        <label for="email">Your email</label>
        <input type="text" class="email" name="email" placeholder="Your email"/>
        <span class='error'>*</span><br/>
        <label for="message">Your message</label>
        <textarea class="message" name="message" placeholder="Your message"/></textarea>
        <span class='error'>*</span><br/>
        <input type="submit" class="submit"></input>
      </form>
    </section>
  );
}

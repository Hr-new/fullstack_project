import ContactCard from "../components/ContactCard";
import ContactForm from "../components/ContactForm";
import styles from "../contact/contact.module.css";
const Contact = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>Contact Us</h1>
        <ContactCard />
        <section className={styles.contact_section}>
          <h2>Hello Fill the conatct form to contact us</h2>
          <ContactForm />
        </section>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.8742207582995!2d72.49687847376536!3d23.028390016114027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f4a59dacf7%3A0xff3e2c6ec71f55bd!2sSimform!5e0!3m2!1sen!2sin!4v1697617578033!5m2!1sen!2sin"
        width={600}
        height={450}
        style={{border:0}}
        allowfullscreen=""
        loading="lazy"
        className={styles.mapping}
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
};

export default Contact;

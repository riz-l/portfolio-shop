// Import: Dependencies
import React from "react";

// Import: Styling
import "./ContactPage.styles.scss";

// Import: Components
import { ReactComponent as Contact } from "../../../assets/images/contact.svg";

// Page: ContactPage
function ContactPage() {
  return (
    <div className="ContactPage">
      <div className="ContactPage__container">
        <div className="ContactPage__information">
          <h2 className="ContactPage__title">contact</h2>
          <span className="ContactPage__lead">Get in touch with us!</span>
          <p>
            For general enquiries, or if you'd just like to have a chat, please
            contact us via one of the below methods
          </p>
          <div className="ContactPage__contact-details">
            <div className="ContactPage__item-container">
              <span className="ContactPage__contact-title">email</span>
              <span className="ContactPage__item">contact@rizji.com</span>
            </div>
            <div className="ContactPage__item-container">
              <span className="ContactPage__contact-title">discord</span>
              <span className="ContactPage__item">
                https://discord.gg/seegvDR
              </span>
            </div>
          </div>
        </div>
        <div className="ContactPage__contact-image">
          <Contact />
        </div>
      </div>
    </div>
  );
}

// Export: ContactPage
export default ContactPage;

// Import: Dependencies
import React from "react";

// Import: Styling
import "./ContactPage.styles.scss";

// Import: Components
import { ReactComponent as ContactImage } from "../../../assets/images/contact.svg";

// Page: ContactPage
function ContactPage() {
  return (
    <div className="ContactPage">
      <div className="ContactPage__introduction">
        <div className="ContactPage__introduction-text">
          <h1>contact</h1>
          <p>
            Whether you have some queries regarding our products or would just
            like to get in touch, you can find all the information you need
            below.
          </p>
        </div>
        <div className="ContactPage__contact-details">
          <div className="ContactPage__contact-item">
            <span className="ContactPage__contact-item-title">email</span>
            <span className="ContactPage__contact-item-field">
              contact@rizji.com
            </span>
          </div>
          <div className="ContactPage__contact-item">
            <span className="ContactPage__contact-item-title">discord</span>
            <span className="ContactPage__contact-item-field">
              https://discord.gg/seegvDR
            </span>
          </div>
        </div>
      </div>
      <div className="ContactPage__image">
        <ContactImage />
      </div>
    </div>
  );
}

// Export: ContactPage
export default ContactPage;

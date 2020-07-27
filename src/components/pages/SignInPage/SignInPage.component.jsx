// Import: Dependencies
import React from "react";

// Import: Styling
import "./SignInPage.styles.scss";

// Import: Components
import SignInWindow from "../../UI/SignInWindow/SignInWindow.component";
import { ReactComponent as SignInImage } from "../../../assets/images/sign-in.svg";

// Page: SignInPage
function SignInPage() {
  return (
    <div className="SignInPage">
      <div className="SignInPage__sign-in">
        <div className="SignInPage__sign-in-container">
          <SignInWindow />
        </div>
      </div>
      <div className="SignIn__image">
        <SignInImage />
      </div>
    </div>
  );
}

// Export: SignInPage
export default SignInPage;

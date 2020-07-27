// Import: Dependencies
import React from "react";

// Import: Styling
import "./ShopPage.styles.scss";

// Import: Components
import ShopDirectory from "../../UI/ShopDirectory/ShopDirectory.component";

// Page: ShopPage
function ShopPage() {
  return (
    <div className="ShopPage">
      <ShopDirectory />
    </div>
  );
}

// Export: ShopPage
export default ShopPage;

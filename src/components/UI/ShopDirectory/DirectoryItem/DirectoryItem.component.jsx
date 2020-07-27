// Import: Dependencies
import React from "react";

// Import: Styling
import "./DirectoryItem.styles.scss";

// UI: DirectoryItem
function DirectoryItem({
  title,
  imageUrl,
  size,
  // history,
  // linkUrl,
  // match,
  key,
}) {
  return (
    <div
      key={key}
      className={`${size} DirectoryItem`}
      // onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="DirectoryItem__background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="DirectoryItem__content">
        <h1 className="DirectoryItem__title">{title}</h1>
      </div>
    </div>
  );
}

// Export: DirectoryItem
export default DirectoryItem;

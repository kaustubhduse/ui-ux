import React from "react";

function SmallCard(props) {
  const isWebDesign = props.title === "Web Design";

  return (
    <div className="mt-10">
      <div
        style={{
          backgroundColor: isWebDesign ? "rgba(253, 111, 0, 1)" : "#f3f4f6",
        }}
        className={`p-4 rounded-lg ${
          isWebDesign ? "text-white" : "text-black"
        }`}
      >
        <p className="text-lg font-semibold cursor-pointer">{props.title}</p>
      </div>
    </div>
  );
}

export default SmallCard;

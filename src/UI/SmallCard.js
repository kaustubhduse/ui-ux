import React from "react";

function SmallCard(props) {
  const isWebDesign = props.title === "Web Design";

  return (
    <div>
      <div
        className={`mt-10 p-[10px] rounded-lg ${
          isWebDesign ? "bg-orange-500 text-white" : "bg-gray-100"
        }`}
      >
        <p className="text-lg cursor-pointer">{props.title}</p>
      </div>
    </div>
  );
}

export default SmallCard;

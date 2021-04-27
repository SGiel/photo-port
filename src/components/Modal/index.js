import React from 'react';
// import commercial0 from "./large/commercial/0.jpg";
// import commercial1 from "./large/commercial/1.jpg";
// import commercial2 from "./large/commercial/2.jpg";
// import commercial3 from "./large/commercial/3.jpg";
// import commercial4 from "./large/commercial/4.jpg";
// import food0 from "./large/food/0.jpg";
// import food1 from "./large/food/1.jpg";
// import food2 from "./large/food/2.jpg";
// import food3 from "./large/food/3.jpg";
// import food4 from "./large/food/4.jpg";
// import landscape0 from "./large/landscape/0.jpg";
// import landscape1 from "./large/landscape/1.jpg";
// import landscape2 from "./large/landscape/2.jpg";
// import landscape3 from "./large/landscape/3.jpg";
// import landscape4 from "./large/landscape/4.jpg";
// import portraits0 from "./large/portraits/0.jpg";
// import portraits1 from "./large/portraits/1.jpg";
// import portraits2 from "./large/portraits/2.jpg";
// import portraits3 from "./large/portraits/3.jpg";


const Modal = ({ onClose, currentPhoto }) => {
  const { name, description, category, index  } = currentPhoto;

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{name} </h3>
        {/* <img src={`${category}/${index}`} alt="current category" /> */}
        <img src={`./large/${category}/${index}.jpg`} alt="current category" />
        <p>
          {description}
        </p>
        <button type="button" onClick={onClose}>
          Close this modal
        </button>
      </div>
    </div>
  );
};

export default Modal;
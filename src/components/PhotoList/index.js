import React, { useState } from 'react';
import Modal from '../Modal';
// import commercial0 from "./small/commercial/0.jpg";
// import commercial1 from "./small/commercial/1.jpg";
// import commercial2 from "./small/commercial/2.jpg";
// import commercial3 from "./small/commercial/3.jpg";
// import commercial4 from "./small/commercial/4.jpg";
// import food0 from "../../assets/small/food/0.jpg";
// import food1 from "./small/food/1.jpg";
// import food2 from "./small/food/2.jpg";
// import food3 from "./small/food/3.jpg";
// import food4 from "./small/food/4.jpg";
// import landscape0 from "./small/landscape/0.jpg";
// import landscape1 from "./small/landscape/1.jpg";
// import landscape2 from "./small/landscape/2.jpg";
// import landscape3 from "./small/landscape/3.jpg";
// import landscape4 from "./small/landscape/4.jpg";
// import portraits0 from "./small/portraits/0.jpg";
// import portraits1 from "./small/portraits/1.jpg";
// import portraits2 from "./small/portraits/2.jpg";
// import portraits3 from "./small/portraits/3.jpg";

const PhotoList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();

  const [photos] = useState([
    {
      name: 'Grocery aisle',
      category: 'commercial',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Grocery booth',
      category: 'commercial',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Building exterior',
      category: 'commercial',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Restaurant table',
      category: 'commercial',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Cafe interior',
      category: 'commercial',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Cat green eyes',
      category: 'portraits',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Green parrot',
      category: 'portraits',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Yellow macaw',
      category: 'portraits',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Pug smile',
      category: 'portraits',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Pancakes',
      category: 'food',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Burrito',
      category: 'food',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Scallop pasta',
      category: 'food',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Burger',
      category: 'food',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Fruit bowl',
      category: 'food',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Green river',
      category: 'landscape',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Docks',
      category: 'landscape',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Panoramic village by sea',
      category: 'landscape',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Domestic landscape',
      category: 'landscape',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Park bench',
      category: 'landscape',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
  ]);

  // filter through photos to find ones that match the category
  const currentPhotos = photos.filter((photo) => photo.category === category);

  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && <Modal onClose={toggleModal} currentPhoto={currentPhoto} />}
      <div className="flex-row">
        {currentPhotos.map((image, i) => (

          <img
          // src = {'/small/food/0.jpg'}
          // src={getImage(category,i)}
            //src={imageName}
          //src={food0}
          //src={'../../assets/small/food/0.jpg'}
          //  src={`${category}${i}`}
          // src={require(`./small/${category}/${i}.jpg`)}
          // src={`../../assets/small/${category}/${i}.jpg`}
          // src={'../../assets/small/food/0.jpg'}
          src={require(`../../assets/small/${category}/${i}.jpg`).default}
          //  src={`food` + `0`}
            // src={require(`./small/food/0.jpg`)}
            // src={`../../assets/small/${category}/${i}.jpg`}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;

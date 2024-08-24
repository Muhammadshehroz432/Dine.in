import React from "react";

const Bagitem = () => {
  const bagitems = {
    id: "024",
    image: "/Desert-6.jpg",
    name: "Mango Passion Parfait",
    description:
      "Layers of fresh mango puree, passion fruit coulis, and creamy yogurt, topped with crunchy granola and mint leaves",
    price: 720,

    rating: {
      stars: 4.5,
    },
  };

  return (
    <div>
      <div className="bag-items d-flex">
        <img src={bagitems.image} alt="bagitems-img" className="bagitem-img " />
        <div className="bag-item-info ms-2">
          <h5 className="bag-item-name fw-bold">{bagitems.name}</h5>
          <p className="bag-item-descrip">{bagitems.description}</p>
          <h4 className="bag-item-price fw-bold">Rs {bagitems.price}</h4>
        </div>
      </div>
    </div>
  );
};

export default Bagitem;

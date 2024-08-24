import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { useDispatch } from "react-redux";
import { BagAction } from "../../Store/bag";
const Menuitem = ({ menuitems, activeMenu }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  const Dispatch = useDispatch();
  const Handleadditem = () => {
    Dispatch(BagAction.addBag(menuitems.id));
  };
  console.log("the item clicked is ", activeMenu);
  return (
    <div>
      {/* menus */}
      <div className="container overflow-hidden p-4">
        {/* Breakfast Section */}
        {(activeMenu === "Breakfast" || activeMenu === "All") && (
          <div
            className="breakfast"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-offset="100"
          >
            <h1 className="breakfast-heading display-1 mb-3 fw-bold">
              Breakfast
            </h1>
            <div className="row menu-row-Breakfast1 p-3">
              <div className="col-lg-6 menu-1-1 d-flex p-2">
                <img
                  src={menuitems[0].image}
                  alt="menu-img"
                  className="img-fluid menu-img"
                />
                <div className="menu-text ps-3">
                  <h2>{menuitems[0].name}</h2>
                  <p>{menuitems[0].description}</p>
                  <h3 className="Price me-4 mt-3 fw-bold">
                    RS {menuitems[0].price}
                  </h3>
                  <button className="menu-btn fs-5" onClick={Handleadditem}>
                    Order Now
                  </button>
                </div>
              </div>
              <div className="col-lg-6 menu-1-1 d-flex p-2">
                <img
                  src={menuitems[1].image}
                  alt="menu-img"
                  className="img-fluid menu-img"
                />
                <div className="menu-text ps-3">
                  <h2>{menuitems[1].name}</h2>
                  <p>{menuitems[1].description}</p>
                  <h3 className="Price me-4 mt-3 fw-bold">
                    RS {menuitems[1].price}
                  </h3>
                  <button className="menu-btn fs-5" onClick={Handleadditem}>
                    Order Now
                  </button>
                </div>
              </div>
            </div>
            <div className="row menu-row-Breakfast1 p-3">
              <div className="col-lg-6 menu-1-1 d-flex p-2">
                <img
                  src={menuitems[2].image}
                  alt="menu-img"
                  className="img-fluid menu-img"
                />
                <div className="menu-text ps-3">
                  <h2>{menuitems[2].name}</h2>
                  <p>{menuitems[2].description}</p>
                  <h3 className="Price me-4 mt-3 fw-bold">
                    RS {menuitems[2].price}
                  </h3>
                  <button className="menu-btn fs-5" onClick={Handleadditem}>
                    Order Now
                  </button>
                </div>
              </div>
              <div className="col-lg-6 menu-1-1 d-flex p-2">
                <img
                  src={menuitems[3].image}
                  alt="menu-img"
                  className="img-fluid menu-img"
                />
                <div className="menu-text ps-3">
                  <h2>{menuitems[3].name}</h2>
                  <p>{menuitems[3].description}</p>
                  <h3 className="Price me-4 mt-3 fw-bold">
                    RS {menuitems[3].price}
                  </h3>
                  <button className="menu-btn fs-5" onClick={Handleadditem}>
                    Order Now
                  </button>
                </div>
              </div>
            </div>
            <div className="row menu-row-Breakfast1 p-3">
              <div className="col-lg-6 menu-1-1 d-flex p-2">
                <img
                  src={menuitems[4].image}
                  alt="menu-img"
                  className="img-fluid menu-img"
                />
                <div className="menu-text ps-3">
                  <h2>{menuitems[4].name}</h2>
                  <p>{menuitems[4].description}</p>
                  <h3 className="Price me-4 mt-3 fw-bold">
                    RS {menuitems[4].price}
                  </h3>
                  <button className="menu-btn fs-5" onClick={Handleadditem}>
                    Order Now
                  </button>
                </div>
              </div>
              <div className="col-lg-6 menu-1-1 d-flex p-2">
                <img
                  src={menuitems[5].image}
                  alt="menu-img"
                  className="img-fluid menu-img"
                />
                <div className="menu-text ps-3">
                  <h2>{menuitems[5].name}</h2>
                  <p>{menuitems[5].description}</p>
                  <h3 className="Price me-4 mt-3 fw-bold">
                    RS {menuitems[5].price}
                  </h3>
                  <button className="menu-btn fs-5" onClick={Handleadditem}>
                    Order Now
                  </button>
                </div>
              </div>
            </div>
            =
          </div>
        )}

        {/* Lunch Section */}
        {(activeMenu === "Lunch" || activeMenu === "All") && (
          <div
            className="lunch"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-offset="100"
          >
            <h1 className="Lunch-heading display-1 mb-3 fw-bold">Lunch</h1>
            <div className="row menu-row-Lunch1 p-3">
              <div className="col-lg-6 menu-1-1 d-flex p-2">
                <img
                  src={menuitems[6].image}
                  alt="menu-img"
                  className="img-fluid menu-img"
                />
                <div className="menu-text ps-3">
                  <h2>{menuitems[6].name}</h2>
                  <p>{menuitems[6].description}</p>
                  <h3 className="Price me-4 mt-3 fw-bold">
                    RS {menuitems[6].price}
                  </h3>
                  <button className="menu-btn fs-5" onClick={Handleadditem}>
                    Order Now
                  </button>
                </div>
              </div>
              <div className="col-lg-6 menu-1-1 d-flex p-2">
                <img
                  src={menuitems[7].image}
                  alt="menu-img"
                  className="img-fluid menu-img"
                />
                <div className="menu-text ps-3">
                  <h2>{menuitems[7].name}</h2>
                  <p>{menuitems[7].description}</p>
                  <h3 className="Price me-4 mt-3 fw-bold">
                    RS {menuitems[7].price}
                  </h3>
                  <button className="menu-btn fs-5" onClick={Handleadditem}>
                    Order Now
                  </button>
                </div>
              </div>
            </div>
            <div className="row menu-row-Lunch1 p-3">
              <div className="col-lg-6 menu-1-1 d-flex p-2">
                <img
                  src={menuitems[8].image}
                  alt="menu-img"
                  className="img-fluid menu-img"
                />
                <div className="menu-text ps-3">
                  <h2>{menuitems[8].name}</h2>
                  <p>{menuitems[8].description}</p>
                  <h3 className="Price me-4 mt-3 fw-bold">
                    RS {menuitems[8].price}
                  </h3>
                  <button className="menu-btn fs-5" onClick={Handleadditem}>
                    Order Now
                  </button>
                </div>
              </div>
              <div className="col-lg-6 menu-1-1 d-flex p-2">
                <img
                  src={menuitems[9].image}
                  alt="menu-img"
                  className="img-fluid menu-img"
                />
                <div className="menu-text ps-3">
                  <h2>{menuitems[9].name}</h2>
                  <p>{menuitems[9].description}</p>
                  <h3 className="Price me-4 mt-3 fw-bold">
                    RS {menuitems[9].price}
                  </h3>
                  <button className="menu-btn fs-5" onClick={Handleadditem}>
                    Order Now
                  </button>
                </div>
              </div>
            </div>
            <div className="row menu-row-Lunch1 p-3">
              <div className="col-lg-6 menu-1-1 d-flex p-2">
                <img
                  src={menuitems[10].image}
                  alt="menu-img"
                  className="img-fluid menu-img"
                />
                <div className="menu-text ps-3">
                  <h2>{menuitems[10].name}</h2>
                  <p>{menuitems[10].description}</p>
                  <h3 className="Price me-4 mt-3 fw-bold">
                    RS {menuitems[10].price}
                  </h3>
                  <button className="menu-btn fs-5" onClick={Handleadditem}>
                    Order Now
                  </button>
                </div>
              </div>
              <div className="col-lg-6 menu-1-1 d-flex p-2">
                <img
                  src={menuitems[11].image}
                  alt="menu-img"
                  className="img-fluid menu-img"
                />
                <div className="menu-text ps-3">
                  <h2>{menuitems[11].name}</h2>
                  <p>{menuitems[11].description}</p>
                  <h3 className="Price me-4 mt-3 fw-bold">
                    RS {menuitems[11].price}
                  </h3>
                  <button className="menu-btn fs-5" onClick={Handleadditem}>
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Dinner Section */}
        {(activeMenu === "Dinner" || activeMenu === "All") && (
          <div
            className="lunch"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-offset="100"
          >
            <h1 className="Lunch-heading display-1 mb-3 fw-bold">Dinner</h1>
            <div className="row menu-row-Lunch1 p-3">
              <div className="col-lg-6 menu-1-1 d-flex p-2">
                <img
                  src={menuitems[12].image}
                  alt="menu-img"
                  className="img-fluid menu-img"
                />
                <div className="menu-text ps-3">
                  <h2>{menuitems[12].name}</h2>
                  <p>{menuitems[12].description}</p>
                  <h3 className="Price me-4 mt-3 fw-bold">
                    RS {menuitems[12].price}
                  </h3>
                  <button className="menu-btn fs-5" onClick={Handleadditem}>
                    Order Now
                  </button>
                </div>
              </div>
              <div className="col-lg-6 menu-1-1 d-flex p-2">
                <img
                  src={menuitems[13].image}
                  alt="menu-img"
                  className="img-fluid menu-img"
                />
                <div className="menu-text ps-3">
                  <h2>{menuitems[13].name}</h2>
                  <p>{menuitems[13].description}</p>
                  <h3 className="Price me-4 mt-3 fw-bold">
                    RS {menuitems[13].price}
                  </h3>
                  <button className="menu-btn fs-5" onClick={Handleadditem}>
                    Order Now
                  </button>
                </div>
              </div>
            </div>
            <div className="row menu-row-Lunch1 p-3">
              <div className="col-lg-6 menu-1-1 d-flex p-2">
                <img
                  src={menuitems[14].image}
                  alt="menu-img"
                  className="img-fluid menu-img"
                />
                <div className="menu-text ps-3">
                  <h2>{menuitems[14].name}</h2>
                  <p>{menuitems[14].description}</p>
                  <h3 className="Price me-4 mt-3 fw-bold">
                    RS {menuitems[14].price}
                  </h3>
                  <button className="menu-btn fs-5" onClick={Handleadditem}>
                    Order Now
                  </button>
                </div>
              </div>
              <div className="col-lg-6 menu-1-1 d-flex p-2">
                <img
                  src={menuitems[15].image}
                  alt="menu-img"
                  className="img-fluid menu-img"
                />
                <div className="menu-text ps-3">
                  <h2>{menuitems[15].name}</h2>
                  <p>{menuitems[15].description}</p>
                  <h3 className="Price me-4 mt-3 fw-bold">
                    RS {menuitems[15].price}
                  </h3>
                  <button className="menu-btn fs-5" onClick={Handleadditem}>
                    Order Now
                  </button>
                </div>
              </div>
            </div>
            <div className="row menu-row-Lunch1 p-3">
              <div className="col-lg-6 menu-1-1 d-flex p-2">
                <img
                  src={menuitems[16].image}
                  alt="menu-img"
                  className="img-fluid menu-img"
                />
                <div className="menu-text ps-3">
                  <h2>{menuitems[16].name}</h2>
                  <p>{menuitems[16].description}</p>
                  <h3 className="Price me-4 mt-3 fw-bold">
                    RS {menuitems[16].price}
                  </h3>
                  <button className="menu-btn fs-5" onClick={Handleadditem}>
                    Order Now
                  </button>
                </div>
              </div>
              <div className="col-lg-6 menu-1-1 d-flex p-2">
                <img
                  src={menuitems[17].image}
                  alt="menu-img"
                  className="img-fluid menu-img"
                />
                <div className="menu-text ps-3">
                  <h2>{menuitems[17].name}</h2>
                  <p>{menuitems[17].description}</p>
                  <h3 className="Price me-4 mt-3 fw-bold">
                    RS {menuitems[17].price}
                  </h3>
                  <button className="menu-btn fs-5" onClick={Handleadditem}>
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Deserts Section */}
        {(activeMenu === "Deserts" || activeMenu === "All") && (
          <div
            className="lunch"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-offset="100"
          >
            <h1 className="Lunch-heading display-1 mb-3 fw-bold">Deserts</h1>
            <div className="row menu-row-Lunch1 p-3">
              <div className="col-lg-6 menu-1-1 d-flex p-2">
                <img
                  src={menuitems[18].image}
                  alt="menu-img"
                  className="img-fluid menu-img"
                />
                <div className="menu-text ps-3">
                  <h2>{menuitems[18].name}</h2>
                  <p>{menuitems[18].description}</p>
                  <h3 className="Price me-4 mt-3 fw-bold">
                    RS {menuitems[18].price}
                  </h3>
                  <button className="menu-btn fs-5" onClick={Handleadditem}>
                    Order Now
                  </button>
                </div>
              </div>
              <div className="col-lg-6 menu-1-1 d-flex p-2">
                <img
                  src={menuitems[19].image}
                  alt="menu-img"
                  className="img-fluid menu-img"
                />
                <div className="menu-text ps-3">
                  <h2>{menuitems[19].name}</h2>
                  <p>{menuitems[19].description}</p>
                  <h3 className="Price me-4 mt-3 fw-bold">
                    RS {menuitems[19].price}
                  </h3>
                  <button className="menu-btn fs-5" onClick={Handleadditem}>
                    Order Now
                  </button>
                </div>
              </div>
            </div>
            <div className="row menu-row-Lunch1 p-3">
              <div className="col-lg-6 menu-1-1 d-flex p-2">
                <img
                  src={menuitems[20].image}
                  alt="menu-img"
                  className="img-fluid menu-img"
                />
                <div className="menu-text ps-3">
                  <h2>{menuitems[20].name}</h2>
                  <p>{menuitems[20].description}</p>
                  <h3 className="Price me-4 mt-3 fw-bold">
                    RS {menuitems[20].price}
                  </h3>
                  <button className="menu-btn fs-5" onClick={Handleadditem}>
                    Order Now
                  </button>
                </div>
              </div>
              <div className="col-lg-6 menu-1-1 d-flex p-2">
                <img
                  src={menuitems[21].image}
                  alt="menu-img"
                  className="img-fluid menu-img"
                />
                <div className="menu-text ps-3">
                  <h2>{menuitems[21].name}</h2>
                  <p>{menuitems[21].description}</p>
                  <h3 className="Price me-4 mt-3 fw-bold">
                    RS {menuitems[21].price}
                  </h3>
                  <button className="menu-btn fs-5" onClick={Handleadditem}>
                    Order Now
                  </button>
                </div>
              </div>
            </div>
            <div className="row menu-row-Lunch1 p-3">
              <div className="col-lg-6 menu-1-1 d-flex p-2">
                <img
                  src={menuitems[22].image}
                  alt="menu-img"
                  className="img-fluid menu-img"
                />
                <div className="menu-text ps-3">
                  <h2>{menuitems[22].name}</h2>
                  <p>{menuitems[22].description}</p>
                  <h3 className="Price me-4 mt-3 fw-bold">
                    RS {menuitems[22].price}
                  </h3>
                  <button className="menu-btn fs-5" onClick={Handleadditem}>
                    Order Now
                  </button>
                </div>
              </div>
              <div className="col-lg-6 menu-1-1 d-flex p-2">
                <img
                  src={menuitems[23].image}
                  alt="menu-img"
                  className="img-fluid menu-img"
                />
                <div className="menu-text ps-3">
                  <h2>{menuitems[23].name}</h2>
                  <p>{menuitems[23].description}</p>
                  <h3 className="Price me-4 mt-3 fw-bold">
                    RS {menuitems[23].price}
                  </h3>
                  <button className="menu-btn fs-5" onClick={Handleadditem}>
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Drinks Section */}
        {(activeMenu === "Drinks" || activeMenu === "All") && (
          <div
            className="lunch"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-offset="100"
          >
            <h1 className="Lunch-heading display-1 mb-3 fw-bold">Drinks</h1>
            <div className="row menu-row-Lunch1 p-3">
              <div className="col-lg-6 menu-1-1 d-flex p-2">
                <img
                  src={menuitems[24].image}
                  alt="menu-img"
                  className="img-fluid menu-img"
                />
                <div className="menu-text ps-3">
                  <h2>{menuitems[24].name}</h2>
                  <p>{menuitems[24].description}</p>
                  <h3 className="Price me-4 mt-3 fw-bold">
                    RS {menuitems[24].price}
                  </h3>
                  <button className="menu-btn fs-5" onClick={Handleadditem}>
                    Order Now
                  </button>
                </div>
              </div>
              <div className="col-lg-6 menu-1-1 d-flex p-2">
                <img
                  src={menuitems[25].image}
                  alt="menu-img"
                  className="img-fluid menu-img"
                />
                <div className="menu-text ps-3">
                  <h2>{menuitems[25].name}</h2>
                  <p>{menuitems[25].description}</p>
                  <h3 className="Price me-4 mt-3 fw-bold">
                    RS {menuitems[25].price}
                  </h3>
                  <button className="menu-btn fs-5" onClick={Handleadditem}>
                    Order Now
                  </button>
                </div>
              </div>
            </div>
            <div className="row menu-row-Lunch1 p-3">
              <div className="col-lg-6 menu-1-1 d-flex p-2">
                <img
                  src={menuitems[26].image}
                  alt="menu-img"
                  className="img-fluid menu-img"
                />
                <div className="menu-text ps-3">
                  <h2>{menuitems[26].name}</h2>
                  <p>{menuitems[26].description}</p>
                  <h3 className="Price me-4 mt-3 fw-bold">
                    RS {menuitems[26].price}
                  </h3>
                  <button className="menu-btn fs-5" onClick={Handleadditem}>
                    Order Now
                  </button>
                </div>
              </div>
              <div className="col-lg-6 menu-1-1 d-flex p-2">
                <img
                  src={menuitems[27].image}
                  alt="menu-img"
                  className="img-fluid menu-img"
                />
                <div className="menu-text ps-3">
                  <h2>{menuitems[27].name}</h2>
                  <p>{menuitems[27].description}</p>
                  <h3 className="Price me-4 mt-3 fw-bold">
                    RS {menuitems[27].price}
                  </h3>
                  <button className="menu-btn fs-5" onClick={Handleadditem}>
                    Order Now
                  </button>
                </div>
              </div>
            </div>
            <div className="row menu-row-Lunch1 p-3">
              <div className="col-lg-6 menu-1-1 d-flex p-2">
                <img
                  src={menuitems[28].image}
                  alt="menu-img"
                  className="img-fluid menu-img"
                />
                <div className="menu-text ps-3">
                  <h2>{menuitems[28].name}</h2>
                  <p>{menuitems[28].description}</p>
                  <h3 className="Price me-4 mt-3 fw-bold">
                    RS {menuitems[28].price}
                  </h3>
                  <button className="menu-btn fs-5" onClick={Handleadditem}>
                    Order Now
                  </button>
                </div>
              </div>
              <div className="col-lg-6 menu-1-1 d-flex p-2">
                <img
                  src={menuitems[29].image}
                  alt="menu-img"
                  className="img-fluid menu-img"
                />
                <div className="menu-text ps-3">
                  <h2>{menuitems[29].name}</h2>
                  <p>{menuitems[29].description}</p>
                  <h3 className="Price me-4 mt-3 fw-bold">
                    RS {menuitems[29].price}
                  </h3>
                  <button className="menu-btn fs-5" onClick={Handleadditem}>
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menuitem;

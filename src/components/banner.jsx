import react from "react";
import "../styles/banner.css";
function Banner() {
  return (
    <div>
     
      {/* Upcoming trips------------ */}
      <div className="p-lg-5 p-3">
        <img
          className="w-100 rounded-4"
          src="/images/upcoming-trips.png"
          alt="Upcoming Banner"
        />
      </div>
      <div className="row g-0 p-lg-5 p-3  mx-lg-5">
        <div className="row g-0 py-4 align-items-center">
          <div className="col-12 col-lg-6  p-3">
            <div className="glass-card">
              <img className="h-100 w-100" src="/images/banner1.png" alt="" />
            </div>
          </div>
          <div className="col-12 col-lg-6  p-3">
            <h1>Heading 1</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              iusto cum unde eveniet. Placeat, officiis ut sit necessitatibus
              doloremque rem repellendus beatae tenetur nihil nulla maxime, quae
              voluptate. Corrupti, eveniet.
            </p>
          </div>
        </div>
        <div className="row g-0 py-4 align-items-center">
          <div className="col-12 col-lg-6  p-3">
            <h1>Heading 2</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              iusto cum unde eveniet. Placeat, officiis ut sit necessitatibus
              doloremque rem repellendus beatae tenetur nihil nulla maxime, quae
              voluptate. Corrupti, eveniet.
            </p>
          </div>
          <div className="col-12 col-lg-6  p-3 d-flex justify-content-end align-items-center">
            <div className="glass-card">
              <img className="h-100 w-100" src="/images/banner2.png" alt="" />
            </div>
          </div>
        </div>
        <div className="row g-0 py-4 align-items-center">
          <div className="col-12 col-lg-6  p-3">
            <div className="glass-card">
              <img className="h-100 w-100" src="/images/banner3.png" alt="" />
            </div>
          </div>
          <div className="col-12 col-lg-6  p-3">
            <h1>Heading 2</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              iusto cum unde eveniet. Placeat, officiis ut sit necessitatibus
              doloremque rem repellendus beatae tenetur nihil nulla maxime, quae
              voluptate. Corrupti, eveniet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Banner;

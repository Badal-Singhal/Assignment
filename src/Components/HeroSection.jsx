import React from "react";
import UserAuthentication from "./UserAuthentication";

export default function HeroSection() {
  return (
    <div className="body-section">
      <section className="text-content">
        <p className="heading">
          <i>Explore your <span style={{ color: "#0096C8" }}>hobby</span> or <span style={{ color: "#8064A2" }}>passion</span></i>
        </p>
        <p className="text">
          Sign-in to interact with a community of fellow hobbyists and an
          eco-system of experts, teachers, suppliers, classes, workshops, and
          places to practice, participate or perform. Your hobby may be about
          visual or performing arts, sports, games, gardening, model making,
          cooking, indoor or outdoor activities…
        </p>
        <p className="text">
          If you are an expert or a seller, you can Add your Listing and promote
          yourself, your students, products, services or events. Hop on your
          hobbyhorse and enjoy the ride.
        </p>
        <div className="main-pic">
            <div>
                <img src='./pc1.png' alt="logo"/>
            </div>
            <div>
            <img src='./pc2.png' alt="logo"/>
            </div>
        </div>
      </section>
      <section className="modle">
        <UserAuthentication/>
      </section>
    </div>
  );
}

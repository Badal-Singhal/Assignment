import "rsuite/dist/rsuite.min.css";
import React from "react";
import { Dropdown } from "rsuite";


export default function Navbar() {
  return (
    <div className="navbar">
      <div>
        <img alt="logo" src="./HobbyCueLogo.png" />
      </div>
      <div className="search">
        <div>
          <input
            type="text"
            className="search-box"
            placeholder="Search here..."
          />
        </div>

        <div className="search-icon-container">
          <span className="search-icon">
            <img src="./Vector.png" alt="logo" />
          </span>
        </div>
      </div>

      <div className="nav-links">
        <div className="list-link">
          <Dropdown
            title="Explore"
            icon={<img src="./Explore.png" alt="logo" />}
          >
            <Dropdown.Item>People - Community</Dropdown.Item>
            <Dropdown.Item>Places - Venues</Dropdown.Item>
            <Dropdown.Item>Programs - Events</Dropdown.Item>
            <Dropdown.Item>Products - Store</Dropdown.Item>
            <Dropdown.Item>Blogs</Dropdown.Item>
          </Dropdown>
        </div>

        <div className="list-link">
          <Dropdown
            title="Hobbies"
            icon={<img src="./Hobbies.png" alt="logo" />}
          >
            <Dropdown.Item>People - Community</Dropdown.Item>
            <Dropdown.Item>Places - Venues</Dropdown.Item>
            <Dropdown.Item>Programs - Events</Dropdown.Item>
            <Dropdown.Item>Products - Store</Dropdown.Item>
            <Dropdown.Item>Blogs</Dropdown.Item>
          </Dropdown>
        </div>
        <span className="icon">
          <img src="./bookmark.png" alt="logo" />
        </span>
        <span className="icon">
          <img src="./bell.png" alt="logo" />
        </span>
        <span className="icon">
          <img src="./cart.png" alt="logo" />
        </span>
        <button className="signin-btn">Sign In</button>
      </div>
    </div>
  );
}

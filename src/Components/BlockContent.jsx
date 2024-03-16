import React from "react";
import Block from "./Block";

export default function BlockContent() {
  const blockData = [
    {
      src: "./People.png",
      srctext: "People",
      text: "Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate, accompanist or collaborator.",
      btn_text: "Connect",
    },
    {
      src: "./Place.png",
      srctext: "Place",
      text: "Find a class, school, playground, auditorium, studio, shop or an event venue. Book a slot at venues that allow booking through hobbycue.",
      btn_text: "Meet up",
    },
    {
      src: "./Product.png",
      srctext: "Product",
      text: "Find equipment or supplies required for your hobby. Buy, rent or borrow from shops, online stores or from community members.",
      btn_text: "Get it",
    },
    {
      src: "./Program.png",
      srctext: "Program",
      text: "Find events, meetups and workshops related to your hobby. Register or buy tickets online.",
      btn_text: "Attend",
    },
  ];
  return (
    <div className="blockGrid">
      {blockData.map((item, index) => (
        <Block
          key={index}
          src={item.src}
          srctext={item.srctext}
          text={item.text}
          btn_text={item.btn_text}
        />
      ))}
    </div>
  );
}

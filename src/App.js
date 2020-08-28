import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareAlt, faTimes } from "@fortawesome/free-solid-svg-icons";
import {
  faYoutube,
  faLinkedin,
  faInstagram,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";

import "./styles.css";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faYoutube, faLinkedin, faInstagram, faTwitter);

function Icons(props) {
  const { link, classname, icon } = props.data;

  let children;

  if (icon === faTimes) {
    children = (
      <a href={link} className={classname} onClick={props.onClick}>
        <FontAwesomeIcon className="icon" icon={icon} />
      </a>
    );
  } else {
    children = (
      <a
        href={link}
        className={classname}
        target="_blank"
        rel="noopener noreferrer"
        onClick={props.onClick}
      >
        <FontAwesomeIcon className="icon" icon={icon} />
      </a>
    );
  }

  return children;
}

export default function App() {
  const [activeStatus, setActiveStatus] = useState(false);

  const socialLinks = [
    {
      classname: "ytb",
      link: "#",
      icon: ["fab", "youtube"]
    },
    {
      classname: "twt",
      link: "https://twitter.com/karthicktamil17",
      icon: ["fab", "twitter"]
    },
    {
      classname: "x",
      link: "#",
      icon: faTimes
    },
    {
      classname: "lin",
      link: "https://www.linkedin.com/in/karthick-rajan-6251a4144/",
      icon: ["fab", "linkedin"]
    },
    {
      classname: "ins",
      link: "#",
      icon: ["fab", "instagram"]
    }
  ];

  const clickHandler = () => {
    setActiveStatus(!activeStatus);
  };

  return (
    <div className={activeStatus === true ? "container open" : "container"}>
      <button onClick={clickHandler} className="open-btn">
        <FontAwesomeIcon icon={faShareAlt} />
      </button>
      {socialLinks.map((el) => (
        <Icons key={el.classname} data={el} onClick={clickHandler} />
      ))}
    </div>
  );
}

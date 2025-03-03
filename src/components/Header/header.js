import React, { useState, useEffect } from "react";
import styles from "./header.module.css";
import logo from "../../assets/img/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faGithub, faDiscord } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  useEffect(() => {
    document.body.style.zoom = "90%"; 
  }, []);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const navigate = useNavigate();

  return (
    <>
      <header className={styles.header}>
        <div className={styles.HeaderLeft}>
          <FontAwesomeIcon
            icon={faBars}
            size="2x"
            style={{ color: "#ffffff", cursor: "pointer" }}
            onClick={handleToggleSidebar}
          />
          <img src={logo} alt="Logo" className={styles.logo} />
        </div>
        <div className={styles.HeaderRight}>
          <FontAwesomeIcon
            icon={faCircleQuestion}
            size="2x"
            className={styles.QNA}
            style={{ color: "#ffffff", cursor: "pointer" }}
            onClick={() => navigate("/about")}
          />
        </div>
      </header>
      <div className={`${styles.sidebar} ${isSidebarOpen ? styles.sidebarOpen : styles.sidebarClosed}`}>
        <div className={styles.sidebarHeader}>
          <div className={styles.SidebarCt}>
            <img src={logo} alt="Logo" className={styles.logo2} />
            <div className={styles.SidebarText}>RPX</div>
          </div>
          <div className={styles.SidebarLine}></div>
        </div>
        <div className={styles.BtnCt}>
        <Link to="/vh" className={styles.vh}>PX to VH</Link>
          <Link to="/Vw" className={styles.vw}>PX to VW</Link>
          <Link to="/Rem" className={styles.rem}>PX to REM</Link>
          <Link to="/Em" className={styles.em}>PX to EM</Link>
          <Link to="/Percent" className={styles.percent}>PX to %</Link>
        </div>
        <div className={styles.SidebarLine2}></div>
        <div className={styles.ContactsCt}>
          <div className={styles.contacts}>
    <a href="https://www.instagram.com/m._je2/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} color="white" size="3x" className={styles.instagram} />
            </a>
            <a href="https://github.com/MJEvision" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} color="white" size="3x" className={styles.github} />
            </a>
            <a href="https://www.discord.com/users/1019955401497788497" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faDiscord} color="white" size="3x" className={styles.discord} />
            </a>
          </div>
        </div>
      </div>
      {isSidebarOpen && <div className={styles.overlay} onClick={handleToggleSidebar}></div>}
    </>
  );
};

export default Header;

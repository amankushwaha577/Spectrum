import React from "react";
import Menu from "./Menu";
import "../styles.css";

import logo from "../images/logo.png";

const jumbotronStyle = {
    marginTop:"40px",
    color:"white",
    background:{logo},
    fontFamily:"Comic Sans MS",
    color: `-webkit-linear-gradient(#eee, #333)`,
    
  }


  const jumbotronTitleStyle = {
    fontFamily:"Lucida Handwriting"
  }


const Layout = ({
    title = "Title",
    description = "Description",
    className,
    children
}) => (
    <div>
        <Menu />
        <div className="jumbotron" style={jumbotronStyle}>
            <h1 className="text-light">{title}</h1>
            <p className="lead text-warning" style={jumbotronTitleStyle}>{description}</p>
        </div>
        <div className={className}>{children}</div>
    </div>
);

export default Layout;

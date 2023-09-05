import React from "react";
import Menu from "./Menu";
import "../styles.css";

import logo from "../images/logo.png";

const jumbotronStyle = {
    marginTop:"40px",
    background:{logo}
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
            <h2>{title}</h2>
            <p className="lead">{description}</p>
        </div>
        <div className={className}>{children}</div>
    </div>
);

export default Layout;

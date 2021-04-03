import React from "react";
import { Link } from "gatsby";
import * as navStyles from "./nav.module.css";

export default function NavItem(props) {
  return (
    <Link to={props.href} className={navStyles.navItem}>
      {props.content}
    </Link>
  );
}

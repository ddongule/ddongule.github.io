import React from "react";
import NavItem from "./navItems";

export default function NavBar() {
  return (
    <nav>
      <NavItem content="BLOG" href="https://mingule.tistory.com/." />
      <NavItem content="GITHUB" href="https://github.com/ddongule" />
    </nav>
  );
}

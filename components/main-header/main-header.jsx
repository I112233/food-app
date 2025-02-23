"use client";

import Link from "next/link";
import Image from "next/image";

import classes from "./main-header.module.css";
import logo from "@/assets/logo.png";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";

function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image
            sizes={100}
            src={logo}
            alt="A plate with food on it"
            priority
          />
          ProFood
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">BROWSE MEALS</NavLink>
            </li>

            <li>
              <NavLink href="/community">CUMMUNITY</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default MainHeader;

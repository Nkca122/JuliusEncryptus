import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import {
  faCircleInfo,
  faBars,
  faHouse,
  faPuzzlePiece,
  faUser,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

import { Outlet, Link } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

import { HashLink } from "react-router-hash-link";
export default function Layout() {
  let menuRef = useRef(null);
  let [mActive, setMActive] = useState(false);
  return (
    <>
      <Header />
      <main
        style={{
          width: "100%",
          minHeight: "calc(100vh - 2*(var(--padding)))",
          position: "relative",
          border: "1px solid #3C3C3C",
          boxShadow:
            "4px 4px 0 black, 6px 6px 0 rgba(0, 0, 0, 0.8), 8px 8px 0 rgba(0, 0, 0, 0.6)",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: "calc(2*var(--padding))",
            top: "calc(2*var(--padding))",
            zIndex: 1,
          }}
        >
          <button
            onClick={() => {
              setMActive(!mActive);
            }}
            style={{
              background: "none",
              border: "none",
              color: "#f5f5f5",
            }}
          >
            {mActive ? (
              <FontAwesomeIcon
                icon={faXmark}
                size="2x"
                style={{
                  fontWeight: 900,
                }}
                color="#f5f5f5"
              />
            ) : (
              <FontAwesomeIcon
                icon={faBars}
                size="2x"
                style={{
                  fontWeight: 900,
                }}
                color="#f5f5f5"
              />
            )}
          </button>

          <div
            className={mActive ? "menu-active" : "menu-hidden"}
            ref={menuRef}
          >
            <Link to="/">
              Home <FontAwesomeIcon icon={faHouse} />
            </Link>
            <Link to="/decoder">
              Decode <FontAwesomeIcon icon={faPuzzlePiece} />
            </Link>
            <HashLink to="/#about">
              About Us <FontAwesomeIcon icon={faUser} />
            </HashLink>
          </div>
        </div>
        <a
          href={import.meta.env.VITE_info}
          style={{
            position: "absolute",
            right: "calc(2*var(--padding))",
            top: "calc(2*var(--padding))",
            zIndex: 1
          }}
        >
          <FontAwesomeIcon icon={faCircleInfo} size="2x" />
        </a>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

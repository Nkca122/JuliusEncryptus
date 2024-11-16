import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import Card from "../components/card";
import { useEffect, useState } from "react";
import Product from "../components/product";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faScrewdriverWrench,
  faGlobe,
  faMobile,
  faPuzzlePiece,
} from "@fortawesome/free-solid-svg-icons";

import ParticleBackground from "../components/particles";
import { HashLink } from "react-router-hash-link";

const style = {
  gridItem: {
    width: "100%",
    height: "568px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
  },
};

export default function Home() {
  return (
    <>
      <section
        style={{
          minHeight: "calc(100vh - 2*(var(--padding)))",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "url(/hero_bg.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          paddingBlock: "calc(var(--padding)*7)",
          position: "relative",
          zIndex: 1,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            zIndex: 0,
            width: "100%",
            height: "100%",
            backdropFilter: "brightness(60%) grayscale(60%)",
            background:
              "linear-gradient(to right, #3c3c3c 1px, transparent 1px) 0 0, linear-gradient(to bottom, #3c3c3c 1px, transparent 1px) 0 0",
            backgroundSize: "360px 360px, 360px 360px",
            backgroundRepeat: "repeat, repeat",
          }}
        >
          <ParticleBackground />
        </div>
        <div
          style={{
            position: "relative",
            width: "100%",
            zIndex: 2,
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, 450px)",
              justifyContent: "center",
              gap: "8em",
              width: "100%",
              height: "100%",
            }}
            className="container"
          >
            <div style={{ ...style.gridItem, position: "relative" }}>
              <img
                src="/logo.png"
                alt=""
                style={{
                  width: "100%",
                }}
              />

              <h1>
                <span
                  style={{
                    fontSize: "3.5rem",
                    fontFamily: "Doto",
                    textAlign: "center",
                    color: "#4AF626",
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    height: "156px",
                  }}
                  className="typewriter"
                >
                  <Typewriter
                    words={["Julius Encryptus"]}
                    loop
                    cursor
                    cursorStyle="<"
                    typeSpeed={100}
                    deleteSpeed={150}
                    delaySpeed={1000}
                  />
                </span>
              </h1>
            </div>
            <div
              style={{
                ...style.gridItem,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "transparent",
                position: "relative",
                display: "flex",
              }}
              className="container"
            >
              <h2
                style={{
                  position: "absolute",
                  top: "var(--padding)",
                  width: "100%",
                  fontWeight: "bold",
                  textAlign: "center",
                  fontFamily: '"Orbitron", sans-serif',
                  fontSize: "3rem",
                  margin: "40px",
                }}
                className="container"
              >
                Our Mission
              </h2>

              <p
                style={{
                  height: "50%",
                  overflowY: "scroll",
                  textAlign: "justify",
                  textAlignLast: "center",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  fontSize: "1.2rem",
                  paddingInline: "var(--padding)",
                }}
              >
                Our mission is to decrypt and analyze messages encrypted by the
                use of a
                <b
                  style={{
                    textAlign: "center",
                    fontSize: "2rem",
                    color: "#4af626",
                    fontStyle: "italic",
                    fontFamily: '"Orbitron", serif',
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <i
                    style={{
                      fontFamily: "inherit",
                      fontSize: "inherit",
                    }}
                  >
                    Caesar
                  </i>
                  <i>-</i>
                  <i
                    style={{
                      fontFamily: "inherit",
                      fontSize: "inherit",
                      color: "#00aada",
                    }}
                  >
                    Cipher
                  </i>
                </b>
                to uncover any relevant insights that can inform and strengthen
                our security measures.
              </p>

              <HashLink
                style={{
                  width: "100%",
                }}
                id={"start-link"}
                to="/#products"
              >
                <button
                  id="start"
                  style={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                    border: "1px solid #f5f5f5",
                    padding: "var(--padding)",
                    borderRadius: "24px",
                    width: "100%",
                    fontFamily: '"Orbitron", serif',
                  }}
                >
                  Begin Your Decoding Journey
                </button>
              </HashLink>
            </div>
          </div>
        </div>
      </section>
      <section
        style={{
          borderRadius: "24px",
          backgroundImage: "url(/services_bg.jpeg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          marginTop: "var(--padding)",
        }}
        id="products"
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            paddingBlock: "calc(var(--padding)*7)",
            borderRadius: "24px",
            backdropFilter: "brightness(30%)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, calc(286px + 1em + 286px + 1em))",
              gap: "1em",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ width: "100%" }} className="card-grid">
              <Product
                content="Try out our API to build anything for your custom needs"
                icon={
                  <FontAwesomeIcon
                    icon={faScrewdriverWrench}
                    size="5x"
                    color={"#242424"}
                  />
                }
                link={`${import.meta.env.VITE_api_link}`}
              />

              <Product
                content="Use our cross-browser extension to prevent any shifts in your browsing journey"
                icon={
                  <FontAwesomeIcon icon={faGlobe} size="5x" color={"#242424"} />
                }
                link={`${import.meta.env.VITE_extension_link}`}
              />

              <Product
                content="Want to decode on the move ? Use our mobile app during your cracking journeys"
                icon={
                  <FontAwesomeIcon
                    icon={faMobile}
                    size="5x"
                    color={"#242424"}
                  />
                }
                link={`${import.meta.env.VITE_app_link}`}
              />

              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Link
                  style={{
                    width: "80%",
                    aspectRatio: "1/1",
                    borderRadius: "24px",
                    backgroundColor: "#000",
                    border: "1px solid #f5f5f5",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "1.2rem",
                    fontWeight: "700",
                    flexDirection: "column",
                    fontFamily: "'Monospace', serif",
                  }}
                  className="container"
                  id="decoder-btn"
                  to='/decoder'
                >
                  <b
                    style={{
                      display: "block",
                    }}
                  >
                    Online Decoder
                  </b>
                  <FontAwesomeIcon icon={faPuzzlePiece} size="2x" />
                </Link>
              </div>
            </div>
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "#f5f5f5",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                color: "#000",
                borderRadius: "24px",
                boxShadow: "2px 0 0 #000, 4px 0 0 #000, 6px 0 0 #000",
                border: "5px solid #000",
              }}
            >
              <h2
                style={{
                  width: "100%",
                  fontWeight: "bold",
                  textAlign: "center",
                  fontFamily: '"Orbitron", sans-serif',
                  fontSize: "3rem",
                  margin: "24px",
                }}
                className="container"
              >
                Services
              </h2>

              <p
                style={{
                  fontSize: "1.2rem",
                }}
              >
                Try out the services provided by our project{" "}
                <b
                  style={{
                    display: "block",
                    color: "red",
                  }}
                >
                  ❤️
                </b>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        style={{
          background:
            "linear-gradient(to right, #3c3c3c 1px, transparent 1px) 0 0, linear-gradient(to bottom, #3c3c3c 1px, transparent 1px) 0 0",
          backgroundSize: "120px 120px, 120px 120px",
          backgroundRepeat: "repeat, repeat",
          marginTop: "var(--padding)",
          paddingBlock: "calc(var(--padding)*7)",
          borderRadius: "24px",
        }}
        id="about"
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              fontSize: "3rem",
              margin: "0 0 calc(var(--padding)*2) 0",
              fontFamily: '"Orbitron", sans-serif',
              WebkitTextStroke: "2px #000",
              textShadow: "2px 0 0 #000, 4px 0 0 #000, 6px 0 0 #000",
            }}
          >
            Our Team
          </h1>
        </div>

        <div className="card-grid">
          <Card
            heading="Team Lead"
            description="Satyam Kesarwani"
            img="/satyam.png"
            link="https://www.linkedin.com/in/satyam-kumar-kesarwani-763b61293/"
          />

          <Card
            heading="Lead Developer"
            description="Nikunj Chauhan"
            img="/nikunj.png"
            link="https://github.com/Nkca122"
          />

          <Card
            heading="Lead Tester"
            description="Sarafaraj Nasardi"
            img="/sarafaraj.png"
            link="https://www.linkedin.com/in/sarafaraj-nasardi-7722b31b3/"
          />

          <Card
            heading="Lead Designer"
            description="Vidhi Mittal"
            img="/vidhi.png"
            link="https://www.linkedin.com/in/vidhi-mittal04/"
          />
        </div>
      </section>
    </>
  );
}

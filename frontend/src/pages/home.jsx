import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import Card from "../components/card";
import { useEffect, useState } from "react";

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
          background:
            "linear-gradient(to right, #3c3c3c 1px, transparent 1px) 0 0, linear-gradient(to bottom, #3c3c3c 1px, transparent 1px) 0 0, #000",
          backgroundSize: "120px 120px, 120px 120px",
          backgroundRepeat: "repeat, repeat",
          paddingBlock: "calc(var(--padding)*7)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, 400px)",
            justifyContent: "center",
            gap: "1em",
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
              backgroundColor: "#000",
              borderRadius: "24px",
              border: "1px solid #f5f5f5",
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
                textAlign: "left",
                fontSize: "2rem",
                fontFamily: '"Orbitron", sans-serif',
              }}
              className="container"
            >
              Our Mission
            </h2>

            <p
              style={{
                height: "50%",
                overflowY: "scroll",
                position: "absolute",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
              className="container"
            >
              Our mission is to decrypt and analyze messages encrypted by the
              use of a
              <b
                style={{
                  width: "100%",
                  textAlign: "center",
                }}
              >
                Caesar cipher
              </b>
              to uncover any relevant insights that can inform and strengthen
              our security measures.
            </p>

            <Link
              style={{
                position: "absolute",
                bottom: "var(--padding)",
                right: "var(--padding)",
              }}
              to="/decoder"
            >
              <button
                id="start"
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                  border: "1px solid #f5f5f5",
                  padding: "var(--padding)",
                  borderRadius: "24px",
                }}
              >
                Begin
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section
        style={{
          border: "1px solid #3c3c3c",
          background:
            "linear-gradient(to right, #a89c8a 1px, transparent 1px) 0 0, linear-gradient(to bottom, #a89c8a 1px, transparent 1px) 0 0, #242424",
          backgroundSize: "120px 120px, 120px 120px",
          backgroundRepeat: "repeat, repeat",
          marginTop: "var(--padding)",
          paddingBlock: "calc(var(--padding)*7)",
        }}
        id="about"
      >
        {/* <div className="top-triangle">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 0L0 0 598.97 114.72 1200 0z"
              className="shape-fill"
            ></path>
          </svg>
        </div> */}

        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontSize: "3rem",
              padding: "var(--padding)",
              margin: "0 0 var(--padding) 0",
              backgroundColor: "#242424",
              border: "0.1px solid #f5f5f5",
              borderRadius: "3rem",
              fontFamily: '"Orbitron", sans-serif',
              boxShadow: "2px 2px 0 #000, 4px 4px 0 #000, 6px 6px 0 #000",
              height: "106.5px",
            }}
            className="typewriter"
          >
            <Typewriter
              words={["About Us", "Our Team"]}
              loop
              cursor
              cursorStyle=""
              typeSpeed={100}
              deleteSpeed={150}
              delaySpeed={1000}
            />
          </span>
        </div>

        <div className="card-grid">
          <Card
            heading="Team Lead"
            description="Satyam Kesarwani"
            link="https://www.linkedin.com/in/satyam-kumar-kesarwani-763b61293/"
          />

          <Card
            heading="Lead Developer"
            description="Nikunj Chauhan"
            link="https://www.linkedin.com/in/nikunj-chauhan-9781832b2/"
          />

          <Card
            heading="Lead Tester"
            description="Sarafaraj Nasardi"
            link="https://www.linkedin.com/in/sarafaraj-nasardi-7722b31b3/"
          />

          <Card
            heading="Designer"
            description="Vidhi Mittal"
            link="https://www.linkedin.com/in/vidhi-mittal04/"
          />
        </div>
        {/* 
        <div className="bottom-triangle">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 0L0 0 598.97 114.72 1200 0z"
              className="shape-fill"
            ></path>
          </svg>
        </div> */}
      </section>
    </>
  );
}

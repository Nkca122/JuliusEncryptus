import { useEffect, useRef, useState } from "react";
import DropMenu from "../components/dropmenu";
import Error from "../components/error";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { ExpressError } from "../assets/js/error";

import Infograph from "../components/infographic";

const style = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, 656px)",
    width: "100%",
    height: "auto",
    justifyContent: "center",
    alignItems: "center",
    gap: "1em",
  },
  gridItem: {
    width: "100%",
  },
};

export default function Decoder() {
  const [text, setText] = useState("");
  const [response, setResponse] = useState(null);
  const [err, setErr] = useState(null);
  const [fetch, setFetch] = useState(false);

  let formRef = useRef(null);

  return (
    <>
      {err ? <Error err={err} /> : null}

      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(90deg, #776b59  1px, transparent 1px) 0 0, linear-gradient(180deg, #776b59  1px, transparent 1px) 0 0, #1d1f20",
          backgroundSize: "60px 60px, 60px 60px",
          backgroundRepeat: "repeat. repeat",
          border: "1px solid #3C3C3C",
          boxShadow:
            "4px 4px 0 black, 6px 6px 0 rgba(0, 0, 0, 0.8), 8px 8px 0 rgba(0, 0, 0, 0.6)",
          paddingBlock: "var(--padding)",
        }}
        className="container"
      >
        <div style={style.grid}>
          <div
            style={{
              ...style.gridItem,
              borderRadius: "24px",
              border: "1px solid #f5f5f5",
              backgroundColor: "#242628",
              boxShadow:
                "4px 4px 0 black, 6px 6px 0 rgba(0, 0, 0, 0.8), 8px 8px 0 rgba(0, 0, 0, 0.6)",
            }}
          >
            <form
              method=""
              action=""
              onSubmit={(event) => {
                setFetch(true);
                setResponse([[], []]);
                axios({
                  method: "post",
                  url: import.meta.env.VITE_api_url,
                  timeout: "100000",
                  data: {
                    cipher: text,
                  },
                })
                  .then((res) => {
                    setTimeout(setFetch(false), 2000);
                    setResponse([res.data.body.corr, res.data.body.incorr]);
                  })
                  .catch((err) => {
                    let axiosErr = new ExpressError(
                      err.message || "Something, Went Wrong",
                      err.code,
                      err.status
                    );
                    setErr(axiosErr);
                    setFetch(false);
                  });
                event.preventDefault();
              }}
              ref={formRef}
            >
              <div
                className="container"
                style={{ display: "block", width: "100%" }}
              >
                <div
                  style={{
                    display: "block",
                    width: "100%",
                    position: "relative",
                  }}
                >
                  {fetch ? (
                    <div
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        backgroundColor: "#232526",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "24px",
                      }}
                    >
                      <div
                        style={{
                          height: "50%",
                          aspectRatio: "1/1",
                          borderRadius: "24px",
                        }}
                      >
                        <FontAwesomeIcon
                          icon={faSpinner}
                          className="spinner"
                          style={{ height: "100%", fontWeight: "lighter" }}
                        />
                      </div>
                    </div>
                  ) : null}
                  <textarea
                    type="text"
                    name="cipher"
                    id="cipher"
                    onChange={(event) => {
                      setText(event.target.value.toLowerCase());
                    }}
                    style={{
                      width: "100%",
                      height: "600px",
                      backgroundColor: "transparent",
                      border: "none",
                      padding: "calc(var(--padding)*2)",
                      color: "#f5f5f5",
                      fontSize: "1rem",
                      fontWeight: 900,
                      textAlign: "left",
                      borderRadius: "24px",
                    }}
                    value={text}
                    placeholder="Enter Your Cipher Here...."
                    autoComplete="off"
                    spellCheck="false"
                  />

                  <div
                    style={{
                      display: "block",
                      width: "fit-content",
                      position: "absolute",
                      bottom: "var(--padding)",
                    }}
                  >
                    {!fetch ? (
                      <button
                        style={{
                          backgroundColor: "#232526",
                          display: "block",
                          width: "100%",
                          textAlign: "end",
                          border: "none",
                        }}
                      >
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          color="#f5f5f5"
                          size="2x"
                          style={{
                            padding: "var(--padding)",
                            border: "1px solid #f5f5f5",
                            borderRadius: "50%",
                          }}
                        />
                      </button>
                    ) : null}
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div style={{ ...style.gridItem, backgroundColor: "transparent", height: '100%' }}>
            {response ? (
              <DropMenu response={response} />
            ) : (
              <DropMenu response={[[], []]} />
            )}
          </div>
        </div>
      </section>
    </>
  );
}

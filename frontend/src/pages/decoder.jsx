import { useEffect, useRef, useState } from "react";
import DropMenu from "../components/dropmenu";
import Error from "../components/error";
import axios from "axios";
import Chart from "chart.js/auto";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { ExpressError } from "../assets/js/error";

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

const plugin = {
  id: "customCanvasBackgroundColor",
  beforeDraw: (chart, args, options) => {
    const { ctx } = chart;
    ctx.save();
    ctx.globalCompositeOperation = "destination-over";
    ctx.fillStyle = options.color || "#99ffff";
    ctx.fillRect(0, 0, chart.width, chart.height);
    ctx.restore();
  },
};

let englishFreq = {
  a: 0,
  b: 0,
  c: 0,
  d: 0,
  e: 0,
  f: 0,
  g: 0,
  h: 0,
  i: 0,
  j: 0,
  k: 0,
  l: 0,
  m: 0,
  n: 0,
  o: 0,
  p: 0,
  q: 0,
  r: 0,
  s: 0,
  t: 0,
  u: 0,
  v: 0,
  w: 0,
  x: 0,
  y: 0,
  z: 0,
};

let freqAnalysis = {
  a: 8.2,
  b: 1.5,
  c: 2.8,
  d: 4.3,
  e: 12.7,
  f: 2.2,
  g: 2.0,
  h: 6.1,
  i: 7.0,
  j: 0.15,
  k: 0.77,
  l: 4.0,
  m: 2.4,
  n: 6.7,
  o: 7.5,
  p: 1.9,
  q: 0.095,
  r: 6,
  s: 6.3,
  t: 9.1,
  u: 2.8,
  v: 0.98,
  w: 2.4,
  x: 0.15,
  y: 2,
  z: 0.074,
};

export default function Decoder() {
  const [text, setText] = useState("");
  const [response, setResponse] = useState(null);
  const [err, setErr] = useState(null);
  const [fetch, setFetch] = useState(false);

  let formRef = useRef(null);

  useEffect(() => {
    Object.keys(Chart.instances).forEach((chartId) => {
      Chart.instances[chartId].destroy();
    });

    document.querySelectorAll("canvas").forEach((c) => {
      let ctx = c.getContext("2d");
      ctx.canvas.width = 656;
      ctx.canvas.height = 400;
    });
  }, []);

  useEffect(() => {
    let ctx = document.getElementById("english").getContext("2d");
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: Object.keys(englishFreq),
        datasets: [
          {
            label: "% of occ. of English Characters",
            data: Object.keys(freqAnalysis).map((key) => freqAnalysis[key]),
            backgroundColor: "#fae27a",
            borderColor: "#d4a017",
            borderWidth: 2,
          },
        ],
      },
      options: {
        plugins: {
          customCanvasBackgroundColor: {
            color: "#242628",
          },
        },
      },
      plugins: [plugin],
    });
  }, [englishFreq]);

  useEffect(() => {
    if (response) {
      const chartId = Object.keys(Chart.instances).find(
        (id) => Chart.instances[id].canvas.id === "solutions"
      );
      if (chartId) {
        Chart.instances[chartId].destroy();
      }

      let ctx = document.getElementById("solutions").getContext("2d");
      let data = [];
      let freq = null;
      response[0].forEach((str) => {
        freq = { ...englishFreq };
        for (let i = 0; i < str.length; i++) {
          let chk = Object.keys(freq).find((c) => c == str[i]);
          if (chk) {
            freq[str[i]] = freq[str[i]] + 1;
          } else continue;
        }
        data.push(freq);
      });
      let index = 0;
      new Chart(ctx, {
        type: "line",
        data: {
          labels: Object.keys(englishFreq),
          datasets: data.map((d, index) => {
            return {
              label: `Soln ${index + 1}`,
              data: Object.keys(d).map((key) => {
                return d[key];
              }),
            };
          }),
        },
        options: {
          plugins: {
            customCanvasBackgroundColor: {
              color: "#242628",
            },
          },
        },
        plugins: [plugin],
      });
    }
  }, [response]);

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
            "linear-gradient(90deg, #776b59  1px, transparent 1px) 0 0, linear-gradient(180deg, #776b59  1px, transparent 1px) 0 0, url('image copy.png'), #1d1f20",
          backgroundSize: "60px 60px, 60px 60px, cover",
          backgroundRepeat: 'repeat. repeat, no-repeat',
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
                    setResponse(res.data.body);
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
                      height: "400px",
                      backgroundColor: "transparent",
                      border: "none",
                      padding: "var(--padding)",
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
          <div style={{ ...style.gridItem, backgroundColor: "transparent" }}>
            {response ? (
              <DropMenu response={response} />
            ) : (
              <DropMenu response={[[], []]} />
            )}
          </div>
        </div>
        <div
          style={{
            ...style.grid,
            marginTop: "var(--padding)",
          }}
        >
          <div
            style={{
              ...style.gridItem,
              height: "400px",
              width: "100%",
              position: "relative",
            }}
          >
            <canvas
              id="english"
              style={{
                backgroundColor: "#242628",
                borderRadius: "24px",
                boxShadow:
                  "4px 4px 0 black, 6px 6px 0 rgba(0, 0, 0, 0.8), 8px 8px 0 rgba(0, 0, 0, 0.6)",
                border: "1px solid white",
              }}
            ></canvas>
          </div>
          <div
            style={{
              ...style.gridItem,
              height: "400px",
              width: "100%",
              position: "relative",
            }}
          >
            <canvas
              id="solutions"
              style={{
                backgroundColor: "#242628",
                borderRadius: "24px",
                boxShadow:
                  "4px 4px 0 black, 6px 6px 0 rgba(0, 0, 0, 0.8), 8px 8px 0 rgba(0, 0, 0, 0.6)",
                border: "1px solid white",
              }}
            ></canvas>
          </div>
        </div>
      </section>
    </>
  );
}

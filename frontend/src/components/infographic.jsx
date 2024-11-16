import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight, faKeyboard } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import Chart from "chart.js/auto";

import { v4 as uuid } from "uuid";

const style = {
  gridItem: {
    width: "100%",
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

const qty_map = {
  mean: "Mean",
  mode: "Mode",
  median: "Median",
  std_dev: "Standard Deviation",
  shift: "Shift",
};
export default function Infograph(props) {
  let data = props.data;
  let status = props.status;

  useEffect(() => {
    Object.keys(Chart.instances).forEach((chartId) => {
      Chart.instances[chartId].destroy();
    });

    document.querySelectorAll("canvas").forEach((c) => {
      let ctx = c.getContext("2d");
      ctx.canvas.width = 450;
      ctx.canvas.height = 400;
    });
  }, []);

  useEffect(() => {
    console.log(data.quantities.freq);
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
    const chartId = Object.keys(Chart.instances).find(
      (id) => Chart.instances[id].canvas.id === "solutions"
    );
    if (chartId) {
      Chart.instances[chartId].destroy();
    }

    let ctx = document.getElementById("solutions").getContext("2d");
    let data_x = [];
    let labels = [];
    Object.keys(data.quantities.freq).map((key) => {
      data_x.push(data.quantities.freq[key]);
      labels.push(key);
    });

    console.log(data_x, labels);
    new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Frequency Analysis",
            data: data_x,
            backgroundColor: `${status == "correct" ? "green" : "red"}`,
            borderColor: `${status == "correct" ? "green" : "red"}`,
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
  }, []);
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backdropFilter: "blur(10px)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 20,
        }}
      >
        <div
          style={{
            display: 'block',
            width: "90%",
            height: "90%",
            backgroundColor: "#242424",
            borderRadius: "24px",
            border: `1px solid ${status == "correct" ? "green" : "red"}`,
            overflowY: "scroll",
            padding: "calc(var(--padding)*2)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, 450px)",
              gap: "1em",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              marginBlock: "var(--padding)",
            }}
          >
            <p
              style={{
                width: "100%",
                textAlign: "justify",
                textAlignLast: "center",
                fontWeight: 900,
                height: "400px",
                border: `1px solid ${status == "correct" ? "green" : "red"}`,
                padding: "var(--padding)",
                overflowY: "scroll",
              }}
            >
              <b
                style={{
                  display: "block",
                  padding: "var(--padding)",
                  fontSize: "1.2rem",
                  color: `${status == "correct" ? "green" : "red"}`,
                }}
              >
                Value
              </b>
              {data.ans}
            </p>
            <table
              style={{
                width: "100%",
                border: `1px solid ${status == "correct" ? "green" : "red"}`,
                tableLayout: "fixed",
                fontSize: "1rem",
                height: "400px",
              }}
            >
              <thead
                style={{
                  backgroundColor: `${status == "correct" ? "green" : "red"}`,
                  fontSize: "0.95rem",
                }}
              >
                <tr>
                  <th
                    scope="col"
                    style={{
                      padding: "var(--padding)",
                    }}
                  >
                    Quantity
                  </th>
                  <th
                    scope="col"
                    style={{
                      padding: "var(--padding)",
                    }}
                  >
                    Value
                  </th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(data.quantities).map((key) => {
                  if (key != "freq") {
                    let value = data.quantities[key];
                    return (
                      <tr key={qty_map[key]}>
                        <td
                          style={{
                            padding: "auto",
                            border: `1px solid ${
                              status == "correct" ? "green" : "red"
                            }`,
                          }}
                        >
                          {qty_map[key]}
                        </td>
                        <td
                          style={{
                            padding: "auto",
                            border: `1px solid ${
                              status == "correct" ? "green" : "red"
                            }`,
                          }}
                        >
                          {key != "mode"
                            ? (Math.round(value * 100) / 100).toString()
                            : value.toUpperCase()}
                        </td>
                      </tr>
                    );
                  }
                })}
              </tbody>
            </table>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, 450px)",
              gap: "1em",
              width: "100%",
              justifyContent: "center",
              marginBlock: "var(--padding)",
            }}
          >
            <div
              style={{
                height: "400px",
                width: "100%",
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
                height: "400px",
                width: "100%",
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
        </div>
      </div>
    </>
  );
}

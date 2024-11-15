import DropDown from "./dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuid } from "uuid";
export default function DropMenu(props) {
  let items = props.response;
  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          backgroundColor: "#232526",
          borderRadius: "24px",
          border: "1px solid #f5f5f5",
          height: "600px",
          overflowY: "scroll",
          boxShadow:
            "4px 4px 0 black, 6px 6px 0 rgba(0, 0, 0, 0.8), 8px 8px 0 rgba(0, 0, 0, 0.6)",
          overflowX: "hidden",
        }}
      >
        {!items[0].length && !items[1].length ? (
          <p
            style={{
              height: "100%",
              width: "100%",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {"The Solutions to the Cipher will appear here..."}
          </p>
        ) : null}
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              alignItems: "center",
            }}
          >
            {items[0].length || items[1].length ? (
              <h5
                style={{
                  display: "block",
                  textAlign: "right",
                  color: "green",
                  margin: "var(--padding)",
                  borderRadius: "24px",
                }}
                className="container"
              >
                <FontAwesomeIcon icon={faCheck} size="3x" /> <b>Recommended</b>
              </h5>
            ) : null}
            {items[0].map((item) => {
              return (
                <DropDown
                  val={item}
                  clr="#2b9b06"
                  strokeClr="#2b9b06"
                  status='correct'
                  key={uuid()}
                />
              );
            })}
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              alignItems: "center",
            }}
          >
            {items[1].length || items[0].length ? (
              <h5
                style={{
                  display: "block",
                  textAlign: "left",
                  color: "red",
                  margin: "var(--padding)",
                  borderRadius: "24px",
                }}
                className="container"
              >
                <FontAwesomeIcon icon={faXmark} size="3x" />{" "}
                <b>Potentially Wrong</b>
              </h5>
            ) : null}

            {items[1].map((item) => {
              return (
                <DropDown
                  val={item}
                  clr="#9b0606"
                  strokeClr="#9b0606"
                  status='incorrect'
                  key={uuid()}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

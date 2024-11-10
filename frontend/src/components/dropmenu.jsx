import DropDown from "./dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
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
          height: "400px",
          overflowY: "scroll",
          boxShadow:
            "4px 4px 0 black, 6px 6px 0 rgba(0, 0, 0, 0.8), 8px 8px 0 rgba(0, 0, 0, 0.6)",
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
          <div style={{ display: "block", width: "100%" }}>
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
                  clr="#f5f5f5"
                  strokeClr="#2b9b06"
                  key={item}
                />
              );
            })}
          </div>

          <div style={{ display: "block", width: "100%" }}>
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
                <FontAwesomeIcon icon={faXmark} size="3x" /> <b>Potentially Wrong</b>
              </h5>
            ) : null}

            {items[1].map((item) => {
              return (
                <DropDown
                  val={item}
                  clr="#ffffff"
                  strokeClr="#9b0606"
                  key={item}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

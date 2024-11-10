import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";

export default function DropDown(props) {
  let displayRef = useRef(null);
  let holderRef = useRef(null);

  let [isActive, setIsActive] = useState(false);
  let clr = props.clr;
  let strokeClr = props.strokeClr;
  let val = props.val;

  return (
    <>
      <div
        style={{
          width: "100%",
          borderRadius: "24px",
          backgroundColor: strokeClr,
          border: `1px solid #242424`,
          margin: 0,
          position: "relative",
          minHeight: "calc(2rem + 2*(var(--padding)))",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          overflowX: "hidden",
        }}
        ref={holderRef}
      >
        <div
          style={{
            background: "#06609b",
            border: "none",
            color: clr,
            padding: "var(--padding)",
            borderRadius: "24px 0 0 24px",
            position: "absolute",
            height: "100%",
            top: 0,
            left: 0,
            width: "60px",
          }}
          onClick={(e) => {
            let display = displayRef.current;
            display.classList.toggle("display");
            display.classList.toggle("active");

            setIsActive((prev) => !prev);
          }}
        >
          {!isActive ? (
            <FontAwesomeIcon icon={faPlus} size="2x" />
          ) : (
            <FontAwesomeIcon icon={faMinus} size="2x" />
          )}
        </div>

        <div style={{ maxWidth: "calc(100% - 62px)" }}>
          <p
            className="display"
            ref={displayRef}
            style={{
              color: clr,
              backgroundColor: strokeClr,
              borderRadius: "24px",
              margin: 0,
              overflow: "scroll",
              width: "100%",
            }}
          >
            {val}
          </p>
        </div>
      </div>
    </>
  );
}

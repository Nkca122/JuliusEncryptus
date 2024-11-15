import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark} from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import Infograph from "./infographic";

export default function DropDown(props) {
  let displayRef = useRef(null);
  let holderRef = useRef(null);

  let [isActive, setIsActive] = useState(false);
  let clr = props.clr;
  let strokeClr = props.strokeClr;
  let val = props.val;
  let status = props.status;

  return (
    <>
    {isActive ? <Infograph data ={val} status={status}/> : null}
    {isActive ? <button style={{
      position: 'fixed',
      top: 'calc(var(--padding)*2 + 5%)',
      right: 'calc(var(--padding)*2 + 5%)',
      zIndex: 22,
      background: 'none', 
      border: 'none',
    }} onClick={()=>{
      setIsActive(false);
    }}>
      <FontAwesomeIcon icon={faXmark} size={'4x'} color={status == 'correct' ? 'green' : 'red'}/>
    </button>: null}
      <div
        style={{
          width: "95%",
          minHeight: "60px",
          backgroundColor: "#242424",
          border: `1px solid ${strokeClr}`,
          marginBottom: "var(--padding)",
          padding: "var(--padding)",
          borderRadius: "24px",

          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          boxShadow: `0 2px 0 ${clr}, 0 4px 0 ${clr}, 0 6px 0 ${clr}`,
        }}
      >
        <p
          style={{
            width: "100%",
            textAlign: "justify",
            textAlignLast: "center",
            fontWeight: "350",
            fontSize: "1rem",
          }}
        >
          {val.ans}
        </p>

        <button
          style={{
            margin: "var(--padding)",
            padding: '2px var(--padding) 2px var(--padding)',
            borderRadius: '24px',
            backgroundColor: '#000',
            border: '1px solid #f5f5f5',
            color: '#f5f5f5'
          }}

          onClick={()=>{
            setIsActive(true);
          }}
        >
          View Analysis
        </button>
      </div>
    </>
  );
}

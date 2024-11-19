export default function Product(props) {
  let content = props.content;
  let icon = props.icon;
  let link = props.link;
  return (
    <>
      <a href={link} className="product" target='main'>
        <div
          style={{
            position: "relative",
            backgroundColor: "#f5f5f5",
            marginBlockStart: "calc(0.5 * 146px + var(--padding))",
            width: "286px",
            borderRadius: "24px",
            color: "#000",
          }}
        >
          <div
            style={{
              width: "146px",
              backgroundColor: "inherit",
              border: "5px solid #000",
              borderRadius: "50%",
              aspectRatio: "1/1",
              padding: "calc(var(--padding)*2)",
              position: "absolute",
              zIndex: 2,
              top: "calc(-0.5 * 146px)",
              left: "calc(50% - 0.5 * 146px)",
            }}
          >
            {icon}
          </div>

          <div>
            <div
              style={{
                paddingTop: "calc(0.5 * 146px)",
                backgroundColor: "inherit",
                border: "1px solid #000",
                borderRadius: "24px",
                boxShadow: "4px 0 0 #000, 6px 0 0 #000, 8px 0 0 #000",
              }}
              className="container"
            >
              <p
                style={{
                  width: "100%",
                  lineHeight: "1em",
                  borderRadius: "24px",
                }}
              >
                {content}
              </p>
            </div>
          </div>
        </div>
      </a>
    </>
  );
}

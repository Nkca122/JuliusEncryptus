export default function Card(props) {
  let imgSrc = props.img;
  let heading = props.heading;
  let description = props.description;
  let link = props.link;
  return (
    <>
      {link ? (
        <a href={link} target="main">
          <div className="card-div container">
            {heading ? <h3>{heading}</h3> : null}
            {imgSrc ? (
              <div
                className="card-img"
                style={{
                  backgroundImage: `url(${imgSrc})`,
                }}
              ></div>
            ) : null}
            {description ? (
              <div className="card-description">
                <p>{description}</p>
              </div>
            ) : null}
            {link ? (
              <div className="card-link">
                <p href={link}>View Profile</p>
              </div>
            ) : null}
          </div>
        </a>
      ) : (
        <div className="card-div container">
          {heading ? <h3>{heading}</h3> : null}
          {imgSrc ? (
            <div
              className="card-img"
              style={{
                backgroundImage: `url(${imgSrc})`,
              }}
            ></div>
          ) : null}
          {description ? (
            <div className="card-description">
              <p>{description}</p>
            </div>
          ) : null}
        </div>
      )}
    </>
  );
}

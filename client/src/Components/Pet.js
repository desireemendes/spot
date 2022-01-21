import React from "react";
import PropTypes from "prop-types";
import "./AdoptStyles.scss";
import { Accordion } from "react-bootstrap";

const Pet = ({
  id,
  name,
  media,
  breeds,
  location,
  distance,
  sort,
  url,
  tags,
  type,
  gender,
  contact,
  environment,
}) => {
  const img = media[0].medium;
  const description =
    tags.length > 2
      ? `Hi! I'm ${name} the ${gender} ${type}. Besides being adorable, I'm also 
${tags[0]}, ${tags[1]} and ${tags[2]}.`
      : `Hi! I'm ${name} the ${gender} ${type}. Besides being adorable, I'm also 
affectionate, adventurous and loyal.`;

  const kids =
    environment.children === true
      ? "✅  Good with kids"
      : "🚫  Not appropriate for a home with children";
  const cats =
    environment.cats === true
      ? "✅  Good with cats"
      : "🚫  Not appropriate for a home with cats";
  const dogs =
    environment.dogs === true
      ? "✅  Good with dogs"
      : "🚫  Not appropriate for a home with dogs";

  return (
    <div className="pets__card" data-tesid="pets-comp">
      <div className="pets__card-box">
        <img src={img} alt="" />
        <span id="name">
          <h5>{name}</h5>
          <br />
        </span>
        <span>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>More about {name}</Accordion.Header>
              <Accordion.Body>
                <h3>{`🏡${contact.address.city}, ${contact.address.state}`}</h3>
                <h4>{`${breeds} ${type}`}</h4>
                <h5>{`${description}`}</h5>
                <br />
                <u>
                  <b>Environment:</b>
                </u>
                <br />
                {kids}
                <br />
                {cats}
                <br />
                {dogs}
                <br />
                <div class="map"></div>
                <a
                  href={`mailto:${contact.email}?subject=Potential%20Adoption&body=I%20would%20like%20to%20have%20more%20information%20about%20${name}.`}
                >
                  <button class="btn btn-dark">Email Shelter</button>
                </a>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </span>
      </div>
    </div>
  );
};
Pet.propTypes = {
  name: PropTypes.string,
  media: PropTypes.array, // eslint-disable-line
  id: PropTypes.number,
};

Pet.defaultProps = {
  name: "",
  media: [],
  id: null,
  age: "",
  description: "",
  location: "",
  distance: "",
  sort: "",
  url: "",
  type: "",
  gender: "",
  breeds: "",
  environment: "",
};

export default Pet;

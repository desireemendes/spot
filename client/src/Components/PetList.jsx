import PropTypes from "prop-types";
import Pet from "./Pet";

const PetsList = ({ pets }) => (
  <div className="pets__wrapper" data-testid="pets-list-id">
    {pets.length === 0 ? (
      <h1 className="loading__wrapper">No pets Found</h1>
    ) : (
      pets.map((pet) => (
        <Pet
          id={pet.id}
          name={pet.name}
          key={pet.id}
          media={pet.photos}
          description={pet.description}
          location={pet.location}
          url={pet.url}
          type={pet.type}
          species={pet.species}
          size={pet.size}
          environment={pet.environment}
          tags={pet.tags}
          gender={pet.gender}
        />
      ))
    )}
  </div>
);

PetsList.propTypes = {
  pets: PropTypes.array, // eslint-disable-line
};

PetsList.defaultProps = {
  pets: [],
};

export default PetsList;

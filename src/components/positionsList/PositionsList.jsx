import "./style.css";

const PositionsList = ({ positions }) => (
  <div>
    {positions.map((position, index) => (
      <div key={position.name}>
        <h3>{position.name}</h3>
        <p>{position.description}</p>
        {index !== positions.length - 1 && <hr />}
      </div>
    ))}
  </div>
);

export default PositionsList;

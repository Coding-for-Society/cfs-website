import "./style.css";

const PositionsList = ({ positions }) => (
  <div className="posListContainer">
    {positions.map((position, index) => (
      <div key={position.name}>
        <h3>{position.name}</h3>
        <a href={`mailto:hello@codingforsociety.com?subject=Application%20as%20${encodeURIComponent(position.name)}`}>Apply &rarr;</a>
        <p>{position.description}</p>
        {index !== positions.length - 1 && <hr />}
      </div>
    ))}
  </div>
);

export default PositionsList;

import { useParams } from "react-router-dom";

export default function TeamDetail() {
  const { id } = useParams();

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        top: 0,
        left: 0,
        backgroundColor: "red",
      }}
    >
      {id}
    </div>
  );
}

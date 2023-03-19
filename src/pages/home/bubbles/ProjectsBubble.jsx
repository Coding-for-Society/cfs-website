const ProjectBubble = (props) => {
  const { active } = props;

  return (
    <svg
      width={2232}
      height={1018}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        style={{ transition: "fill 0.1s linear" }}
        d="M1288.5 258.5C1010.47 168.671 779.5 1 268 1 127.923 1 50.438 38.642 1 98.5V845c76.138 27.785 245.5 57.5 385 47.5 1107.53-79.393 911.97 38.817 1403 118 508.5 82 640-654.861 64-734.861-213.36-29.634-202.52 99.816-564.5-17.139Z"
        fill={active ? "#01001d" : "#666666"}
      />
    </svg>
  );
};

export default ProjectBubble;

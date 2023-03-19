const ProjectBubble = (props) => {
  const { active } = props;

  return (
    <svg
      width={1920}
      height={1016}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        style={{ transition: "fill 0.1s linear" }}
        d="M267.5 0C-218.552 0-.996 489.34-176 572.841-347.391 713.822-404.884 920.632 239 878.5c1108-72.5 1058.47 51.817 1549.5 131 508.5 82 298-702.361 64-734.861-213.36-29.634-202.52 99.816-564.5-17.139C1009.97 167.671 779 0 267.5 0Z"
        fill={active ? "var(--dark-blue)" : "var(--grey)"}
      />
    </svg>
  );
};

export default ProjectBubble;

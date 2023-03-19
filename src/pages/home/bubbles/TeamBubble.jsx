const TeamBubble = (props) => {
  const { active } = props;

  return (
    <svg
      width={1920}
      height={985}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        style={{ transition: "fill 0.1s linear" }}
        d="M323.824 27.973C50.08-48.775-168.352 61.981-233.5 48.684l-57 828.5c86.475 51.711 171.574 169.236 393.5 67.5 294.5-135 716.199-53.812 1050.5 0 351 56.496 377.51-56.548 793-24 517 40.5 402.95-650.906 237.5-609-165.45 41.906-658.49-150.48-923.45-112.459C665 284.684 708 135.684 323.824 27.973Z"
        fill={active ? "#01001d" : "#666666"}
      />
    </svg>
  );
};

export default TeamBubble;

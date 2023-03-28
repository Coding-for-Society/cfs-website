const TeamBubble = (props) => {
  const { active } = props;

  return (
    <svg
      width={2325}
      height={982}
      viewBox="0 0 2325 982"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        style={{ transition: "fill 0.1s linear" }}
        d="M1261.55 201.65C666 287.109 709 138.109 324.824 30.398 178.878-10.52 99.654-4.036 0 14.426v967.347c31.02-5.934 65.445-16.99 104-34.664 294.5-135 716.199-53.812 1050.5 0 351 56.501 377.51-56.548 793-24 517 40.5 402.95-650.906 237.5-609-165.45 41.906-658.49-150.479-923.45-112.459Z"
        fill={active ? "#01001d" : "#666666"}
      />
    </svg>
  );
};

export default TeamBubble;

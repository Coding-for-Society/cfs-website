const MotivationBubble = (props) => {
  const { active } = props;

  return (
    <svg
      width={745}
      height={895}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        style={{ transition: "fill 0.1s linear" }}
        d="M205.5 335C-87.7 403.8-3.833 699.705 75.5 800.205c82.363 101.206 194.777 127.028 667.5 46v-133.5C794 490.539 909.549-90.257 703 12 407.5 158.295 572 249 205.5 335Z"
        fill={active ? "#01001d" : "#666666"}
      />
    </svg>
  );
};

export default MotivationBubble;

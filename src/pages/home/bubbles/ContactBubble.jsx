const ContactBubble = (props) => {
  const { active } = props;

  return (
    <svg
      width={776}
      height={692}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        style={{ transition: "fill 0.2s linear" }}
        d="M.153 238.058c4.4-213.6 216.673-229.666 352.34-216.5 224 0 228.5-95.5 372.5 115.5s-69.024 301.099-60 410.001c14.5 175-254 174-450.34 84.999-75.587-34.264-220-127-214.5-394Z"
        fill={active ? "#01001d" : "#666666"}
      />
    </svg>
  );
};

export default ContactBubble;

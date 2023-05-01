const ExpandIcon = ({ expanded, ...props }) => (
  <svg
    width="61"
    height="60"
    viewBox="0 0 61 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x="11"
      y="27"
      width="38.4"
      height="6"
      fill="#01001D"
    />
    <circle
      cx="30"
      cy="30"
      r="28"
      stroke="#01001D"
      strokeWidth="4"
    />
    {!expanded && (
      <rect
        x="27"
        y="49.3999"
        width="38.4"
        height="6"
        transform="rotate(-90 27 49.3999)"
        fill="#01001D"
      />
    )}
  </svg>
);

export default ExpandIcon;

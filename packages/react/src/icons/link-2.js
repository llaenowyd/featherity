import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const Link2 = forwardRef(
  ({ color = "currentColor", size = 24, width = 2, ...rest }, ref) => {
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={width}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...rest}
      >
        <path d="M15 7h2a5 5 0 0 1 0 10H15M9 17H7A5 5 0 0 1 7 7H9"></path>
        <line x1="8" y1="12" x2="16" y2="12"></line>
      </svg>
    );
  }
);

Link2.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Link2.displayName = "Link2";

export default Link2;

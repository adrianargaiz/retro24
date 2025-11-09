import React from 'react';

interface BackArrowIconProps {
  size?: number;
  color?: string;
  className?: string;
}

const BackArrowIcon: React.FC<BackArrowIconProps> = ({
  size = 20,
  color = 'currentColor',
  className = ''
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill={color}
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default BackArrowIcon;

import React from 'react';
import IcomoonReact from 'icomoon-react';
import PropTypes from 'prop-types';
import iconSet from '../assets/icon/selection.json';

const Icon = ({
  color,
  size,
  icon,
  className,
}) => (
  <IcomoonReact
    className={className}
    iconSet={iconSet}
    color={color}
    size={size}
    icon={icon}
  />
);

export default Icon;

Icon.propTypes = {
  color: PropTypes.string || null,
  size: (PropTypes.string || PropTypes.number).isRequired,
  icon: PropTypes.string.isRequired,
  className: PropTypes.string || null,
};

Icon.defaultProps = {
  color: null,
  className: null,
};

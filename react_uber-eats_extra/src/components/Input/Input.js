import React, { PureComponent, createRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './Input.scss';

export class Input extends PureComponent {
  state = {
    isFocused: false,
  };

  inputRef = createRef();

  handleFocus = () => this.setState({ isFocused: true });

  handleBlur = () => this.setState({ isFocused: false });

  focus = () => this.inputRef.current.focus();

  render() {
    const {
      iconUrl,
      value,
      onChange,
      onClick,
      type,
      placeholder,
      name,
      className,
      isSmall,
      label,
      tablet,
      locations: { locationsMap },
    } = this.props;

    const { isFocused } = this.state;
    const locationsRule = locationsMap && true;
    const locationsArray = locationsMap 
      ? Object.entries(locationsMap) 
      : [];

    const inputWrappeClass = cx(`control__input-wrapper ${tablet || ''}`, {
      'control__input-wrapper--focused': isFocused,
      [className]: !!className,
      dropdown: locationsRule,
    });

    const inputClass = cx('control_input', {
      'control_input--small': isSmall,
      'control_input--time': type === 'time',
    });

    return (
      <label className="control">
        {label && (
          <p className="control__label">
            {label}
          </p>
        )}
        <div className={inputWrappeClass}>
          {!!iconUrl && (
            <img
              src={iconUrl}
              alt={placeholder}
              className="control_icon"
            />
          )}

          <input
            ref={this.inputRef}
            type={type}
            value={value}
            onChange={onChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            name={name}
            placeholder={placeholder}
            className={inputClass}
          />

          {locationsRule && (
            <ul className="dropdown-leagues">
              {locationsArray.map((location) => {
                const { title, id } = location[1];

                if (title.toLowerCase().includes(value.toLowerCase())) {
                  return (
                    <li 
                      key={id} 
                      className="league" 
                      onClick={() => onClick(title)}
                    >
                      <img
                        src={iconUrl}
                        alt={placeholder}
                        className="control_icon"
                      />
                      <a href="#" className="black">{title}</a>
                    </li>
                  );
                }

                return <></>;
              })}
            </ul>
          )}
        </div>
      </label>
    );
  }
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  iconUrl: PropTypes.string,
  className: PropTypes.string,
  isSmall: PropTypes.bool,
  label: PropTypes.string,
  tablet: PropTypes.string,
  locations: PropTypes.shape({}),
};

Input.defaultProps = {
  locations: {},
  type: 'text',
  placeholder: '',
  iconUrl: '',
  className: '',
  label: '',
  tablet: '',
  isSmall: true,
};

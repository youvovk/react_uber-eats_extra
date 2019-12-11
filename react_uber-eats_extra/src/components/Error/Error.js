import React from 'react';
import PropTypes from 'prop-types';
import './Error.scss';

export const Error = (props) => {
  const { message, path = 'Home', openedModalWindow, openModalWindow } = props;

  return (
    <div className="error">
      <p className="error__text">
        {message}
      </p>

      {openedModalWindow ? (
        <button
          type="button" 
          onClick={() => openModalWindow('', false)} 
          className="error__link"
        >
          {`Got to ${path}`}
        </button>
      )
        : (
          <a href="/" className="error__link">
            {`Got to ${path}`}
          </a>
        )
      }
    </div>
  );
};

Error.propTypes = {
  openedModalWindow: PropTypes.bool,
  openModalWindow: PropTypes.func,
  path: PropTypes.string,
  message: PropTypes.string,
};

Error.defaultProps = {
  openedModalWindow: null,
  openModalWindow: () => {},
  message: 'Sorry, something went wrong',
  path: 'Home',
};

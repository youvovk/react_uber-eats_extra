import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Header.scss';
import { Input } from '../Input/Input';

export class Header extends Component {
  state = {
    address: '',
    time: '',
    search: '',
    isMobileSearchVisible: false,
    isMobileDeliveryInfoVisible: false,
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  toggleSearch = () => this.setState(({ isMobileSearchVisible }) => ({
    isMobileSearchVisible: !isMobileSearchVisible,
    isMobileDeliveryInfoVisible: false,
  }));

  toggleDeliveryInfo = () => this.setState(({
    isMobileDeliveryInfoVisible,
  }) => ({
    isMobileDeliveryInfoVisible: !isMobileDeliveryInfoVisible,
    isMobileSearchVisible: false,
  }));

  closeMobile = () => this.setState({
    isMobileSearchVisible: false,
    isMobileDeliveryInfoVisible: false,
  });

  setLocation = (locationActive) => {

    this.setState({ address: locationActive })
  };

  render() {
    const {
      address,
      time,
      search,
      isMobileSearchVisible,
      isMobileDeliveryInfoVisible,
    } = this.state;

    const { locations } = this.props;

    return (
      <header className="header">
        <div className="content">
          <div className="header__inner">
            <a href="/">
              <img
                src="./images/Logo_uber.svg"
                alt="Uber Eats"
                className="header__logo"
              />
            </a>

            <div className="header__delivery-info">
              <Input
                name="address"
                onChange={this.handleChange}
                onClick={this.setLocation}
                value={address}
                placeholder="Address"
                iconUrl="./images/input.svg"
                tablet="tablet"
                locations={locations}
              />

              <Input
                name="time"
                onChange={this.handleChange}
                value={time}
                placeholder="Time"
                type="time"
              />
            </div>

            <div className="header__search">
              <Input
                name="search"
                onChange={this.handleChange}
                value={search}
                placeholder="Search"
                iconUrl="./images/search.svg"
                tablet="tablet"
              />
            </div>

            <div className="header__toggle-buttons">
              <button
                type="button"
                className="header__toggle-btn"
                onClick={this.toggleDeliveryInfo}
              >
                <img
                  src="./images/location.svg"
                  alt="place icon"
                />
              </button>
              
              <button
                type="button"
                className="header__toggle-btn"
                onClick={this.toggleSearch}
              >
                <img
                  src="./images/search.svg"
                  alt="search icon"
                />
              </button>
            </div>

            <a
              className="header__link"
              href="./sign-in"
            >
              Sign In
            </a>
          </div>
          {(isMobileSearchVisible || isMobileDeliveryInfoVisible) && (
            <div className="header__mobile-controls mobile-controls">
              {isMobileSearchVisible && (
                <Input
                  label="Find"
                  name="search"
                  onChange={this.handleChange}
                  value={search}
                  placeholder="Search"
                  iconUrl="./images/search.svg"
                  isSmall={false}
                />
              )}

              {isMobileDeliveryInfoVisible && (
                <>
                  <Input
                    label="Where"
                    name="address"
                    onChange={this.handleChange}
                    value={address}
                    placeholder="Address"
                    iconUrl="./images/input.svg"
                    isSmall={false}
                    locations={locations}
                  />
                  <Input
                    label="To"
                    name="time"
                    onChange={this.handleChange}
                    value={time}
                    placeholder="Time"
                    type="time"
                    isSmall={false}
                  />
                </>
              )}

              <button
                type="button"
                className="mobile-controls__close"
                onClick={this.closeMobile}
              >
                <img
                  src="./images/close.svg"
                  alt="search icon"
                />
              </button>
            </div>
          )}
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  locations: PropTypes.shape({}),
};

Header.defaultProps = {
  locations: {},
};
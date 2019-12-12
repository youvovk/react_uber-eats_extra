import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import { RestaurantsListPage } from './components/RestaurantsListPage/index';

import { RestaurantPage } from './components/RestaurantPage/index';

import { ModalWindow } from './components/ModalWindow/index';

import './App.scss';

import { Header } from './components/Header/index';
import { Footer } from './components/Footer/Footer';

export const App = ({ openedModalWindow }) => (
  <>
    {openedModalWindow && (
      <ModalWindow />
    )}

    <Header />
    <div className="page">
      <main>
        <Route
          exact
          path="/"
          component={RestaurantsListPage}
        />

        <Route
          path="/restaurants/:id"
          component={RestaurantPage}
        />
      </main>
    </div>
    <Footer />
  </>
);

App.propTypes = {
  openedModalWindow: PropTypes.bool.isRequired,
};

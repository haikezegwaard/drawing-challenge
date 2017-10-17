import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, TabNavigator } from 'react-navigation';

import Main from '../containers/MainContainer';
import Profile from '../components/profile';
import Listing from '../containers/ListingContainer';
import Submit from '../containers/SubmitFormContainer';
import Detail from '../containers/DetailContainer';
import AuthContainer from '../containers/AuthContainer';

export const AppNavigator = TabNavigator({
  Main: { screen: Main },
  Listing: {screen: Listing },
  Submit: {screen: Submit },
  Profile: { screen: Profile },
  Detail: {screen: Detail },
  Login: {screen: AuthContainer },
},{
  tabBarPosition: 'top',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#e91e63',
  }
});

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);

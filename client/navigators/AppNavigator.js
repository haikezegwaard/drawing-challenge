import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, TabNavigator } from 'react-navigation';

import Main from '../containers/MainContainer';
import Profile from '../components/profile';
import Listing from '../containers/ListingContainer';
import Submit from '../containers/SubmitFormContainer';

export const AppNavigator = TabNavigator({
  Main: { screen: Main },
  Profile: { screen: Profile },
  Listing: {screen: Listing },
  Submit: {screen: Submit },
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

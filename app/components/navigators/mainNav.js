import React from 'react';
import { Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';

import newContributionForm from '../newContributionForm';
import newEventForm from '../newEventForm';

let MainScreenNavgiator = TabNavigator({
    Tab1: { screen: newContributionForm },
    Tab2: { screen: newEventForm }
});

MainScreenNavgiator.navigationOptions = {
    title: "Tab Example"
};

export default MainScreenNavgiator;
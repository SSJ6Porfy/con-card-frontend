import React from 'react';
import { Text, View } from 'react-native';
import { TabNavigator, DrawerNavigator } from 'react-navigation';

import newContributionForm from '../newContributionForm';
import newEventForm from '../newEventForm';

let MainScreenNavgiator = TabNavigator({
    "New Contribution": { screen: newContributionForm },
    "New Event": { screen: newEventForm }
});

MainScreenNavgiator.navigationOptions = {
    title: "Tab Example"
};

const mainDrawer = DrawerNavigator(
    {
        
    },
    {

    }
);

export default MainScreenNavgiator;
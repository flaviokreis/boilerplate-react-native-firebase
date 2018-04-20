import { Navigation } from 'react-native-navigation';

import { registerScreens } from './src/screens';

registerScreens();

Navigation.startSingleScreenApp({
    screen: {
        label: 'First',
        screen: 'FirstScreen',
        title: 'Fist Screen'
    }
});
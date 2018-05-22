import { createStackNavigator } from 'react-navigation';
import { LandingPageScreen } from './screens/LandingPage';
import { MoviesScreen } from './screens/Movies';

export const App = createStackNavigator({
    LandingPage: LandingPageScreen,
    Movies: MoviesScreen
}, {
    initialRouteName: 'LandingPage',
    headerMode: 'none'
});
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import  HomeScreen  from './components/HomeScreen';
import PostDetails from './components/PostDetails';

const Stack = createNativeStackNavigator();
export function RootStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="PostDetails" component={PostDetails} />
        </Stack.Navigator>
    )
}
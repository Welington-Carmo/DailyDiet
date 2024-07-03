import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Home from "src/Screens/Home";
import Statistics from "src/Screens/Statistics";
import NewSnack from "src/Screens/NewSnack";
import FeedBack from "src/Screens/FeedBack";
import Snack from "src/Screens/Snack";
import EditSnack from "src/Screens/EditSnack";

const { Navigator, Screen } = createNativeStackNavigator();

export default function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen
                name="Home"
                component={Home}
            />

            <Screen
                name="Statistcs"
                component={Statistics}
            />

            <Screen
                name="NewSnack"
                component={NewSnack}
            />

            <Screen
                name="Snack"
                component={Snack}
            />

            <Screen
                name="EditSnack"
                component={EditSnack}
            />

            <Screen
                name="FeedBack"
                component={FeedBack}
            />
        </Navigator>
    )
}
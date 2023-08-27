import ExerciseInfoScreen from "./ExerciseInfoScreen";
import DirectoryScreen from "./DirectoryScreen";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const DirectoryNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Directory"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#081A32",
        },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        name="Directory"
        component={DirectoryScreen}
        options={{ title: "Browse Exercises" }}
      />
      <Stack.Screen
        name="ExerciseInfo"
        component={ExerciseInfoScreen}
        options={({ route }) => ({
          title: route.params.exercise.name,
        })}
      />
    </Stack.Navigator>
  );
};

const Main = () => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <DirectoryNavigator />
    </View>
  );
};

export default Main;

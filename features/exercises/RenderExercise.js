import { Text, View } from "react-native";
import { Card } from "react-native-elements";

const RenderExercise = ({ exercise }) => {
  if (exercise) {
    return (
      <Card containerStyle={{ padding: 0 }}>
        <Card.Image
          source={exercise.image}
          style={{
            width: "100%",
            height: 350, // Adjust the height as needed to display the entire image
            resizeMode: "cover", // Make sure the image covers the entire space
          }}
        ></Card.Image>
        <Text
          style={{
            color: "black",
            textAlign: "center",
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          {exercise.name}
        </Text>
        <Text style={{ margin: 20 }}>{exercise.desc}</Text>
      </Card>
    );
  }
  return <View />;
};

export default RenderExercise;

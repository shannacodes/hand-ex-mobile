import RenderExercise from "../features/exercises/RenderExercise";

const ExerciseInfoScreen = ({ route }) => {
  const { exercise } = route.params;

  if (!exercise) {
    return <Text>Error: Exercise data not available.</Text>;
  }

  return <RenderExercise exercise={exercise} />;
};

export default ExerciseInfoScreen;

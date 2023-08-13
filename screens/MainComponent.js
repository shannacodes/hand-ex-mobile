import { useState } from "react";
import { EXERCISES } from "../shared/EXERCISES";
import DirectoryScreen from "./DirectoryScreen";

const Main = () => {
  const [exercises, setExercises] = useState(EXERCISES);

  return <DirectoryScreen exercises={exercises} />;
};

export default Main;

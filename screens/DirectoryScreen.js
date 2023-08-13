import { FlatList } from "react-native";
import { Avatar, ListItem } from "react-native-elements";
import { EXERCISES } from "../shared/EXERCISES";

const DirectoryScreen = (props) => {
  const renderDirectoryItem = ({ item: exercise }) => {
    return (
      <ListItem>
        <Avatar source={exercise.image} rounded />
        <ListItem.Content>
          <ListItem.Title>{exercise.name}</ListItem.Title>
          <ListItem.Subtitle>{exercise.desc}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
  };

  return (
    <FlatList
      data={props.exercises}
      renderItem={renderDirectoryItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default DirectoryScreen;

import React from "react";
import { ScrollView, Text, StyleSheet, View, Image } from "react-native";
import { Card } from "react-native-elements";

const WelcomeMessage = () => {
  return (
    <View style={styles.contentContainer}>
      <Image
        source={require("../assets/images/logo3.png")}
        style={styles.logo}
      />
      <Card containerStyle={styles.cardContainer}>
        <Card.Title style={styles.cardTitle}>Hey there! 👋</Card.Title>
        <Card.Divider />
        <Text style={styles.cardText}>
          Hand Exercise App helps you create custom exercises for your clients.
        </Text>
        <Text style={styles.cardText}>Let's get started!</Text>
      </Card>
    </View>
  );
};

const HomeScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <WelcomeMessage />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#081A32",
  },
  contentContainer: {
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
  },
  cardContainer: {
    width: "100%",
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginTop: 20,
  },
  cardTitle: {
    fontSize: 24,
    marginBottom: 10,
    textAlign: "center",
    color: "#081A32",
  },
  cardText: {
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 15,
    color: "#081A32",
    fontSize: 16,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
});

export default HomeScreen;

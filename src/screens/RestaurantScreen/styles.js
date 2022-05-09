import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  input: {
    height: 48,
    borderRadius: 5,
    overflow: "hidden",
    backgroundColor: "white",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 16,
  },
  logo: {
    flex: 1,
    height: 300,
    width: 600,
    alignSelf: "center",
    margin: 30,
  },
  headerView: {
    flex: 1,
    flexDirection: "row",
  },
  headerLink: {
    marginRight: 20,
    padding: 8,
    borderRadius: 8,
    backgroundColor: "#FDE12D",
  },
});

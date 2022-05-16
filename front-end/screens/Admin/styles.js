import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#008DD5",
  },
  center: {
    alignContent: "center",
    alignItems: "center",
    //justifyContent: "center",

    marginTop: 80,
  },
  flatlist: {
    marginVertical: 10,
  },
  flatlistContainer: {
    flexDirection: "column",
    backgroundColor: "#eaeaea",
    height: 80,
    width: 300,
    margin: 10,
  },
  editButton: {
    backgroundColor: "red",
  },
  blogContainer: {
    flexDirection: "column",
  },
  blogTitle: {
    fontSize: 20,
    color: "black",
  },
  blogText: {
    fontSize: 16,
    color: "black",
  },
});

export default styles;

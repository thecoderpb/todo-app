import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff59d",
  },

  TitleContainer: {
    flexDirection: "row",
    marginBottom: 20,
    marginTop: 50,
  },

  heading: {
    paddingStart: 10,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "left",
    color: "#f57f17",
  },
  TaskDelete: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'red',
    borderRadius: 10,
    paddingVertical: 8,
  },
  switch: {
    flex: 1,
    alignItems: "flex-end",
    marginBottom: 10,
  },
  inputContainer: {
    backgroundColor: "#fff9c4",
    flexDirection: "row",
    marginBottom: 20,
    marginRight: 10,
  },

  input: {
    flex: 1,
    borderBottomWidth: 1,
    padding: 8,
    borderColor: "#fbc02d",
  },

  taskStatus: {
    fontSize: 12,
    color: "grey",
    marginBottom: 5,
  },

  addButton: {
    padding: 10,
    backgroundColor: "black",
    borderColor: "#fbc02d",
    borderWidth: 2,
    marginLeft: 10,
    borderRadius: 5,
  },

  Subheading: {
    fontSize: 18,
    color: "black",
    marginBottom: 10,
  },

  disabledButton: {
    opacity: 0.3,
  },

  addButtonText: {
    color: "#fff59d",
    fontWeight: "bold",
  },

  taskItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
    margin: 5,
    borderWidth: 1,
    borderColor: "#fbc02d",
  },

  taskText: {
    fontSize: 16,
    color: "#f57f17",
  },

  completedTask: {
    color: "green",
  },

  deleteText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default styles;

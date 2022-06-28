import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#008DD5",
    //backgroundColor: "#f5fcfe",

  },
  adminBg: {
    width: 500,
    height: 850,
    position: "absolute",
    flex: 1,
    resizeMode: "stretch",
    // bottom: 100,
    // top: -50,
  },
  latestContainer: {
    marginLeft: 20,
  },

  flatlistContainer: {
    flexDirection: "column",
    backgroundColor: "rgba(75,88,81,0.7)",
    // height: 100,
    width: 350,
    margin: 10,    
      // backgroundColor: 'white',
      borderRadius: 10,
    
      // paddingVertical: 45,
      paddingHorizontal: 15,
      // maxWidth: '100%',
      // maxHeight: "100%",
      paddingBottom: 10,
     
  },

  center: {
    alignContent: "center",
    alignItems: "center",
    //justifyContent: "center",
    marginTop: 80,
  },
  latestHeader: {
    fontSize: 32,
    fontWeight: "bold",
    //color: "#452e4f",
    color: "#f5fcfe",
  },
  flatlist: {
    alignSelf: "center",
    marginVertical: 10,
  },

  editButton: {
    alignSelf: "flex-end",
    marginRight: 20,
  },

  blogTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#f5fcfe",
  },
  blogText: {
    fontSize: 18,
    color: "#f5fcfe",
    width: 340,
    paddingBottom: 10,
    
  },
  view3: {
    // width: 300,
    // height: 35,

  },
  view2: {
    // width: 300,
    // height: 60,
    paddingBottom: 10,

  },
  blogInfo: {
    flexDirection: "row",
    alignItems: "center",
    color: "white",
    marginBottom: 10,
  },
  blogAuthor: {
    fontSize: 14,
    marginLeft: 20,
    marginTop: 5,
    color: "white",
  },
  blogDot: {
    fontSize: 32,
    color: "white",
    marginLeft: 10,
    marginTop: 5,
  },
  blogDate: {
    fontSize: 14,
    color: "white",
    marginLeft: 5,
    marginTop: 6,
  },
  
  /** Modal Button */
  buttonContainer: {
    //flex: 1,
    height: "11%",
    paddingVertical: 0,
    //backgroundColor: "black",
  },
  modalButton: {
    alignSelf: "flex-end",
    marginTop: 15,
    height: 80,
    marginRight: 25,

  },
  /*---- Modal Starts Here ----*/
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default styles;


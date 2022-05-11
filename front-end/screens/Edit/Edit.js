import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  Pressable,
  Platform,
  FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "./styles";

const Edit = (props) => {
  const { item } = props.route.params;
  const [subject, setSubject] = useState(item.subject);
  const [text, setText] = useState(item.text);
  const id = item._id;

  let UrlString = "localhost";

  if (Platform.OS == "android") {
    UrlString = "10.0.2.2";
  }

  const updatePost = async () => {
    await axios
      .put(`http://${UrlString}:5054/blog/update`, {
        _id: id,
        subject: subject,
        text: text,
      })
      .then(function (res) {
        console.log("This is res data ===>", res.data);
      })
      .then(() => {
        console.log("Blog post updated");
        //props.navigation.navigate("Profile");
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  const handleTaskEdit = (index, obj) => {
    if (subject && text === "") {
      Alert.alert("Please enter your Title and body text!");
    } else {
      const todosCopy = [...props.todo];
      todosCopy[index] = taskEdit;
      props.setBlogData(todosCopy);
      props.navigation.navigate("Profile");
    }
  };

  /**
   * const editPost = (index, obj) => {
  const blogsCopyArr = [...blogs];
  const blogToEdit = blogsCopyArr[index];

  blogsCopyArr[index] = obj;
  blogs = blogsCopyArr;
};
   */

  //console.log(props.blogData[1]);
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity>
          <Text>Subject</Text>
          <TextInput
            placeholder="type your title here"
            value={subject}
            onChangeText={setSubject}
          />
          <Text>Body</Text>
          <TextInput
            placeholder="type your message here"
            value={text}
            onChangeText={setText}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => updatePost(props.blogData.indexOf(item))}
        >
          <Text>Publish</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Edit;
import { Pressable, StyleSheet, TextInput, Image } from "react-native";
import { Text, View } from "../../components/Themed";
import { useNavigation, useRouter } from "expo-router";
import { useLayoutEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";

export default function NewPostScreen() {
  const [content, setContent] = useState("");
  const [image, setImage] = useState<string | null>(null);


  const navigation = useNavigation();
  const router = useRouter();

  const onPost = () => {
    console.warn(`Posting: ${content}`);

    router.push("/(tabs)/");
    setContent("");
    setImage(null);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable onPress={onPost} style={styles.postButton}>
          <Text style={styles.postText}>Submit</Text>
        </Pressable>
      ),
    });
  }, [onPost]);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.5,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.textBox}>
        <TextInput
          value={content}
          onChangeText={setContent}
          placeholder="What do you want to talk about ...?"
          style={styles.input}
          multiline
        />
      </View>

      {image && <Image source={{ uri: image }} style={styles.image} />}

      <View style={styles.footer}>
        <Pressable onPress={pickImage} style={styles.iconButton}>
          <FontAwesome name="image" size={24} color="black" />
        </Pressable>

        <Pressable onPress={pickImage} style={styles.iconButton}>
          <Entypo name="folder-video" size={24} color="black" />
        </Pressable>
        <Pressable onPress={pickImage} style={styles.iconButton}>
          <Octicons name="repo-template" size={24} color="black" />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  textBox: {
    borderWidth: 1,
    paddingTop: 10,
    paddingBottom: 50,
    borderRadius: 20,
    borderColor: "lightgray",
  },
  postButton: {
    backgroundColor: "royalblue",
    padding: 5,
    borderRadius: 50,
    paddingHorizontal: 15,
    marginRight: 10,
  },
  postText: {
    fontWeight: "bold",
    color: "white",
  },
  input: {
    fontSize: 18,
    marginLeft: 10,
    paddingTop: 5,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    marginTop: "auto",
  },
  footer: {
    marginTop: "auto",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  iconButton: {
    backgroundColor: "gainsboro",
    padding: 15,
    // width: 50,
    // height: 50,
    borderRadius: 25,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
});

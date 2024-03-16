import { useLocalSearchParams } from "expo-router";
import {
  Text,
  View,
  Image,
  StyleSheet,
  Pressable,
  ScrollView,
} from "react-native";
import userJson from "../../../assets/data/user.json";
import { useLayoutEffect, useState } from "react";
import { User } from "../../types";
import { useNavigation } from "@react-navigation/native";
import ExperienceListItem from "../../components/ExperienceListItem";

export default function UserProfile() {
  const [user, setUser] = useState(userJson);
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();

  const onConnect = () => {
    console.warn("clicked");
  };
  const onMessage = () => {
    console.warn("message");
  };

  useLayoutEffect(() => {
    navigation.setOptions({ title: user.name });
  }, [user?.name]);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        {/* BG Image */}
        <Image source={{ uri: user.backImage }} style={styles.backImage} />
        <View style={styles.headerContent}>
          {/* Profile Img */}
          <Image source={{ uri: user.image }} style={styles.image} />

          {/* Name & Position */}
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.position}>{user.position}</Text>

          {/* Connect Button */}
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <Pressable onPress={onConnect} style={styles.button}>
              <Text style={styles.buttonText}>Connect</Text>
            </Pressable>
            <Pressable onPress={onMessage} style={styles.messageButton}>
              <Text style={styles.messageText}>Message</Text>
            </Pressable>
          </View>
        </View>
        {/* About */}
        <View style={styles.aboutSection}>
          <Text style={styles.aboutText}>About</Text>
          <Text style={styles.aboutInfo}>{user.about}</Text>
        </View>
        {/* Exp */}
        <View style={styles.aboutExperience}>
          <Text style={styles.aboutExperienceText}>Experience</Text>
          {user.experience?.map((experience) => (
            <ExperienceListItem key={experience.id} experience={experience} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
  header: {
    backgroundColor: "white",
  },
  backImage: {
    width: "100%",
    aspectRatio: 5 / 2,
    marginBottom: -60,
  },
  headerContent: {
    padding: 10,
    paddingTop: 0,
    borderBottomWidth: 5,
    borderBottomColor: "lightgray",
  },
  image: {
    width: 100,
    aspectRatio: 1,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: "white",
    marginLeft: 10,
  },
  userName: {
    fontSize: 24,
    fontWeight: "500",
  },
  position: {},
  button: {
    backgroundColor: "royalblue",
    padding: 10,
    alignItems: "center",
    borderRadius: 50,
    marginVertical: 10,
    paddingLeft: 60,
    paddingRight: 60,
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
  },
  messageButton: {
    backgroundColor: "lightgray",
    padding: 10,
    alignItems: "center",
    borderRadius: 50,
    marginVertical: 10,
    paddingLeft: 60,
    paddingRight: 60,
  },
  messageText: {
    color: "black",
    fontWeight: "600",
  },
  aboutSection: {
    backgroundColor: "white",
    padding: 10,
    marginVertical: 10,
  },
  aboutText: {
    fontSize: 18,
    fontWeight: "600",
  },
  aboutInfo: {
    fontSize: 14,
    marginVertical: 5,
    lineHeight: 19,
  },
  aboutExperience: {
    borderTopWidth: 5,
    borderTopColor: "lightgray",
    paddingTop: 15,
    paddingLeft: 10,
  },
  aboutExperienceText: {
    paddingBottom: 10,
    fontSize: 18,
    fontWeight: "600",
  },
});

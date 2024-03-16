import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { User } from "../types";

import { Link } from "expo-router";

type UserListItemProps = {
    user: User;
}

export default function UserListItem({user} : UserListItemProps) {
  return (
    <Link href={`/users/${user.id}`} asChild>
      <Pressable style={styles.header}>
        <Image source={{ uri: user.image }} style={styles.userImage} />
        <View>
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.position}>{user.position}</Text>
        </View>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  position: {
    fontSize: 12,
    color: "gray",
  },
});

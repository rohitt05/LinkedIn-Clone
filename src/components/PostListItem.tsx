import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { Post } from "../types";
import { FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";

type PostListItemProps = {
  post: Post;
};

type FooterButtonProp = {
  text: string;
  icon: React.ComponentProps<typeof FontAwesome>["name"];
};

const FooterButton = ({ text, icon }: FooterButtonProp) => (
  <View style={styles.footerButton}>
    <FontAwesome name={icon} size={16} color="gray" />
    <Text style={styles.footerButtonText}>{text}</Text>
  </View>
);

const PostListItem = ({ post }: PostListItemProps) => {
  return (
    <Link href={`/posts/${post.id}`} asChild>
      <Pressable style={styles.container}>
        <View style={styles.contentContainer}>
          {/* Header */}
          <Link href={`/users/${post.profile.id}`} asChild>
            <Pressable style={styles.header}>
              <Image
                source={{ uri: post.profile.image }}
                style={styles.userImage}
              />
              <View>
                <Text style={styles.userName}>{post.profile.name}</Text>
                <Text style={styles.position}>{post.profile.position}</Text>
              </View>
            </Pressable>
          </Link>
          <Text style={styles.content}>{post.content}</Text>
          {post.image && (
            <Image source={{ uri: post.image }} style={styles.postImage} />
          )}

          <View style={styles.footer}>
            <FooterButton text="Like" icon="thumbs-o-up" />
            <FooterButton text="Comment" icon="comment-o" />
            <FooterButton text="Share" icon="share" />
          </View>
        </View>
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    alignSelf: "center",
    borderRadius: 10,
    elevation: 3,
    marginBottom: 5,
    maxWidth: 500,
  },
  contentContainer: {
    padding: 5,
  },

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
  content: {
    marginBottom: 10,
  },
  postImage: {
    width: "100%",
    aspectRatio: 1,
    marginBottom: 10,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 0.5,
    borderColor: "lightgray",
    padding: 12,
  },
  footerButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  footerButtonText: {
    marginLeft: 5,
    color: "gray",
    fontWeight: "600",
  },
});

export default PostListItem;

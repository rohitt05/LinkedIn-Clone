import { ActivityIndicator, FlatList, Text } from "react-native";
// import posts from '../../../assets/data/posts.json';
import PostListItem from "../../components/PostListItem";
import { gql, useQuery } from "@apollo/client";

const postList = gql`
  query PostListQuery {
    postList {
      id
      content
      image
      profile {
        id
        name
        position
        image
      }
    }
  }
`;

export default function HomeFeed() {
  const { loading, error, data } = useQuery(postList);

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error) {
    console.log(error);
    return <Text>Something went wrong</Text>;
  }
  return (
    <FlatList
      data={data.postList}
      renderItem={({ item }) => <PostListItem post={item} />}
      contentContainerStyle={{ gap: 5 }}
      showsVerticalScrollIndicator={false}
    />
  );
}

import posts from "../post"
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Button } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export default function HomeScreen() {
  const [post, setPost] = useState(posts)
  const navigation = useNavigation();

  function handleDetails(id) {
    navigation.navigate("PostDetails", { id: id })
  }

  function addPosts() {
    const newPost = {
      id: 4,
      title: "Nuevo posts para el blog",
      content: "Creando Nuevo Post para mi blog de los JW",
      category: "learning",
      createdAt: "2026-04-12"
    }
    setPost([...posts, newPost])
  }

  function handleDeletePost (id) {
    const data = posts.filter((item)=> item.id !== id)
    setPost(data)
  }

  return (
    <View >
      <FlatList
        data={post}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <View style={styles.postContainer}>
              <TouchableOpacity onPress={() => handleDetails(item.id)} onLongPress={() => handleDeletePost(item.id) }>
                <View style={styles.cardContainer}>
                  <Text>{item.title}</Text>
                  <Text>{item.content}</Text>
                </View>
              </TouchableOpacity>
            </View>
          )
        }}
      />
      <Button title="Agregar post" onPress={addPosts} />
    </View>
  )
}

const styles = StyleSheet.create({
  postContainer: {
    marginBottom: 10
  },
  cardContainer: {
    backgroundColor: "gray",
    padding: 10,
    borderRadius: 8
  }
})
//supabase
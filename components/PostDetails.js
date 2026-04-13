import { Text, StyleSheet, View } from "react-native"
import posts from "../post"
import { useEffect, useState } from "react"

export default function PostDetails({ route }) {

  const { id, } = route.params
  const [post, setPost] = useState({})
  const setContent = () => {
    const data = posts.find(p => p.id == id)
    setPost(data)
  }

  useEffect(() => {
    setContent()
  }, [post])

  return (
    <View style={styles.container}>
        <View style={styles.post}>
          <Text>{post.id}</Text>
          <Text>{post.title}</Text>
          <Text>{post.content}</Text>
          <Text>{post.category}</Text>
          <Text>{post.createAt}</Text>
        </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  post: {
    backgroundColor: "white",
    flex: 1
  }
})
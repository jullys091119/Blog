import posts from "../post"
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Modal, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import AntDesign from '@expo/vector-icons/AntDesign';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { IconPerfil, addPosts, addComment } from "../helpers/helpers";
import { Card, TextInput, Button } from "react-native-paper";
import ModalComments from "./ModalComments";
import EditModalPost from "./EditModalPost";
import FabButton from "../components/FabButton"

export default function HomeScreen() {
  const [post, setPost] = useState(posts)
  const [modalVisible, setModalVisible] = useState(false)
  const [textEdit, setTextEdit] = useState({})
  const [editInput, setEditInput] = useState("")
  const [update, setUpdate] = useState(false)
  const [comment, setComment] = useState(false)
  const [text, setText] = useState("")
  const [selectedPostId, setSelectedPostId] = useState(null)

  const navigation = useNavigation();

  function handleDetails(id) {
    if (id !== "undefined") {
      navigation.navigate("PostDetails", { id: id, posts: post })
    }
  }

  function editPost(id) {
    const postSelected = post.find(item => item.id === id);
    if (postSelected) {
      setModalVisible(true)
      setTextEdit({ id: id, content: postSelected.content, title: postSelected.title, category: postSelected.category })
    }
  }

  function handleAddPost() {
    addPosts(post, setPost)
  }

  function deletePost(id) {
    const data = post.filter((item) => item.id !== id)
    setPost(data)
  }
  
  function saveEditPost(id) {
    const updated = post.map((item) => {
      return item.id === id ? { ...item, title: editInput } : item
    })
    setPost(updated)
    setModalVisible(false)
  }

  function addLike(id) {
    const arrPost = post.map((p) => {
      if (p.id !== id) return p

      const isLiked = p.liked

      return {
        ...p,
        liked: !isLiked,
        likes: isLiked ? p.likes - 1 : p.likes + 1
      }
    })

    setPost(arrPost)
  }

  useEffect(() => {
    setEditInput(textEdit.title)
  }, [update, textEdit])

  return (
    <View style={{ flex: 1 }}>
      {
        comment && (
          <ModalComments
            post={post}
            text={text}
            selectedPostId={selectedPostId}
            setText={setText}
            addComment={addComment}
            setComment={setComment}
            setPost={setPost}
            IconPerfil={IconPerfil}
          />
        )
      }
      {
        <EditModalPost
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          editInput={editInput}
          setEditInput={setEditInput}
          saveEditPost={saveEditPost}
          textEdit={textEdit}
        />
      }
      <FlatList
        data={post}
        style={{ padding: 10 }}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, i }) => {
          return (
            <Card style={styles.postContainer} mode='contained'>
              <TouchableOpacity onPress={() => handleDetails(item.id)} onLongPress={() => deletePost(item.id)}>
                <View style={styles.containerUser}>
                  <IconPerfil />
                  <Text>Julian Ontiveros</Text>
                </View>
                <View style={styles.cardContainer}>
                  <Text style={{ fontWeight: "800" }}>{item.title}</Text>
                  <View style={styles.containerIcons}>
                    <View style={styles.containerLikes}>
                      <EvilIcons name="like" size={24} color="black" onPress={() => addLike(item.id)} />
                      <Text>{item.likes}</Text>
                    </View>
                    <View style={styles.containerComments}>
                      <AntDesign name="comment" size={24} color="black" onPress={() => { setComment(true), setSelectedPostId(item.id) }} />
                      <Text>{item.comments.length}</Text>
                    </View>
                    <AntDesign name="edit" size={24} color="black" onPress={() => editPost(item.id)} />
                    <MaterialIcons name="delete-outline" size={24} color="red" onPress={() => deletePost(item.id)} />
                  </View>
                </View>
              </TouchableOpacity>
            </Card>
          )
        }}
      />
      <FabButton addPost={handleAddPost} />
      {post.length <= 0 && (<Text>No hay post</Text>)}
    </View>
  )
}

const styles = StyleSheet.create({
  postContainer: {
    marginBottom: 10,
    padding: 20,
    position: "relative"
  },
  cardContainer: {
    padding: 10,
    borderRadius: 8,
    gap: 20
  },
  containerIcons: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
    marginTop: 30
  },
  containerLikes: {
    display: "flex",
    flexDirection: "row"
  },
  containerUser: {
    display: "flex",
    flexDirection: "row",
    gap: 10
  },
  containerComments: {
    display: "flex",
    flexDirection: "row",
    gap: 5
  }

})
//supabase
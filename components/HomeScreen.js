import posts from "../post"
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Button, Modal, Alert, TextInput } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import AntDesign from '@expo/vector-icons/AntDesign';
import EvilIcons from '@expo/vector-icons/EvilIcons';


export default function HomeScreen() {

  const [post, setPost] = useState(posts)
  const [modalVisible, setModalVisible] = useState(false)
  const [textEdit, setTextEdit] = useState({})
  const [editInput, setEditInput] = useState("")

  const navigation = useNavigation();

  function handleDetails(id) {
    console.log(typeof id, "enviando id de detalles")
    if (id !== "undefined") {
      navigation.navigate("PostDetails", { id: id, posts: post })
    }
  }

  function addPosts() {
    let newId;

    if (post.length === 0) {
      newId = 1;
    } else {
      const lastIndex = post.length - 1;
      newId = post[lastIndex].id + 1;
    }

    const newPost = {
      id: newId,
      title: "Nuevo posts para el blog",
      content: "Creando Nuevo Post para mi blog de los JW",
      category: "learning",
      createdAt: "2026-04-12"
    };

    setPost([...post, newPost]);
  }
  function handleDeletePost(id) {
    const data = post.filter((item) => item.id !== id)
    console.log(data)
    if (data) {
      setPost(data)
    }
  }


  function editPost(id) {
    const postSelected = post.find(item => item.id === id);
    if (postSelected) {
      setModalVisible(true)
      setTextEdit({ id: id, content: postSelected.content, title: postSelected.title, category: postSelected.category })
    }
  }

  function saveEditPost(id) {
    const updated = post.map((item)=> {
     return item.id === id ? {...item, title: editInput} : item
    })
    setPost(updated)
  }

  return (
    <View >
      {
        modalVisible && (
          <Modal
            animationType="slide"
            transparent={false}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}>
            <TextInput value={editInput} editable={true} onChangeText={(txt)=>setEditInput(txt)} placeholder={textEdit.title}/>
            <Button title="Guardar" onPress={()=>saveEditPost(textEdit.id)}/>
          </Modal>
        )
      }
      <FlatList
        data={post}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <View style={styles.postContainer}>
              <TouchableOpacity onPress={() => handleDetails(item.id)} onLongPress={() => handleDeletePost(item.id)}>
                <View style={styles.cardContainer}>
                  <Text>{item.title}</Text>
                  <Text>{item.content}</Text>
                  <AntDesign name="edit" size={24} color="black" onPress={() => editPost(item.id)} />
                  <EvilIcons name="like" size={24} color="black" />
                </View>
              </TouchableOpacity>
            </View>
          )
        }}
      />
      <Button title="Agregar post" onPress={addPosts} />
      {post.length <= 0 && (<Text>No hay post</Text>)}

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
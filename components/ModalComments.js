import { View, Text, StyleSheet, FlatList,Modal, KeyboardAvoidingView, Platform } from 'react-native';
import { TextInput,Button } from 'react-native-paper';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import CardComments from './CardComments';


function ModalComments({post,text,selectedPostId,setText,addComment,setComment,setPost, IconPerfil}) {
  
  return (
    <Modal style={{ flex: 1, }}>
      <View style={{ display: "flex", alignItems: "flex-end", padding: 10 }}>
        <EvilIcons name="close" size={35} color="black" onPress={() => setComment(false)} />
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
        keyboardVerticalOffset={45}
      >
        <View style={styles.contentComments}>
          <Text style={{ fontWeight: "900", fontSize: 19, }}>Comentarios</Text>
          {
            <FlatList
              data={post}
              keyExtractor={(item) => item.id.toString()}ss
              renderItem={({ item }) => {
                return (
                  item.id === selectedPostId &&
                  item?.comments?.map(i => {
                    console.log(i)
                    return (
                      <CardComments user={i.user} content={i.content} date={item.createdAt} icon={IconPerfil} key={i.id} />
                    )
                  })
                )
              }}
            />
          }

        </View>
        <View style={styles.inpuntComments}>
          <TextInput value={text} placeholder="post"  onChangeText={(txt) => setText(txt)} mode="outlined" />
          <Button title="Enviar" onPress={() => { addComment(text, setPost, selectedPostId, setText) }} mode="contained" >Comentar</Button>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  )
}

const styles  = StyleSheet.create({
    contentComments: {
    flex: 1,
    padding: 10
  },
   inpuntComments: {
   paddingHorizontal: 10,
   display: "flex",
   gap: 20
  },
})

export default ModalComments
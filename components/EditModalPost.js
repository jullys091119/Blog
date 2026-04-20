
import {Modal} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
function EditModalPost({modalVisible,setModalVisible,editInput,setEditInput,saveEditPost, textEdit}) {
  return (
      modalVisible && (
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <TextInput value={editInput} editable={true} onChangeText={(txt) => setEditInput(txt)} placeholder={editInput} />
        <Button title="Guardar" onPress={() => saveEditPost(textEdit.id)} mode="elevated" />
      </Modal>
    )
      
 )
}

export default EditModalPost
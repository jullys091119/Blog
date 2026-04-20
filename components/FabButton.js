import * as React from 'react';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';

const FabButton = ({addPost}) => (
  <FAB
    icon="plus"
    style={styles.fab}
    onPress={() => addPost()}
  />
);

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    margin: 30
  },
})


export default FabButton;
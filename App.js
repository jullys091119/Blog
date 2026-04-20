import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { RootStack } from './stacks';
import { PaperProvider } from 'react-native-paper';



export default function App() {
  return (
    <View style={styles.container}>
      <PaperProvider>
        <NavigationContainer>
          <RootStack/>
        </NavigationContainer>
      </PaperProvider>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

import { StyleSheet, Text, View, LogBox } from 'react-native';
import { Menu } from './components';


export default function App() {
  LogBox.ignoreAllLogs();
  return (
    <Menu />
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

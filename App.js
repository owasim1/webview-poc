import { StyleSheet, View } from 'react-native';
import {WebView} from "react-native-webview";

export default function App() {
  const webapp = "https://stage-sf-webapp.vercel.app/"
  return (
    <View style={styles.container}>
      <View style={{width:'100%', height:'100%'}} >
        <WebView source={{uri: webapp}} onLoad={console.log('loaded')}></WebView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 32,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import tw from 'twrnc';


export default function App() {
    return (
      <View style={tw`bg-black text-white`}>
        <Text>Hello arsh!</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
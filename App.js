import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import tw from 'twrnc';

export default function App() {
  return (
    <View style={tw`flex-1 items-center justify-center`}>
      <Text>Have fun with this template</Text>
      <StatusBar style="auto" />
    </View>
  );
}


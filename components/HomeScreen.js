import * as React from 'react';
import { Button, View, Text } from "native-base";


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button onPress={() => navigation.navigate('Signup')}>Go Sign up</Button>
    </View>
  );
}
export default HomeScreen;
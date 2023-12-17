import React, {useState} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 25,
      }}>
      <Text style={{fontSize: 40, textAlign: 'center'}}>
        This is my first react-native application
      </Text>

      <Button title={`Click Me ${count}`} onPress={() => setCount(count + 1)} />
    </View>
  );
};

export default App;

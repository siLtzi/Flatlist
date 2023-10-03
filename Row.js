import React from 'react';
import { Text, View } from 'react-native';

const Row = ({ person }) => (
  <View style={{ padding: 10 }}>
    <Text>{person.firstName} {person.lastName}</Text>
  </View>
);

export default Row;
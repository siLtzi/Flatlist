import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { DATA } from './Data';
import Row from './Row';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Row person={item} />}
      />
    </SafeAreaView>
  );
};

export default App;
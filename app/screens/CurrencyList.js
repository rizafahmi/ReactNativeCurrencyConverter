import React from 'react'
import { View, FlatList, Text, StatusBar } from 'react-native'

import currencies from '../data/currencies'

export default props => (
  <View style={{ flex: 1 }}>
    <StatusBar barStyle='default' translucent />
    <FlatList
      data={currencies}
      keyExtractor={item => item}
      renderItem={({ item }) => <Text>{item}</Text>}
    />
  </View>
)

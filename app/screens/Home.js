import React from 'react'
import { StatusBar, Text } from 'react-native'

import { Container } from '../components/Container'

export default () => (
  <Container>
    <StatusBar translucent barStyle='light-content' />
    <Text>Home.js</Text>
  </Container>
)

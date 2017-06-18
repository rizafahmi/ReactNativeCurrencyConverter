import React from 'react'
import { StatusBar } from 'react-native'

import { Container } from '../components/Container'
import { Logo } from '../components/Logo'
import { InputWithButton } from '../components/TextInput'

const TEMP_BASE_CURRENCY = 'USD'
const TEMP_QUOTE_CURRENCY = 'GBP'
const TEMP_BASE_PRICE_CURRENCY = 100
const TEMP_QUOTE_PRICE_CURRENCY = 450

class Home extends React.Component {
  handlePressBaseCurrency () {
    console.log('press base')
  }
  handlePressQuoteCurrency () {
    console.log('press quote')
  }
  render () {
    return (
      <Container>
        <StatusBar translucent barStyle='light-content' />
        <Logo />
        <InputWithButton
          buttonText={TEMP_BASE_CURRENCY}
          onPress={() => this.handlePressBaseCurrency()}
        />
        <InputWithButton
          buttonText={TEMP_QUOTE_CURRENCY}
          onPress={() => this.handlePressQuoteCurrency()}
          editable={false}
        />
      </Container>
    )
  }
}

export default Home

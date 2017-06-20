import React from 'react'
import { StatusBar } from 'react-native'

import { Container } from '../components/Container'
import { Logo } from '../components/Logo'
import { InputWithButton } from '../components/TextInput'
import { ClearButton } from '../components/Buttons'

const TEMP_BASE_CURRENCY = 'USD'
const TEMP_QUOTE_CURRENCY = 'GBP'
const TEMP_BASE_PRICE = '100'
const TEMP_QUOTE_PRICE = '450'

class Home extends React.Component {
  handlePressBaseCurrency () {
    console.log('press base')
  }
  handlePressQuoteCurrency () {
    console.log('press quote')
  }
  handleTextChange (text) {
    console.log('change text: ', text)
  }
  handleSwap () {
    console.log('Swap')
  }
  render () {
    return (
      <Container>
        <StatusBar translucent barStyle='light-content' />
        <Logo />
        <InputWithButton
          buttonText={TEMP_BASE_CURRENCY}
          onPress={() => this.handlePressBaseCurrency()}
          defaultValue={TEMP_BASE_PRICE}
          keyboardType='numeric'
          onChangeText={text => this.handleTextChange(text)}
        />
        <InputWithButton
          buttonText={TEMP_QUOTE_CURRENCY}
          onPress={() => this.handlePressQuoteCurrency()}
          editable={false}
          defaultValue={TEMP_QUOTE_PRICE}
          keyboardType='numeric'
        />
        <ClearButton
          text='Reverse Currencies'
          onPress={() => this.handleSwap()}
        />
      </Container>
    )
  }
}

export default Home

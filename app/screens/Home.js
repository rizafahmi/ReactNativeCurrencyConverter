import React from 'react'
import { StatusBar, KeyboardAvoidingView } from 'react-native'

import { Container } from '../components/Container'
import { Logo } from '../components/Logo'
import { InputWithButton } from '../components/TextInput'
import { ClearButton } from '../components/Buttons'
import { LastConverted } from '../components/Text'
import { Header } from '../components/Header'

const TEMP_BASE_CURRENCY = 'USD'
const TEMP_QUOTE_CURRENCY = 'IDR'
const TEMP_BASE_PRICE = '1000'
const TEMP_QUOTE_PRICE = '13299000'
const TEMP_CONVERSION_RATE = 13299
const TEMP_CONVERSION_DATE = new Date()

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
  handleOptionPress () {
    console.log('Option press')
  }
  render () {
    return (
      <Container>
        <StatusBar translucent barStyle='light-content' />
        <KeyboardAvoidingView behavior='padding'>
          <Header onPress={this.handleOptionPress} />
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
          <LastConverted
            base={TEMP_BASE_CURRENCY}
            quote={TEMP_QUOTE_CURRENCY}
            date={TEMP_CONVERSION_DATE}
            conversionRate={TEMP_CONVERSION_RATE}
          />
          <ClearButton
            text='Reverse Currencies'
            onPress={() => this.handleSwap()}
          />
        </KeyboardAvoidingView>
      </Container>
    )
  }
}

export default Home

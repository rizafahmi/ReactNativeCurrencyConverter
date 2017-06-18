import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableHighlight, TextInput } from 'react-native'

import styles from './styles'

const InputWithButton = ({ onPress, buttonText, editable = true }) => {
  const containerStyles = [styles.container]
  if (editable === false) {
    containerStyles.push(styles.containerDisabled)
  }
  return (
    <View style={containerStyles}>
      <TouchableHighlight style={styles.buttonContainer} onPress={onPress}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableHighlight>
      <View style={styles.border} />
      <TextInput style={styles.input} />
    </View>
  )
}
InputWithButton.propTypes = {
  onPress: PropTypes.func,
  buttonText: PropTypes.string,
  editable: PropTypes.bool
}

export default InputWithButton

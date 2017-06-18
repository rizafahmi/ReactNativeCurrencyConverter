import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableHighlight, TextInput } from 'react-native'
import color from 'color'

import styles from './styles'

const InputWithButton = (
  {
    onPress,
    buttonText,
    editable = true,
    keyboardType,
    defaultValue,
    onChangeText
  }
) => {
  const containerStyles = [styles.container]
  if (editable === false) {
    containerStyles.push(styles.containerDisabled)
  }

  const underlayColor = color(styles.$buttonBackgroundColorBase).darken(
    styles.$buttonBackgroundColorModifier
  )
  return (
    <View style={containerStyles}>
      <TouchableHighlight
        underlayColor={underlayColor}
        style={styles.buttonContainer}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableHighlight>
      <View style={styles.border} />
      <TextInput
        defaultValue={defaultValue}
        keyboardType={keyboardType}
        style={styles.input}
        onChangeText={onChangeText}
      />
    </View>
  )
}
InputWithButton.propTypes = {
  onPress: PropTypes.func,
  buttonText: PropTypes.string,
  editable: PropTypes.bool
}

export default InputWithButton

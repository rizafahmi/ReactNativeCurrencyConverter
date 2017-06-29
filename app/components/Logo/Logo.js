import React from 'react'
import { View, Text, Image, Keyboard, Animated } from 'react-native'

import styles from './styles'

const ANIMATION_DURATION = 250

class Logo extends React.Component {
  constructor (props) {
    super(props)

    console.log('a', styles.$largeContainerSize)
    this.state = {
      containerImageWidth: new Animated.Value(styles.$largeContainerSize),
      imageWidth: new Animated.Value(styles.$largeImageSize)
    }
  }
  componentWillMount () {
    this.keyboardShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this.keyboardShow.bind(this)
    )
    this.keyboardHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this.keyboardHide.bind(this)
    )
  }
  componentWillUnmount () {
    this.keyboardShowListener.remove()
    this.keyboardHideListener.remove()
  }
  keyboardShow () {
    Animated.parallel([
      Animated.timing(this.state.containerImageWidth, {
        toValue: styles.$smallContainerSize,
        duration: ANIMATION_DURATION
      }),
      Animated.timing(this.state.imageWidth, {
        toValue: styles.$smallImageSize,
        duration: ANIMATION_DURATION
      })
    ])
      .start()
  }
  keyboardHide () {
    Animated.parallel([
      Animated.timing(this.state.containerImageWidth, {
        toValue: styles.$largeContainerSize,
        duration: ANIMATION_DURATION
      }),
      Animated.timing(this.state.imageWidth, {
        toValue: styles.$largeImageSize,
        duration: ANIMATION_DURATION
      })
    ])
      .start()
  }
  render () {
    const containerImageStyle = [
      styles.containerImage,
      {
        width: this.state.containerImageWidth,
        height: this.state.containerImageWidth
      }
    ]

    const imageStyle = [styles.image, { width: this.state.imageWidth }]
    return (
      <View style={styles.container}>
        <Animated.Image
          style={containerImageStyle}
          source={require('./images/background.png')}
        >
          <Animated.Image
            resizeMode='contain'
            style={imageStyle}
            source={require('./images/logo.png')}
          />
        </Animated.Image>
        <Text style={styles.text}>Currency Converter</Text>
      </View>
    )
  }
}

export default Logo

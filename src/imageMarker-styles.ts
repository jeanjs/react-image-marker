import { StyleProp, TextStyle, ViewStyle } from "react-native"

export const imageMarkerContainer: StyleProp<ViewStyle> = {
  position: 'relative',
  margin: '0 auto',
}

export const imageMarkerSrc = {
  margin: '0 auto',
  width: '100%',
}

export const imageMarkerInnerContainer: StyleProp<ViewStyle> = {
  position: 'absolute',
} 

export const imageMarkerDefault: StyleProp<ViewStyle> = {
  width: '25px',
  height: '25px',
  backgroundColor: 'brown',
  borderRadius: 4,
}

export const imageMarkerText: StyleProp<TextStyle> = {
  color: 'white',
  textAlign: 'center',
}

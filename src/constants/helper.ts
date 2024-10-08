import { PixelRatio } from "react-native"

/***  Screen and design sizes ***/
const DESIGN_WIDTH = 375
const DESIGN_HEIGHT = 812

export const getScreenSize = () => {
  const { Dimensions } = require("react-native")
  return { width: Dimensions.get('window').width, height: Dimensions.get('window').height }
}

export const getWidth = (value: number) => {
  return PixelRatio.roundToNearestPixel(value * (getScreenSize().width / DESIGN_WIDTH))
}

export const getHeight = (value: number) => {
  return PixelRatio.roundToNearestPixel(value * (getScreenSize().height / DESIGN_HEIGHT))
}

export const getMargin = (value: number, isHorizontal: boolean = false) => {
  return isHorizontal ? getWidth(value) : getHeight(value)
}
/***  Screen and design sizes ***/
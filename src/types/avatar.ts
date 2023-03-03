type IColor = {
  primaryColor?: string
  secondaryColor?: string
  backgroundColor?: string
}

type ISingleEye = {
  scale: number
  x: number
  y: number
}

type IEyes = {
  rightEye: ISingleEye
  leftEye: ISingleEye
}

type IRadius = number

type IEffect = {
  blur: number
}

type IAvatar = {
  color?: IColor
  eyes?: IEyes
  radius?: IRadius
  effect?: IEffect
}

export { type IAvatar, type IColor, type IEffect }

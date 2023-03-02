type IColor = {
  primaryColor?: string
  secondaryColor?: string
  backgroundColor: string
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

type Radius = number

type IAvatar = {
  color?: IColor
  eyes?: IEyes
  radius?: Radius
}

export { type IAvatar }

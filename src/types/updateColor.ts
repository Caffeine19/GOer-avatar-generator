import type { IColor } from './avatar'

interface IUpdateColor {
  (key: keyof IColor, value: string): void
}

export { type IUpdateColor }

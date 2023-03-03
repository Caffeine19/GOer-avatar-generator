import type { IEffect } from './avatar'

interface IUpdateEffect {
  (key: keyof IEffect, value: number): void
}
export type { IUpdateEffect }

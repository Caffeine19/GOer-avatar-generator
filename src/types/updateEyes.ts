import type { IEyes } from './avatar'

interface IUpdateEyes {
  (
    whichOne: keyof IEyes,
    key: keyof IEyes['leftEye'] | keyof IEyes['rightEye'],
    value: number
  ): void
}
export type { IUpdateEyes }

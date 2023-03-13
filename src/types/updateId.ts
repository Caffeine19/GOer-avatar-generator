import type { IAvatar } from './avatar'

export interface IUpdateId {
  (value: IAvatar['id']): void
}

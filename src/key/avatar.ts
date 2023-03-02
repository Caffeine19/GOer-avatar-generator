import type { IAvatar } from '@/types/avatar'
import type { InjectionKey } from 'vue'

const avatarKey = Symbol('IAvatarKey') as InjectionKey<IAvatar>

export default avatarKey

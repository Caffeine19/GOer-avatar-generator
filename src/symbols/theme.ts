import type { IToggleTheme, THEME } from '@/types/theme'
import type { InjectionKey, Ref } from 'vue'

const themeKey = Symbol('theme') as InjectionKey<Ref<THEME>>

const toggleThemeKey = Symbol('toggleTheme') as InjectionKey<IToggleTheme>
export { themeKey, toggleThemeKey }

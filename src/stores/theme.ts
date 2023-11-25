import { atom } from 'recoil'
import { Theme } from 'types'

const themeState = atom<Theme>({
  key: 'themeState',
  default: 'light',
  effects: [
    ({ setSelf }) => {
      const savedTheme = localStorage.getItem('theme')
      const isDarkTheme = savedTheme === 'dark'

      if (isDarkTheme) {
        setSelf('dark')
      }
    },
    ({ onSet }) => {
      onSet((newTheme) => localStorage.setItem('theme', newTheme))
    }
  ]
})

export default themeState

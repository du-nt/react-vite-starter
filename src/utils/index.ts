import Const from 'constants/common'
import { Locale, TokenBundle } from 'types'

const Utils = class Utils {
  static storeTokens = (tokenBundle: TokenBundle) => {
    localStorage.setItem('accessToken', tokenBundle.accessToken)
    localStorage.setItem('refreshToken', tokenBundle.refreshToken)
  }

  static getTokens = () => {
    const refreshToken = localStorage.getItem('refreshToken')
    const accessToken = localStorage.getItem('accessToken')

    return { refreshToken, accessToken }
  }

  static clearTokens = () => {
    localStorage.removeItem('refreshToken')
    localStorage.removeItem('accessToken')
  }

  static getToastErrorKeys(locale: string) {
    return Object.keys(
      Const.TRANSLATIONS_OBJ[locale as Locale].translation.common.toastError
    )
  }

  static getValidationErrorKeys(locale: string) {
    return Object.keys(
      Const.TRANSLATIONS_OBJ[locale as Locale].translation.common
        .validationError
    )
  }

  static getValidationError = (errorCode: string | number, locale: string) => {
    const validationErrorKey = this.getValidationErrorKeys(locale).find(
      (key) => key.split('-')[0] === `${errorCode}`
    )

    if (!validationErrorKey) return {}

    const mixedFieldName = validationErrorKey.split('-')[1]

    if (!mixedFieldName) return {}

    const fieldNames = mixedFieldName.split(',')
    const translationKey = `common.validationError.${validationErrorKey}`

    return {
      fieldNames,
      translationKey
    }
  }
}

export default Utils

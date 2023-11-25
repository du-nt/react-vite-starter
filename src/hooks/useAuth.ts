import { useRef, useState } from 'react'
import { UseFormReturn } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import {
  useQuery,
  useQueryClient,
  UseQueryOptions
} from '@tanstack/react-query'
import { useSnackbar } from 'notistack'
import { CurrentUser } from 'types'
import Utils from 'utils'

import useMutation from './useMutation'

export default function useAuth(
  options?: UseQueryOptions<any> & Partial<UseFormReturn<any>>
) {
  const [isInitialLoading, setIsInitialLoading] = useState<boolean>(true)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const isMutating = useRef<boolean>(false)

  const { t } = useTranslation()
  const { enqueueSnackbar } = useSnackbar()

  const queryClient = useQueryClient()
  const { data: profile, refetch } = useQuery<CurrentUser | null>(
    ['api/v1/profile'],
    {
      enabled: false,
      ...options,
      onSuccess: () => setIsInitialLoading(false),
      onError: () => setIsInitialLoading(false)
    }
  )
  const { mutate } = useMutation(options)

  const startMutateStatus = () => {
    isMutating.current = true
    setIsLoading(true)
  }

  const stopMutateStatus = () => {
    isMutating.current = false
    setIsLoading(false)
  }

  const login = (values: any) => {
    if (!isMutating.current && !isLoading) {
      startMutateStatus()

      mutate(
        { data: values, url: 'api/v1/login' },
        {
          onSuccess: (response) => {
            Utils.storeTokens(response.data)
            refetch()
              .then(() =>
                enqueueSnackbar(t('common.loginSuccess'), {
                  variant: 'success'
                })
              )
              .finally(() => stopMutateStatus())
          },
          onError: stopMutateStatus
        }
      )
    }
  }

  const register = (values: any) => {
    if (!isMutating.current && !isLoading) {
      startMutateStatus()

      mutate(
        { data: values, url: 'v1/auth/register' },
        {
          onSuccess: (response) => {
            Utils.storeTokens(response.data)
            refetch().finally(() => stopMutateStatus())
          },
          onError: stopMutateStatus
        }
      )
    }
  }

  const logout = (callback?: () => void) => {
    if (!isMutating.current && !isLoading) {
      startMutateStatus()

      const { refreshToken } = Utils.getTokens()

      const forceLogout = () => {
        Utils.clearTokens()
        queryClient.resetQueries(['api/v1/profile']).finally(() => {
          stopMutateStatus()

          if (callback) {
            callback()
          }
        })
      }

      mutate(
        {
          data: { refreshToken },
          url: 'api/v1/logout'
        },
        {
          onSuccess: forceLogout,
          onError: forceLogout
        }
      )
    }
  }

  return {
    profile,
    isInitialLoading,
    isLoading,
    refetch,
    login,
    register,
    logout,
    mutate
  }
}

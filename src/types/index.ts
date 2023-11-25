import { PropsWithChildren } from 'react'

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true
    sm: true
    tablet: true
    md: true
    lg: true
    xl: true
  }
}

export type RouteObject = {
  path: string
  layout?: ({ children }: PropsWithChildren) => JSX.Element
  variety?: 'guardOnLogged' | 'public' | 'protect'
  children: NestedRoute[]
}

type NestedRoute = {
  name: string
  path: string
  element: JSX.Element
  index?: boolean
  layout?: ({ children }: PropsWithChildren) => JSX.Element
  role?: string[]
}

export type CurrentUser = {
  id: number
  email: string
  role?: string
}

export type TokenBundle = {
  accessToken: string
  refreshToken: string
}

export type APIParams =
  | Record<string, string | number | string[] | number[]>
  | undefined

export type Theme = 'light' | 'dark'

export type Method = 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'GET'

export type MutationFnVariables = {
  url: string
  method?: Method
  data?: Record<string, unknown>
  params?: APIParams
  headers?: any
  disableParentOnError?: boolean
  errorMessage?: string
}

export type SidebarStatus = {
  isPermanentDrawerCollapsed: boolean
  isTemporaryDrawerCollapse: boolean
}

export type Locale = 'ja' | 'en'

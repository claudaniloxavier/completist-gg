'use client'

import { ThemeProvider } from 'next-themes'

import { type ThemeProviderProps } from 'next-themes/dist/types'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

const Providers = ({ children, ...props }: ThemeProviderProps) => {
  return (
    <ThemeProvider {...props}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools
          initialIsOpen={false}
          buttonPosition="bottom-left"
        />
        {children}
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export default Providers

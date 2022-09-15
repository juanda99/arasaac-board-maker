import * as React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { IntlProvider } from 'react-intl'
import { useRouter } from 'next/router'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider, EmotionCache } from '@emotion/react'
import theme from 'src/theme'
import createEmotionCache from 'src/createEmotionCache'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
})

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

function getDirection(locale: string | undefined) {
  if (locale === 'ar') {
    return 'rtl'
  }
  return 'ltr'
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  const { locale, defaultLocale } = useRouter()
  const [mode, setMode] = React.useState<'light' | 'dark'>('light')
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        //setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
        return setMode((prevMode) => {
          console.log(prevMode, '1111')
          return prevMode === 'light' ? 'dark' : 'light'
        })
        console.log('calledddddddddd')
      },
    }),
    []
  )
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  )
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <IntlProvider
            locale={locale || 'en'}
            defaultLocale={defaultLocale}
            messages={pageProps.intlMessages}
          >
            <Component {...pageProps} dir={getDirection(locale)} />
          </IntlProvider>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </CacheProvider>
  )
}

import { useIntl } from 'react-intl'
import Head from 'next/head'
import Container from '@mui/material/Container'

import Sidebar from 'components/Sidebar'
import AppHeader from 'components/AppHeader'

interface LayoutProps {
  title?: string
  description?: string
  children: React.ReactNode
}

export default function Layout({ title, description, children }: LayoutProps) {
  const intl = useIntl()
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>
          {title ||
            intl.formatMessage({
              defaultMessage: 'React Intl Next.js Example',
              description: 'Default document title',
            })}
        </title>
        <meta
          name="description"
          content={
            description ||
            intl.formatMessage({
              defaultMessage: 'This page is powered by Next.js',
              description: 'Default document description',
            })
          }
        />
      </Head>
      <AppHeader />
      <Sidebar />

      <Container maxWidth="sm">
        <header></header>
        {children}
      </Container>
    </>
  )
}

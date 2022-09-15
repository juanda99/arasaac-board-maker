import * as React from 'react'
import type { NextPage } from 'next'
import { FormattedMessage, FormattedNumber, useIntl } from 'react-intl'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import { InferGetStaticPropsType } from 'next'

import Layout from 'components/Layout'
import Link from 'src/Link'
import ProTip from 'src/ProTip'
import Copyright from 'src/Copyright'
import loadIntlMessages from 'helper/loadIntlMessages'

export async function getStaticProps(ctx: any) {
  return {
    props: {
      intlMessages: await loadIntlMessages(ctx),
    },
  }
}

type HomePageProps = InferGetStaticPropsType<typeof getStaticProps>

const Home = (props: HomePageProps) => {
  const intl = useIntl()
  return (
    <Layout
      title={intl.formatMessage({
        defaultMessage: 'Home',
        description: 'Index Page: document title',
      })}
      description={intl.formatMessage({
        defaultMessage: 'An example app integrating React Intl with Next.js',
        description: 'Index Page: Meta Description',
      })}
    >
      <p>
        <FormattedMessage
          defaultMessage="Hello, World!"
          description="Index Page: Content"
        />
      </p>
      <Link href="/about" color="secondary">
        Go to the about page
      </Link>
      <ProTip />
      <Copyright />
    </Layout>
  )
}

export default Home

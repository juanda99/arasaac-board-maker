import * as React from 'react'
import type { NextPage } from 'next'
import { FormattedMessage, FormattedNumber, useIntl } from 'react-intl'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import loadIntlMessages from '../helper/loadIntlMessages'
import { InferGetStaticPropsType } from 'next'
import Link from '../src/Link'
import ProTip from '../src/ProTip'
import Copyright from '../src/Copyright'

export async function getStaticProps(ctx: any) {
  return {
    props: {
      intlMessages: await loadIntlMessages(ctx),
    },
  }
}

type HomePageProps = InferGetStaticPropsType<typeof getStaticProps>

const Home = (props: HomePageProps) => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          MUI v5 + Next.js with TypeScript example
        </Typography>
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
      </Box>
    </Container>
  )
}

export default Home

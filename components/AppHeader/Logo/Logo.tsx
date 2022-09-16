import { ButtonBase } from '@mui/material'
import Link from 'next/link'
import Image from 'next/image'

// import Link from 'components/Link'
import ArasaacLogo from './logo-arasaac-texto.svg'

const Logo = () => (
  <Link href="/">
    <Image src={ArasaacLogo} alt="ARASAAC logo" width="140" height="27.47" />
  </Link>
)

export default Logo

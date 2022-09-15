import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import AccountCircle from '@mui/icons-material/AccountCircle'
import { useRouter } from 'next/router'
import { useTheme } from '@mui/material/styles'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
import LanguageIcon from '@mui/icons-material/Language'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'

import { languages } from 'app-config'
import { ColorModeContext } from 'pages/_app'

export default function MenuAppBar() {
  const [auth, setAuth] = React.useState(true)
  const theme = useTheme()
  const colorMode = React.useContext(ColorModeContext)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const [anchorLang, setAnchorLang] = React.useState<null | HTMLElement>(null)
  const { locale, locales, asPath } = useRouter()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked)
  }

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleLangMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorLang(event.currentTarget)
  }

  const handleCloseLang = () => {
    setAnchorLang(null)
  }

  console.log(theme, 'theme')
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ zIndex: 1300 }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, zIndex: 0 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Photos
          </Typography>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
          <div>
            <IconButton
              size="large"
              aria-label="select language"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleLangMenu}
              color="inherit"
            >
              <LanguageIcon />
            </IconButton>
            <Menu
              id="locale-menu"
              anchorEl={anchorLang}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorLang)}
              onClose={handleCloseLang}
              variant={'menu'}
            >
              {languages.map(({ code, language }) => (
                <MenuItem key={code} onClick={handleCloseLang} selected={true}>
                  {language}
                </MenuItem>
              ))}
            </Menu>
          </div>
          <IconButton onClick={colorMode.toggleColorMode} color="inherit">
            {theme.palette.mode === 'dark' ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

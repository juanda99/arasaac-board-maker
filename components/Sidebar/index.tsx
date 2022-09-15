import React, { useState } from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import { styled } from '@mui/material/styles'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import GridOnIcon from '@mui/icons-material/GridOn'
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary'
import MuiListItemButton from '@mui/material/ListItemButton'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import TextFieldsIcon from '@mui/icons-material/TextFields'
import ListItem from '@mui/material/ListItem'
import MuiListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import SearchPictograms from 'components/SearchPictograms'
import TemplateList from 'data/TemplateList'
const drawerWidth = 75
const iconsColor = 'gray'
const iconsSelectedColor = '#fff'
const textMenuStyle = { fontSize: '0.8rem', color: iconsColor }
const textMenuSelectedStyle = { fontSize: '0.8rem', color: iconsSelectedColor }

const ListItemIcon = styled(MuiListItemIcon)({
  width: 24,
  margin: '0 auto',
  minWidth: 24,
})

const MENU = {
  TEMPLATE: 'TEMPLATE',
  IMAGES: 'IMAGES',
  TEXT: 'TEXT',
}

const paddingTop = '64px'

const ListItemButton = styled(MuiListItemButton)({
  flexDirection: 'column',
  width: drawerWidth,
})

export default function MiniDrawer() {
  const [menu, setMenu] = useState('')
  const intl = useIntl()
  return (
    <div>
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          '& .MuiDrawer-paperAnchorDockedLeft': {
            backgroundColor: 'black',
            paddingTop,
          },
        }}
      >
        <List style={{ padding: 0 }}>
          <ListItem
            onClick={() => setMenu(MENU.TEMPLATE)}
            selected={menu === MENU.TEMPLATE}
            style={{
              padding: 0,
              backgroundColor: menu === MENU.TEMPLATE ? '#424242' : 'black',
            }}
          >
            <ListItemButton>
              <ListItemIcon>
                <GridOnIcon
                  style={{
                    color:
                      menu === MENU.TEMPLATE ? iconsSelectedColor : iconsColor,
                  }}
                />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={
                  menu === MENU.TEMPLATE ? textMenuSelectedStyle : textMenuStyle
                }
                primary={intl.formatMessage({
                  defaultMessage: 'Templates',
                  description: 'Sidebar: menu item',
                })}
              />
            </ListItemButton>
          </ListItem>
          <ListItem
            onClick={() => setMenu(MENU.IMAGES)}
            selected={menu === MENU.IMAGES}
            style={{
              padding: 0,
              backgroundColor: menu === MENU.IMAGES ? '#424242' : 'black',
            }}
          >
            <ListItemButton>
              <ListItemIcon>
                <PhotoLibraryIcon
                  style={{
                    color:
                      menu === MENU.IMAGES ? iconsSelectedColor : iconsColor,
                  }}
                />
              </ListItemIcon>{' '}
              <ListItemText
                primaryTypographyProps={
                  menu === MENU.IMAGES ? textMenuSelectedStyle : textMenuStyle
                }
                primary={intl.formatMessage({
                  defaultMessage: 'Images',
                  description: 'Sidebar: menu item',
                })}
              />
            </ListItemButton>
          </ListItem>
          <ListItem
            onClick={() => setMenu(MENU.TEXT)}
            selected={menu === MENU.TEXT}
            sx={{ padding: 0 }}
          >
            <ListItemButton>
              <ListItemIcon>
                <TextFieldsIcon style={{ color: iconsColor }} />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      {menu === MENU.TEMPLATE && (
        <Drawer
          variant="permanent"
          anchor="left"
          sx={{
            '& .MuiDrawer-paperAnchorDockedLeft': {
              left: drawerWidth,
              backgroundColor: '#424242',
              paddingTop,
            },
          }}
        >
          <TemplateList />
        </Drawer>
      )}
      {menu === MENU.IMAGES && (
        <Drawer
          variant="permanent"
          anchor="left"
          sx={{
            '& .MuiDrawer-paperAnchorDockedLeft': {
              left: drawerWidth,
              backgroundColor: '#424242',
              paddingTop,
            },
          }}
        >
          <SearchPictograms />
        </Drawer>
      )}
    </div>
  )
}

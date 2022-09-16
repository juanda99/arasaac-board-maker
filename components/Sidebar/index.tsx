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

const marginTop = '64px'

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
            marginTop,
          },
        }}
      >
        <List style={{ padding: 0 }}>
          <ListItem
            onClick={() => setMenu(MENU.TEMPLATE)}
            selected={menu === MENU.TEMPLATE}
          >
            <ListItemButton>
              <ListItemIcon>
                <GridOnIcon />
              </ListItemIcon>
              <ListItemText
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
          >
            <ListItemButton>
              <ListItemIcon>
                <PhotoLibraryIcon />
              </ListItemIcon>{' '}
              <ListItemText
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
                <TextFieldsIcon />
              </ListItemIcon>{' '}
              <ListItemText
                primary={intl.formatMessage({
                  defaultMessage: 'Text',
                  description: 'Sidebar: menu item',
                })}
              />
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
              marginTop,
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
              marginTop,
            },
          }}
        >
          <SearchPictograms />
        </Drawer>
      )}
    </div>
  )
}

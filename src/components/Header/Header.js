import React from 'react'
import { fade } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import InputBase from '@material-ui/core/InputBase'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import SearchIcon from '@material-ui/icons/Search'
import logo from '../../logo.png'

import './Header.css'
import { NavLink } from 'react-router-dom'
import makeStyles from '@material-ui/core/styles/makeStyles'
import lightGreen from '@material-ui/core/colors/lightGreen'
import lime from '@material-ui/core/colors/lime'

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  header: {
    backgroundColor: lightGreen[800]
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  search: {
    display: 'flex',

    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto'
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200
    }
  },
  iconButton: {
    padding: 10
  },
  logo: {
    borderRadius: '50%',
    width: '70%',
    height: '70%'
  },
  links: {
    outline: 'none',
    textDecoration: 'none',
    '&:visited': {
      color: theme.palette.common.white
    },
    '&:active': {
      color: lime['A200']
    }
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  }
}))

export default function PrimarySearchAppBar () {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)

  const isMenuOpen = Boolean(anchorEl)

  const handleMenuClose = () => {
    setAnchorEl(null)
  }


  const menuId = 'primary-search-account-menu'
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  )

  return (
    <div className={classes.grow}>
      <AppBar className={classes.header} position='static'>
        <Toolbar>

          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='open drawer'
          >
            {/*https://www.designevo.com/logo-maker/*/}
            <img src={logo} className={classes.logo} alt="logo"/>
          </IconButton>

          <div className={classes.search}>
            <InputBase
              placeholder='Search…'
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ 'aria-label': 'search' }}
            />

            <IconButton type='submit' className={classes.iconButton} aria-label='search'>
              <SearchIcon/>
            </IconButton>
          </div>
          <div className={classes.grow}>
            <ul className='tab-container'>
              <NavLink to={'/spring-treatment'} className={classes.links}>
                <li className='tabs'>Весенние обработки</li>
              </NavLink>
              <li className='tabs'>Обработки винограда</li>
              <li className='tabs'>Препараты</li>

            </ul>
          </div>

        </Toolbar>
      </AppBar>
      {renderMenu}
    </div>
  )
}

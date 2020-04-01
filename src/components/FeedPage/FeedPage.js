import Header from '../Header/Header'
import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import background from '../../green-bg.png'

const useStyles = makeStyles(theme => ({
  main: {
    height: '100vh',
    backgroundImage : `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center bottom'
  }
}))
export default function FeedPage() {
  const classes = useStyles()
  return (
    <div className={classes.main}>
      <Header />
    </div>
   )
}
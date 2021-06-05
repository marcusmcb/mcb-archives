import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import { NavLink } from 'react-router-dom'

import Logo from '../../images/mcb-logo-black.jpg'
import './titlebar.css'

const Titlebar = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }))

  const classes = useStyles()

  return (
    <div className={classes.root} id='title-bar-scroll'>
      <Grid>
        <div className='title-bar-row'>
          <div className='title-bar'>
            <Grid item xs={12}>
              <Box bgcolor='text.secondary' className='title-bar'>
                MCB Archives
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box bgcolor='text.secondary' className='title-bar-caption'>
                edits, mixshows and more
              </Box>
            </Grid>
          </div>
          <img src={Logo} alt='MCB Logo' className='mcb-logo' height='100px' />
        </div>
        <Grid item xs={12}>
          <Box bgcolor='text.secondary' className='title-bar-links'>
            <span className='links'>
              <NavLink to='/edits'>
                <p>edits</p>
              </NavLink>
              <p> | </p>
              <NavLink to='/mixshows'>
                <p>mixshows</p>
              </NavLink>
              <p> | </p>
              <NavLink to='/other'>
                <p>other</p>
              </NavLink>
            </span>
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}

export default Titlebar

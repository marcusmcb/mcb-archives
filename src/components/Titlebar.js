import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/box'
import Grid from '@material-ui/core/Grid'

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
    <div className={classes.root}>
      <Grid>
        <Grid item xs={12}>
          <Box
            bgcolor='text.secondary'
            color='background.paper'
            className='title-bar'
            p={2}
          >
            MCB Archives
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box
            bgcolor='text.secondary'
            color='background.paper'
            className='title-bar-links'
            p={2}               
          >
            <span className='links'>
              <p>edits</p>
              <p> | </p>
              <p>mixshows</p>
              <p> | </p>
              <p> other </p>
            </span>
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}

export default Titlebar

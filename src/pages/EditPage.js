import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/box'
import Grid from '@material-ui/core/Grid'

import Titlebar from '../components/shared/Titlebar'
import './editpage.css'

const EditPage = () => {

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
    },
  }))

  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Titlebar />
      <Grid>
          <Grid item xs={12}>
              <Box bgcolor='text.secondary' className='edit-content-title'>
                LATEST FROM SOUNDCLOUD:
              </Box>
          </Grid>
          <Grid item xs={12}>
              
          </Grid>
      </Grid>
    </div>
  )
}

export default EditPage

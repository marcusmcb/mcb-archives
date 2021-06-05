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
          <Box bgcolor='text.secondary' className='edit-content-title-caption'>
            a random idea i had during the pandemic.  ableton + maschine + ozone.
          </Box>
        </Grid>
        <Grid item xs={12}>
          <div className='soundcloud-embed'>
            <iframe
              width='100%'
              height='150'
              scrolling='no'
              frameBorder='no'
              src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/981841180&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
              title='SoundCloud'
            ></iframe>            
          </div>
        </Grid>
      </Grid>
    </div>
    
  )
}

export default EditPage

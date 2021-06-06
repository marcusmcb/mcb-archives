import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import AudioPlayer from 'material-ui-audio-player'
import { FacebookShareButton, FacebookIcon } from 'react-share';

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

  const muiTheme = createMuiTheme({})

  let size = "2.5rem"

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
            a random idea i had during the pandemic. ableton + maschine + ozone.
            <span id='more-toggle'>(more)</span>
          </Box>
          <Box bgcolor='text.secondary' className='more-info fade-in-text'>
            djs are all about transitions and blends. sometimes, you have one
            that gets stuck in your head. 'song x might sound pretty dope over
            song y'... that sort of thing. so here's one i had that decided to
            put the screws to one friday night during the pandemic. i dig it.
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
        {/* <ThemeProvider theme={muiTheme}>
          <AudioPlayer
            width='100%'
            variation='default'
            src='https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
          />
        </ThemeProvider>         */}
      </Grid>
      <div className='share-me'>
        <FacebookShareButton url={'/'}>
          <FacebookIcon size={size}/>
        </FacebookShareButton>
      </div>
    </div>
  )
}

export default EditPage

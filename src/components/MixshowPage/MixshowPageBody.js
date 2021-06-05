import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/box'
import Grid from '@material-ui/core/Grid'

import './mixshowpagebody.css'

const MixshowPageBody = () => {

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
      <Grid>
        <Grid item xs={12}>
          <Box bgcolor='text.secondary' className='content-title'>
            LATEST TWITCH SET
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box bgcolor='text.secondary' className='content-title-caption'>
            a fun mix of randoms (mostly throwbacks) recorded from my live
            stream on 04.11.21
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box bgcolor='text.secondary'>
            <div className='mixcloud-embed'>
            <iframe
                width='100%'
                height='120'
                title='RadioMixes Old School'
                src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&dark=1&feed=%2Fmarcusmcbride%2Flazy-sunday-throwback-mix-twitch-set-041121%2F"
                frameBorder='0'
              ></iframe>
            </div>
          </Box>
        </Grid>
      </Grid>

      <Grid>
        <Grid item xs={12}>
          <Box bgcolor='text.secondary' className='content-title'>
            NEW FROM RADIOMIXES:
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box bgcolor='text.secondary' className='content-title-caption'>
            a sample mix from one of my syndicated mixshows
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box bgcolor='text.secondary'>
            <div className='mixcloud-embed'>
              <iframe
                width='100%'
                height='120'
                title='RadioMixes Old School'
                src='https://www.mixcloud.com/widget/iframe/?hide_cover=1&dark=1&feed=%2Fmarcusmcbride%2Fdj-marcus-mcbride-radiomixes-retro-show-sample-september-2019%2F'
                frameBorder='0'
              ></iframe>
            </div>
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}

export default MixshowPageBody

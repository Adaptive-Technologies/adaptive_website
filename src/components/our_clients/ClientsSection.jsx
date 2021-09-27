import React from 'react'
import { CardMedia, Typography, Grid, Box } from '@mui/material'

import useStyles from '../../theme/views/clients.theme'
import background from '../../assets/images/BgClients_1.jpg'
import FlexCoast from '../../assets/images/Favicon_Flexcoast.svg'
import Timotuz from '../../assets/images/logo_no_text_green.svg'
import KCSC from '../../assets/images/Symbol_Logo_Colour.png'

const ClientsSection = () => {
  const classes = useStyles()
  return (
    <Box className={classes.clientsSection}>
      <CardMedia
        className={classes.background}
        component='img'
        image={background}
        alt=''
      />
      <Box className={classes.contentBox}>
        <Typography data-cy='header' variant='h2'>
          {'< clients that are adapting />'}
        </Typography>
        <Grid className={classes.grid} data-cy='logo-grid' container special='center'>
          <Grid className={classes.gridItem} item xs={4}>
            <CardMedia
              className={classes.logo}
              data-cy='logo-1'
              component='img'
              image={FlexCoast}
              alt='Flex Coast logo'
            />
          </Grid>
          <Grid className={classes.gridItem} item xs={4}>
            <CardMedia
              className={classes.logo}
              data-cy='logo-2'
              component='img'
              image={Timotuz}
              alt='Timotuz logo'
            />
          </Grid>
          <Grid className={classes.gridItem} item xs={4}>
            <CardMedia
              className={classes.logo}
              data-cy='logo-3'
              component='img'
              image={KCSC}
              alt='KCSC logo'
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default ClientsSection

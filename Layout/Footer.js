import { Button, Container, Grid, IconButton, OutlinedInput, Typography } from "@mui/material"
import TextField from "@mui/material/TextField"
import { useTheme } from "@mui/styles"
import makeStyles from '@mui/styles/makeStyles'
import { Box, color } from "@mui/system"
import Image from "next/image"
import logo from '../public/images/logos/logo-secondary-light.png'
import socialMediaLinks from "./socialMediaLinks"
import {useEffect} from 'react'
import Link from "next/link"

const useStyles = makeStyles(theme => ({
  social_media_btn_footer: {
    color: theme.palette.secondary.light,
    fontSize: '16px',
    margin: '0 10px 10px 0',
    transition: 'all 0.5s linear',
    border: `1px solid ${theme.palette.secondary.light}`,
    '&:hover':{
      backgroundColor: props => props.color,
      color: 'white',
      border: props => `1px solid ${props.color}`
    }
  },
  emailRootField:{
    color: 'white',
    border: '1px solid white',
    boxShadow: "none"
  },
  emailInputField:{
    padding: '10px 10px'
  }
}))
const SocialIcon = (props) => {
  const classes = useStyles(props)
  const {item, color} = props
  const theme = useTheme()
  return(
    <IconButton sx={{
      color: theme.palette.secondary.light,
      fontSize: '16px',
      margin: '0 10px 10px 0',
      transition: 'all 0.3s linear',
      border: `1px solid ${theme.palette.secondary.light}`,
      '&:hover':{
        backgroundColor: color,
        color: 'white'
      }
    }}>
      {item.icon}
    </IconButton>
  )
}

function Footer(props) {
  const classes = useStyles()
  const theme = useTheme()
    return (
      <div className="footer_wrapper">
        <Container>
          <Grid container spacing={3} justifyContent={'space-between'}>
            <Grid item xs={12} md={4} lg={3}>
              <div className="footer_info_content">
                <Image src={logo} alt="Footer Logo"  />

              </div>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
                <div className="footer_subscription_form">
                  <Typography component='h2' variant="h6" className="footer_social_link_heading">Don&rsquo;t Fall Behind</Typography>
                  <Typography component='p' variant='body2' color={theme.palette.secondary.light}>Subscribe to me Blogs and get latest information about trends and new technologies</Typography>
                  <Box component={'form'} mt={2} display='flex' flexDirection='column'>
                    <OutlinedInput 
                      type={'email'} 
                      placeholder='Enter Your Email Here'
                      label={'Email'}
                      classes={{
                        root: 'email_root_field',
                        input: 'email_input_field',
                      }}
                    />
                    <Button type="submit" variant="outlined" className="footer_subscribe_btn">Subscribe</Button>
                  </Box>
                </div>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <div className="footer_social_links">
                  <Typography component='h2' variant="h6" className="footer_social_link_heading">Reach me Out</Typography>
                  <Box display={'flex'}>
                    {socialMediaLinks.map((item, index) => (
                      <Link key={index} href={item.link}  passHref>
                        <a target='_blank'>
                          <SocialIcon  item={item} color={item.color} />
                        </a>
                      </Link>
                    ))}
                  </Box>
              </div>
            </Grid>
          </Grid>
          <Box paddingY={4} borderTop={`1px solid ${theme.palette.secondary.light}`} marginTop={5} textAlign='center'>
              <Typography component='p' variant='body2' color={theme.palette.secondary.light}>
                &copy; Copyright 2022 - Made with &#x1F90D; by M. Sharjeel Maqsood
              </Typography>
          </Box>
        </Container>
      </div>
    )
  }


  
  export default Footer

  
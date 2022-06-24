import { Button, Container, Grid, IconButton, OutlinedInput, Typography, useTheme, Box } from "@mui/material"
import Logo from '../public/images/logo.png'
import Image from "next/image"

import {useEffect, useState} from 'react'
import Link from "next/link"


function Footer(){
    const theme  = useTheme()
    const [logoSize, setLogoSize] = useState(80);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth>=900){
                setLogoSize(80)
            } else if (window.innerWidth>=600){
                setLogoSize(60)
            } else {
                setLogoSize(50)
            }
        }
        handleResize();
        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    })
    return (
        <Box
            width={'100%'}
            backgroundColor={theme.palette.secondary.dark}
            padding={'20px 0'}
        >
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <Box
                            display={'flex'}
                            alignItems={'center'}
                        >
                            <Box
                                width={logoSize}
                                height={logoSize}
                                position="relative"
                                zIndex={10}
                                sx={{
                                    transition: 'all 0.3s linear'
                                }}
                            >
                                <Image src={Logo} alt="header-logo" layout="fill"/>
                            </Box>
                            <Box>
                                <Typography component={'h1'} sx={{
                                    fontWeight:'500',
                                    lineHeight:'32px',
                                    fontSize: '28px',
                                    marginLeft: '5px',
                                    letterSpacing: '-2px',
                                    color: theme.palette.primary.light
                                }}>
                                    Bright Smile Dental Clinic
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box mt={5}>
                            <Typography component={'h4'} variant={'h4'} color='white'>Subscribe to our Blogs</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box mt={5}>
                            <Typography component={'h4'} variant={'h4'} color='white'>For Info</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

// function Footer(props) {
//   // const classes = useStyles()
//   const theme = useTheme()
//     return (
//       <div className="footer_wrapper">
//         <Container>
//           <Grid container spacing={3} justifyContent={'space-between'}>
//             <Grid item xs={12} md={4} lg={3}>
//               <div className="footer_info_content">
//                 <Image src={logo} alt="Footer Logo"  />

//               </div>
//             </Grid>
//             <Grid item xs={12} md={4} lg={3}>
//                 <div className="footer_subscription_form">
//                   <Typography component='h2' variant="h6" className="footer_social_link_heading">Don&rsquo;t Fall Behind</Typography>
//                   <Typography component='p' variant='body2' color={theme.palette.secondary.light}>Subscribe to me Blogs and get latest information about trends and new technologies</Typography>
//                   <Box component={'form'} mt={2} display='flex' flexDirection='column'>
//                     <OutlinedInput 
//                       type={'email'} 
//                       placeholder='Enter Your Email Here'
//                       label={'Email'}
//                       classes={{
//                         root: 'email_root_field',
//                         input: 'email_input_field',
//                       }}
//                     />
//                     <Button type="submit" variant="outlined" className="footer_subscribe_btn">Subscribe</Button>
//                   </Box>
//                 </div>
//             </Grid>
//             <Grid item xs={12} md={4} lg={3}>
//               <div className="footer_social_links">
//                   <Typography component='h2' variant="h6" className="footer_social_link_heading">Reach me Out</Typography>
//                   <Box display={'flex'}>
//                     {socialMediaLinks.map((item, index) => (
//                       <Link key={index} href={item.link}  passHref>
//                         <a target='_blank'>
//                           <SocialIcon  item={item} color={item.color} />
//                         </a>
//                       </Link>
//                     ))}
//                   </Box>
//               </div>
//             </Grid>
//           </Grid>
//           <Box paddingY={4} borderTop={`1px solid ${theme.palette.secondary.light}`} marginTop={5} textAlign='center'>
//               <Typography component='p' variant='body2' color={theme.palette.secondary.light}>
//                 &copy; Copyright 2022 - Made with &#x1F90D; by M. Sharjeel Maqsood
//               </Typography>
//           </Box>
//         </Container>
//       </div>
//     )
//   }


  
  export default Footer

  
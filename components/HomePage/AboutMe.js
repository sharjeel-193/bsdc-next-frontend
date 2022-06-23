import { Box, Container, Grid, Typography } from "@mui/material"
import Image from 'next/image'
import myPhoto from '../../public/images/person.png'

function AboutMe() {
  return (
    <div className="home_about_section">
        <Container>
            <Box padding={0} sx={{ boxShadow: 4 }} borderRadius={5} mx='auto' className='home_about_container'>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={7} xl={6}>
                        <div className="home_about_content">
                            <Typography component={'h2'} variant='h3' className="home_about_title">Who Am I?</Typography>
                            <Typography component={'p'} variant='body1' className="home_about_desc">
                                I am a Web Developer, currently studying in <i>National University of Sciences and Technology, Islamabad</i> pursuing <i>BSCS</i>. At my college, my interests began to lean towards developing and I started learning about Web Development. Now, I am here, in front of you guys,a <i>Self Taught Web Developer.</i> 
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={5} xl={6}>
                        <div className="home_about_img">
                            <Image src={myPhoto} alt=""/>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    </div>
  )
}

export default AboutMe
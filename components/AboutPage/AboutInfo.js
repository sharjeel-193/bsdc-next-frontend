import { Container, Grid, Typography } from "@mui/material"
import { Box } from "@mui/system"
import Image from "next/image"
import myPhoto from '../../public/images/person.png'

function AboutInfo(props) {
    const {desc, img} = props
  return (
    <div className="about_description">
        <Container>
            <Grid container spacing={2} alignItems='center'>
                <Grid item xs={12} md={8} xl={9}>
                    <div className="about_description_content">
                        <Typography variant="body1" component={'p'} textAlign={'justify'} marginY={5} marginX={4} data-aos="zoom-in-right">
                            {desc}
                        </Typography>
                    </div>
                </Grid>
                <Grid item xs={12} md={4} xl={3}>
                    
                    <Box position={'relative'} width='70%' marginX='auto' maxWidth={'300px'} data-aos="zoom-in-left">
                        <Image src={img.url()} alt="" width={280} height={300} />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    </div>
  )
}

export default AboutInfo
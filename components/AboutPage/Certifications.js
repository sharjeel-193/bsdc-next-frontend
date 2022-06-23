import { Box, Container, Grid, Hidden, IconButton, Paper, Typography } from "@mui/material"
import Image from 'next/image'
import photo from '../../public/images/blog1.jpg'
import {FaLink, FaCertificate} from 'react-icons/fa'
import { useTheme } from "@mui/styles"
import Link from 'next/link'
import { urlFor } from "../../sanity"

function Certifications(props) {
    const {certifications} = props
    const theme = useTheme()
    return (
        <Box>
            <Container>
                <Typography variant='h4' component='h3' className="about_page_section_heading">My Certifications</Typography>
                <Box marginTop={5} marginBottom={2}>
                    <Grid container spacing={2} justifyContent='center'>
                        {certifications.map((item, index) => (
                            <Grid item xs={12} sm={8} md={6} lg={4} key={index}>
                                <Paper sx={{borderRadius: '10px', overflow: 'hidden'}} elevation={3} data-aos="zoom-out">
                                    <Box width={'100%'} height={'250px'} position='relative' className="certification_card_wrapper">
                                        <Image src={urlFor(item.instiLogo).url()} alt="" layout="fill"/>
                                        <Box 
                                            position="absolute" 
                                            width="100%" 
                                            height="100%" 
                                            display="flex"
                                            alignItems='center'
                                            justifyContent={'center'}
                                            className="certification_card_container"
                                        >
                                            <Link href={item.course_link}>
                                                <a target={'_blank'}>
                                                    <IconButton className="certification_card_links"> <FaLink /> </IconButton>
                                                </a>
                                            </Link>
                                            <Link href={item.certificate_link}>
                                                <a target={'_blank'}>
                                                    <IconButton className="certification_card_links"> <FaCertificate /> </IconButton>
                                                </a>
                                            </Link>
                                        </Box>
                                    </Box>
                                    <Box paddingY={2}>
                                        <Typography variant="h6" component={'h3'} marginX={2} textAlign='center'>{item.title}</Typography>
                                        <Hidden only={['lg', 'xl']}>
                                            <Box display="flex" justifyContent={'center'} marginTop={1} width="100%">
                                                <Link href={item.course_link}>
                                                    <a target={'_blank'}>
                                                        <IconButton sx={{
                                                            color: theme.palette.primary.dark, 
                                                            border: `1px solid ${theme.palette.primary.dark}`, 
                                                            margin: '0 5px',
                                                            fontSize: '16px',
                                                            padding: '10px'
                                                        }}> 
                                                            <FaLink /> 
                                                        </IconButton>
                                                    </a>
                                                </Link>
                                                <Link href={item.course_link}>
                                                <a target={'_blank'}>
                                                        <IconButton sx={{
                                                            color: theme.palette.primary.dark, 
                                                            border: `1px solid ${theme.palette.primary.dark}`, 
                                                            margin: '0 5px',
                                                            fontSize: '16px',
                                                            padding: '10px'
                                                        }}> 
                                                            <FaCertificate /> 
                                                        </IconButton>
                                                    </a>
                                                </Link>
                                            </Box>
                                        </Hidden>
                                    </Box>
                                </Paper>
                                
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}

export default Certifications
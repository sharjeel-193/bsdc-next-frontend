import React from 'react'
import {Box, Container, IconButton, Typography, useTheme, Button, Grid} from '@mui/material'
import Slider from 'react-slick'
import {RiArrowLeftCircleFill, RiArrowRightCircleFill} from 'react-icons/ri'
import ReviewCard from '../components/ReviewCard'
import Person1 from '../public/images/person-1.jpg'
import Person2 from '../public/images/person-2.jpg'
import Image from 'next/image'
import TeamCard from '../components/TeamCard'

function TeamHome() {
    const theme = useTheme()

    

    

    return (
        <Box
            width={'100%'}
            padding={'50px 0'}
            backgroundColor={theme.palette.filler.dull}
        >
            <Container>
                <Box
                    textAlign={'center'}
                    marginBottom={'70px'}
                >
                    <Typography component={'h3'}
                        color={theme.palette.secondary.main}
                        fontSize={'20px'}
                        margin={0}
                        fontWeight={500}
                    >
                        MEET THE TEAM
                    </Typography>
                    <Typography component={'h2'}
                        color={theme.palette.primary.dark}
                        marginTop={0}
                        fontFamily={'Crimson Pro'}
                        lineHeight={'48px'}
                        fontSize={'56px'}
                        fontWeight={600}
                    >
                        Distinguished Dental Specialists
                    </Typography>
                </Box>
                <Grid container spacing={2} justifyContent={'center'}>
                    <Grid item xs={12} md={4}>
                        <TeamCard img={Person1} name={'Dr Aqeel Maqsood'} qualifications={'BDS, RCDS'} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TeamCard img={Person2} name={'Dr Warda Basharat'} qualifications={'BDS, RCDS'} />
                    </Grid>
                </Grid>

            </Container>
        </Box>
    )
}

export default TeamHome
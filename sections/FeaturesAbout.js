import { Box, Typography, useMediaQuery, useTheme, Container, Grid } from '@mui/material'
import React from 'react'

import FeatureCard from '../components/FeatureCard'
import { urlFor } from '../sanity'

function FeaturesAbout(props) {
    const theme = useTheme()
    const {features} = props
    const isSmaller=useMediaQuery(theme.breakpoints.down('sm'))
    return (
        <Box
            width={'100%'}
            padding={'70px 0'}
            textAlign={'center'}
        >
            <Typography component={'h3'}
                color={theme.palette.secondary.main}
                fontSize={'20px'}
                fontWeight={500}
                marginTop={isSmaller?'160px':0}
            >
                TREAT YOURSELF WITH
            </Typography>
            <Typography component={'h2'}
                color={theme.palette.primary.dark}
                marginTop={0}
                fontFamily={'Crimson Pro'}
                lineHeight={'48px'}
                fontSize={'56px'}
                fontWeight={600}
            >
                Best Ever Dental Experience
            </Typography>
            <Container>
                <Box
                    marginTop={'70px'}
                >
                    <Grid container spacing={3}>
                        {features.map((feature, index) => (
                            <Grid item xs={12} md={6} key={`feature-${index}`}>
                                <FeatureCard 
                                    icon={urlFor(feature.icon).url()} 
                                    title={feature.title} 
                                    desc={feature.description} 
                                />
                            </Grid>
                        ))}
                        
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}

export default FeaturesAbout
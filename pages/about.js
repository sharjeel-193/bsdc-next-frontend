import { Box } from '@mui/material'
import React from 'react'
import FeaturesAbout from '../sections/FeaturesAbout'
import GalleryAbout from '../sections/GalleryAbout'
import IntroAbout from '../sections/IntroAbout'
import TeamHome from '../sections/TeamHome'

function about() {
    return (
        <Box>
            <IntroAbout />
            <FeaturesAbout />
            <TeamHome />
            <GalleryAbout />
        </Box>
    )
}

export default about
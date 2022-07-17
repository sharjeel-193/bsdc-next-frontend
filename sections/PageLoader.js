import { Box, useTheme } from '@mui/material'
import React from 'react'
import { ThreeCircles } from 'react-loader-spinner'

function PageLoader() {
    const theme = useTheme()
    return (
        <Box
            width={'100%'}
            height={'100vh'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
        >
            <ThreeCircles
                color="red"
                outerCircleColor={theme.palette.primary.main}
                middleCircleColor={theme.palette.secondary.main}
                innerCircleColor={theme.palette.filler.vibrant}
            />
        </Box>
    )
}

export default PageLoader
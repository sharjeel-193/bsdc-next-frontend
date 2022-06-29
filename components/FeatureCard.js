import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import Image from 'next/image'

function FeatureCard(props) {
    const {icon, title, desc} = props
    const theme = useTheme()
    const isSmaller = useMediaQuery(theme.breakpoints.down('sm'))
    return (
        <Box
            width={'80%'}
            display={'flex'}
            margin={'20px 0'}
            sx={{
                transition:'0.3s linear'
            }}
        >
            <Box
                width={'100px'}
                height={isSmaller?'80px':'100px'}
                position={'relative'}
            >
                <Image src={icon} layout={'fill'} />
            </Box>
            <Box
                marginLeft={'20px'}
                textAlign={'left'}
            >
                <Typography component={'h3'}
                    fontFamily={'Crimson Pro'}
                    fontWeight={600}
                    fontSize={'28px'}
                    lineHeight={'30px'}
                    color={theme.palette.primary.main}
                >
                    {title}
                </Typography>
                <Typography component={'p'}
                    fontFamily={'Exo'}
                    fontWeight={400}
                    fontSize={'14px'}
                >
                    {desc}
                </Typography>
            </Box>
        </Box>
    )
}

export default FeatureCard
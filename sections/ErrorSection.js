import React from 'react'
import {Box, Typography, useTheme} from '@mui/material'

function ErrorSection(props) {
    const {errMsg} = props
    const theme = useTheme()
    return (
        <Box
            width={'100%'}
            // height={'100vh'}
            height={'200px'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
        >
            <Box
                textAlign={'center'}
                // backgroundColor={'yellow'}
            >
                <Typography component={'h1'} sx={{
                    fontWeight:500,
                    fontSize: '28px',
                    marginLeft: '5px',
                    letterSpacing: '-2px',
                    color: theme.palette.secondary.main,
                    transition: 'all 0.3s linear'
                }}>
                    {errMsg}
                </Typography>
            </Box>
        </Box>
    )
}

export default ErrorSection
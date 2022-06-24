import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Box, Typography, useTheme} from '@mui/material'

export default function Home() {
    const theme = useTheme()
    return (
        <Box
            sx={{
                backgroundColor: theme.palette.filler.vibrant
            }}
        >
            <Typography
                sx={{
                    fontSize: '40px',
                    fontFamily: 'Exo'
                }}
            >Page is ready to be build</Typography>
        </Box>
    )
}

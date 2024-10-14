import React from 'react'
import {Box, Typography, Container, useTheme, TextField, Button} from '@mui/material'
function ContactForm(props) {
    const { contactFormData } = props;
    const theme = useTheme()
    return (
        <Box
            width={'100%'}
            padding={'70px 0'}
        >
            <Container>
                <Box
                    textAlign={'center'}
                >
                    <Typography component={'h3'}
                        color={theme.palette.secondary.main}
                        fontSize={'20px'}
                        margin={0}
                        fontWeight={500}
                    >
                        CONTACT US
                    </Typography>
                    <Typography component={'h2'}
                        color={theme.palette.primary.dark}
                        marginTop={0}
                        fontFamily={'Crimson Pro'}
                        lineHeight={'48px'}
                        fontSize={'56px'}
                        fontWeight={600}
                    >
                        {contactFormData?.tagline}
                    </Typography>
                </Box>
                <Box
                    width={'600px'}
                    maxWidth={'80%'}
                    margin={'0 auto'}
                    marginTop={'70px'}
                >
                    <TextField variant='outlined' label={'Name'} type={'text'} fullWidth/>
                    <TextField variant='outlined' label={'Phone'} type={'email'} sx={{marginTop:'20px'}} fullWidth/>
                    <TextField multiline variant={'outlined'} label={'Question'} sx={{marginTop: '20px'}} fullWidth rows={5} />
                    <Box textAlign={'right'} sx={{marginTop: '20px'}}>
                        <Button variant='contained'>Submit</Button>
                    </Box>
                </Box>
            </Container>

        </Box>
    )
}

export default ContactForm
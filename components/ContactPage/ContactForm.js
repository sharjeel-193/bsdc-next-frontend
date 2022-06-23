import { Box, Typography, Input, FormControl, TextField, InputAdornment, Button, Modal, Dialog, DialogContent } from "@mui/material";
import { useTheme } from "@mui/styles";
import React, { useRef, useState } from "react";
import {useForm, Controller, Error} from 'react-hook-form'
import emailjs from '@emailjs/browser'
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function ContactForm() {
    const theme = useTheme()
    const [errorModal, setErrorModal] = useState(false)
    const [contactModal, setContactModal] = useState(false)
    const { formState: { errors }, handleSubmit, control, reset } = useForm({
        criteriaMode: "all",
        defaultValues: {
            name: '',
            email: '',
            subject: '',
            message: ''
        }
    });
    const onSubmit = (data) => {
        console.log(data)
        emailjs.send(process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,data,process.env.NEXT_PUBLIC_EMAIL_USER_ID)
            .then((result) => {
                console.log({RESULT: result})
                if(result.text == "OK"){
                    handleContactModalOpen()
                }
                reset()
            })
            .catch((error) => {
                console.log({ERROR: error})
                handleErrorModalOpen()
            })
    }
    const handleContactModalOpen = () => {
        setContactModal(true)
    }
    const handleContactModalClose = () => {
        setContactModal(false)
    }
    const handleErrorModalOpen = () => {
        setErrorModal(true)
    }
    const handleErrorModalClose = () => {
        setErrorModal(false)
    }
    return (
        <Box 
            width={'100%'}
            backgroundColor={theme.palette.secondary.light}
            borderRadius={3}
            paddingY={3}
        >
            <Typography component={'h2'} variant='h4' marginX={3} marginBottom={2} letterSpacing={-1} color={theme.palette.primary.dark}>Let&apos;s start Conversation</Typography>
            <Box marginX={3}>
            <form onSubmit={handleSubmit(onSubmit)} >
                <Controller
                    name='name'
                    control={control}
                    rules={{
                        required: "Name is required.",
                    }}
                    render={({field}) => (
                        <TextField 
                            {...field} 
                            variant='outlined' 
                            placeholder="Enter Your Name"
                            label='Name' 
                            sx={{marginTop: '15px'}} 
                            fullWidth 
                            error={Boolean(errors.name)}
                            helperText={errors.name && errors.name.message}
                        />
                    )}
                />
                <Controller
                    name='email'
                    type='email'
                    control={control}
                    rules={{
                        required: "Email is required.",
                        pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: "Email is in invalid format"
                        }
                    }}
                    render={({field}) => (
                        <TextField 
                            {...field} 
                            variant='outlined' 
                            placeholder="Enter Your Email"
                            label='Email' 
                            sx={{marginTop: '15px'}} 
                            fullWidth 
                            error={Boolean(errors.email)}
                            helperText={errors.email && errors.email.message}
                        />
                    )}
                />
                <Controller
                    name='subject'
                    control={control}
                    render={({field}) => (
                        <TextField 
                            {...field} 
                            variant='outlined' 
                            placeholder="Subject of Message"
                            label='Subject' 
                            sx={{marginTop: '15px'}} 
                            fullWidth 
                        />
                    )}
                />
                <Controller
                    name='message'
                    control={control}
                    rules = {{
                        required: "Message is required.",
                    }}
                    render={({field}) => (
                        <TextField
                            {...field} 
                            variant='outlined' 
                            placeholder="Enter your Message Here"
                            label='Message' 
                            sx={{marginTop: '15px'}} 
                            fullWidth 
                            multiline
                            rows={5}
                            error={Boolean(errors.message)}
                            helperText={errors.message && errors.message.message}
                        />
                    )}
                />
                <Box width={'100%'} textAlign='right' marginTop={3}>
                    <Button type='submit' variant='contained'>Submit</Button>
                </Box>
            </form>
            </Box>
            <Dialog
                open={contactModal}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleContactModalClose}
            >
                <DialogContent>
                    <Typography variant='h2' textAlign={'center'} marginBottom={2}>&#128512;</Typography>
                    <Typography variant='h5' textAlign={'center'}>We have received your email. We Will be in touch with you as soon as we can</Typography>
                </DialogContent>

            </Dialog>
            <Dialog
                open={errorModal}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleErrorModalClose}
            >
                <DialogContent>
                    <Typography variant='h2' textAlign={'center'} marginBottom={2}>&#128542;</Typography>
                    <Typography variant='h5' textAlign={'center'}>There is an unknown error in Contact Form Submission. Kinldy Try again later</Typography>
                </DialogContent>

            </Dialog>
        </Box>
    )
}

export default ContactForm
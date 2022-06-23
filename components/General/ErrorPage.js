import { Container, Typography } from "@mui/material"
import { Box } from "@mui/system"

function ErrorPage() {
    return (
        <Box width={'100%'}>
            <Container>
                <Box width={'90%'} marginX='auto' marginY={5}  textAlign='center'>
                    <Typography variant='h4' color={'red'}>
                        Sorry,  We Encontered an Error <br />
                        Kindly Try Again Later
                    </Typography>
                </Box>
            </Container>
        </Box>
            
        
    )
}

export default ErrorPage
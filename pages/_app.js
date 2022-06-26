import '../styles/globals.css'
import {ThemeProvider} from '@mui/material'
import theme from '../theme'
import Layout from '../Layout'
import 'react-slidedown/lib/slidedown.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    )
}

export default MyApp

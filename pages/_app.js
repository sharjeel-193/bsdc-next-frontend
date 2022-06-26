import '../styles/globals.css'
import {ThemeProvider} from '@mui/material'
import theme from '../theme'
import Layout from '../Layout'
import 'react-slidedown/lib/slidedown.css'
import 'keen-slider/keen-slider.min.css'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

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

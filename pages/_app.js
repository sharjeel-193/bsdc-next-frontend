import '../styles/globals.css'
import {ThemeProvider} from '@mui/material'
import theme from '../theme'
import Layout from '../Layout'
import 'react-slidedown/lib/slidedown.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import App from 'next/app'
import {sanityClient} from '../sanity'
import { useEffect } from 'react'
import { RiLayoutLeftFill } from 'react-icons/ri'
import LayouFetchError from '../sections/LayouFetchError'

let layoutDataCache

function MyApp({ Component, pageProps, layoutData }) {
    useEffect(() => {
        console.log({Props: layoutData})
        if(layoutData){
            console.log('Props YES')
        } else {
            console.log('PROPS NO')
        }
    },[])
    return (
        <ThemeProvider theme={theme}>
            {layoutData?(
                <Layout layoutData={layoutData}>
                    <Component {...pageProps} />
                </Layout>
            ):(
                <LayouFetchError />
            )}
        </ThemeProvider>
    )
}

export default MyApp

MyApp.getInitialProps = async (context) => {
    const pageProps = await App.getInitialProps(context);
    const query = `*[_type=="layoutData"][0]`;
    try {
        if(layoutDataCache){
            return {
                ...pageProps,
                layoutData: layoutDataCache
            }

        } else {
            const data = await sanityClient.fetch(query)
            layoutDataCache = data
            console.log({Data: data})
            if(data){
                return {
                    ...pageProps,
                    layoutData: data
                }
            } else {
                return {
                    ...pageProps
                }
            }
        }
    } catch (error) {
        console.log({Error: error})
        return {
            ...pageProps
        }
        
    }
}

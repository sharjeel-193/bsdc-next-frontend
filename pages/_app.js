import '../styles/globals.css'
import {ThemeProvider} from '@mui/material'
import theme from '../theme'
import Layout from '../Layout'
import 'react-slidedown/lib/slidedown.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import App from 'next/app'
import {sanityClient} from '../sanity'
import { useEffect, useState } from 'react'
import { RiLayoutLeftFill } from 'react-icons/ri'
import LayouFetchError from '../sections/LayouFetchError'
import { useRouter } from 'next/router'
import PageLoader from '../sections/PageLoader'

let layoutDataCache

function MyApp({ Component, pageProps, layoutData }) {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        console.log({Props: layoutData})
        if(layoutData){
            console.log('Props YES')
        } else {
            console.log('PROPS NO')
        }
    },[])

    useEffect(() => {
        const handleStart = (url) => setLoading(true);
        const handleComplete = (url) => setLoading(false);

        router.events.on('routeChangeStart', handleStart)
        router.events.on('routeChangeComplete', handleComplete)
        router.events.on('routeChangeError', handleComplete)

        return () => {
            router.events.off('routeChangeStart', handleStart)
            router.events.off('routeChangeComplete', handleComplete)
            router.events.off('routeChangeError', handleComplete)
        }
    }, [])

    return (
        <ThemeProvider theme={theme}>
            {layoutData?(
                <Layout layoutData={layoutData}>
                    {loading?(
                        <PageLoader />
                    ):(
                        <Component {...pageProps} />
                    )}
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

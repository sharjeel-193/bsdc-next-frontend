import { Box, Container, useTheme, Typography, useMediaQuery } from "@mui/material"
import Image from 'next/image'
import { useRouter } from "next/router"
import { sanityClient, urlFor } from "../../sanity"
import SanityBlockContent from "@sanity/block-content-to-react"
import moment from "moment"

function blogSingle(props){
    const theme = useTheme()
    const {currBlog} = props
    const isMed = useMediaQuery(theme.breakpoints.down('md'))
    const isSmaller = useMediaQuery(theme.breakpoints.down('sm'))
    const serializers = {
        types: {
            code: (props) => (
                <pre data-language={props.node.language}>
                    <code>{props.node.code}</code>
                </pre>
            ),
        },
    }
    
    return (
        <Box>
            <Box
                width={'100%'}
                height={isSmaller?'400px':(isMed?'500px':'600px')}
                position={'relative'}
                sx={{
                    transition: 'all 0.3s linear'
                }}
            >
                <Box
                    width={'100%'}
                    height={'100%'}
                    position={'relative'}
                >
                    <Image src={(urlFor(currBlog.mainImage)).url()} layout={'fill'} objectFit={'cover'} />
                    
                </Box>
                <Box
                    width={'100%'}
                    height={'100%'}
                    display={'flex'}
                    alignItems={'center'}
                    backgroundColor={`${theme.palette.secondary.dark}CC`}
                    position={'absolute'}
                    top={0}
                >
                    <Container>
                        <Typography
                            component={'h2'}
                            color={'white'}
                            marginLeft={'20px'}
                            marginTop={isSmaller?'56px':(isMed?'36px':'0px')}
                            fontFamily={'Crimson Pro'}
                            lineHeight={isSmaller?'40px':'48px'}
                            fontSize={isSmaller?'42px':'56px'}
                            fontWeight={600}
                            textAlign={'left'}
                            maxWidth={'600px'}
                            sx={{
                                transition: 'all 0.3s linear'
                            }}
                            
                        >
                            {currBlog.title}
                        </Typography>


                    </Container>
                </Box>
                
            </Box>
            <Container>
                <Box
                    color={theme.palette.primary.dark}
                    marginTop={'30px'}
                    fontSize={'18px'}
                >
                   
                    <Typography component={'p'} >
                        by <b><em>{currBlog.author.name}</em></b>
                    </Typography>
                    <Typography component={'p'} >
                        Published At <em>{moment(currBlog._createAt).format('MMMM Do YYYY, h:mm a')}</em>
                    </Typography>
                    
                    
                </Box>
                <Box
                    margin={'40px 0'}
                >
                    <SanityBlockContent 
                        blocks={currBlog.body} 
                        serializers={serializers}
                        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET} 
                    />
                </Box>
            </Container>
        </Box>
    )
}

export default blogSingle

export const getServerSideProps = async({ params }) => {
    // console.log("Static Props Start")
    
    const { slug } = params

    // console.log({Slug: slug})

    const query = `*[_type == "post" && slug.current == '${slug}']
    {
        title,
        body,
        _createdAt,
        mainImage,
        author->{name}
    }[0]`
    // console.log({Query: query})

   try {
        const data = await sanityClient.fetch(query)
        if(data){
            return {
                props:{
                    currBlog: data
                }
            }
        } else {
            return {
                props:{
                    error: 'Sorry, This Page Does Not Exist'
                }
            }
        }
   } catch (error) {
        return {
            props: {
                notFound: true
            }
        }
   }
}
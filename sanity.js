import {createClient} from 'next-sanity'
import {createPreviewSubscriptionHook, createCurrentUserHook} from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'

const config = {
  dataset: 'bsdc',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: '2021-10-21',
  useCdn: process.env.NODE_ENV === 'production',
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN
}


export const sanityClient = createClient(config)

// Set up a preview client with serverless authentication for drafts
export const previewClient = createClient({
  ...config,
  useCdn:false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
})

// Helper function for easily switching between normal client and preview client
export const getClient = (usePreview) => (usePreview ? previewClient : sanityClient)


 export const urlFor = (source) => createImageUrlBuilder(config).image(source)

 // Set up the live preview subscription hook
 export const usePreviewSubscription = createPreviewSubscriptionHook(config)
 
 // Helper function for using the current logged in user account
 export const useCurrentUser = createCurrentUserHook(config)
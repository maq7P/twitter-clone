import React from 'react'
import { TwitterIcon, TwitterShareButton, VKShareButton, TelegramShareButton } from 'react-share'

export const Test = () => {
   return (<>
    {/* <FacebookShareButton
        url="www.google.com" quote="Check out this website: www.google.com"
    /> */}
    <TelegramShareButton 
        url="https://commercial.legenda-dom.ru/premises/ofis10"
        title="LEGENDA Крммерческое помещение"
    >
        <button>telega</button>
    </TelegramShareButton>
    <TwitterShareButton
        url="https://commercial.legenda-dom.ru/premises/ofis10"
        title="LEGENDA Крммерческое помещение"
    >
        <TwitterIcon/>
    </TwitterShareButton>
    <VKShareButton
        url="https://commercial.legenda-dom.ru/premises/ofis10"
        title="LEGENDA Крммерческое помещение"
    >
        <button>Hello</button>
    </VKShareButton>
    {/* <EmailShareButton/> */}
   </>)
}

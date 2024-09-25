
import StreamVideoProvider from '@/providers/StreamClientProvider'
import { Metadata } from 'next';
import React, { Children, ReactNode } from 'react'

export const metadata: Metadata = {
  title: "meet-ups",
  description: "video calling application",
  icons:{
    icon:'/icons/logo.svg'
  }
};

const Rootlayout = ({children}:{children : ReactNode}) => {
  return (
    <main>
        
     <StreamVideoProvider>
     {children}
     </StreamVideoProvider>
        
    </main>
  )
}

export default Rootlayout

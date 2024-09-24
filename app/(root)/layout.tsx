
import StreamVideoProvider from '@/providers/StreamClientProvider'
import React, { Children, ReactNode } from 'react'

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

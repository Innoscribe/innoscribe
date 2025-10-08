import Breadcrumb from '@/components/Common/Breadcrumb'
import ScrollUp from '@/components/Common/ScrollUp'
import Signup from '@/components/Signup'
import React from 'react'

const page = () => {
  return (
    <main className='mt-0 pt-36'>
    <ScrollUp />
    
    <Signup/>
    </main>
  )
}

export default page
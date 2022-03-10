import React from 'react'
import Title from '../Components/Title'
import { MainLayout,InnerLayout } from '../styles/Layout'


export default function AboutPage() {
  return (
    <>
        <MainLayout>
            <InnerLayout>
            <Title title={'About me'} span={"About me"}/>
            </InnerLayout>
        </MainLayout>
    </>
  )
}

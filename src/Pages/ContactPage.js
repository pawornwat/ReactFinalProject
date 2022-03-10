import React from 'react'
import Title from '../Components/Title'
import { MainLayout,InnerLayout } from '../styles/Layout'
export default function ContactPage() {
  return (
    <>
        <MainLayout>
            <InnerLayout>
            <Title title={'Contact'} span={"Contact"}/>
            </InnerLayout>
        </MainLayout>
    </>
  )
}

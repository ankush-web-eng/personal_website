"use client"
import { Header } from '@/components/header'
import { Navbar } from '@/components/navbar'
import React, { useEffect } from 'react'
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage"
import { storage } from "@/config/firebase"
import { v4 } from "uuid"

export default function Kaizen() {

  const [imageupload, setImageUpload] = React.useState(null)
  const [getImage, setGetImage] = React.useState([])

  const getImageref = ref(storage, "images/")

  const onSubmit = async () => {
    if (imageupload == null) return;
    const imageRef = ref(storage, `images/${imageupload.name + v4()}`)
    await uploadBytes(imageRef, imageupload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setGetImage(prev => [...prev, url])
      })
    })
  }

  const getFiles = async () => {
    await listAll(getImageref).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setGetImage(prevImages => [...prevImages, url])
        })
      })
    })
  }
    useEffect(() => {
      getFiles()
    }, [])

    return (
      <div>
        <div className='hidden md:flex'>
          <Navbar />
          <div className='h-screen space-y-6 pl-6 pt-8 w-1/2 flex flex-col'>
            <Header />
            <div className=''>
             
            </div>
          </div>
        </div>
        <div className='flex md:hidden'></div>
      </div>
    )
}

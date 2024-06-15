import Image from 'next/image'
import React from 'react'

const Card = ({img,text,num}) => {
  return (
    <div className='w-[250px] h-[320px] border-2 border-violet rounded-[10px] shadow-2xl flex flex-col justify-center items-center text-center'>
       <Image src={`/${img}`} width={200} height={100} alt='pic'/>
    <p className=' mt-2 text-[18px] '> {text} </p>
       <h1 className=' text-[40px]'>{num}</h1>
    </div>
  )
}

export default Card

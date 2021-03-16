import React from 'react'
import Image from 'next/image'

const FaceSection:React.FC = function () {
    return (
        <section className="w-full xl:min-h-screen">
           <div className="flex flex-col items-center justify-center w-5/6 m-auto text-center pt-28 hero__body">
                <h1 className="mb-6 text-3xl font-bold sm:text-4xl md:text-5xl">Junior Full Stack Developer</h1>
                <h2 className="text-xl font-light mb-14 sm:text-xl md:text-2xl"> I code amazing things, and I love what I do.</h2>
                <Image src="/images/mf-avatar.svg" width={210} height={230}/>
           </div>
           <div className="w-10/12 m-auto mt-24 text-center hero__foot md:w-1/2">
               <Image src="/images/hero.svg" width={497} height={202}/>
           </div>
        </section>
    )
}

export default FaceSection
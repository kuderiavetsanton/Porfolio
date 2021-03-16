import React from 'react'
import Image from 'next/image'

interface Props{
    image:string,
    title:string,
    site:string | null
}

const WorkField:React.FC<Props> = function ({ image, title, site}) {
    return (
        <div className="work__exmpl">
            <Image src={image} alt="work"  height={1280} width={1920} className="block rounded-lg"/>
            <div className="work__overlay">
                <h3 className="mb-3 text-2xl font-semibold text-white">{title}</h3>
                <a className="text-white cursor-pointer primary__button" href={site}>Visit Website &gt;</a>
            </div>
        </div>
    )
}


export default WorkField
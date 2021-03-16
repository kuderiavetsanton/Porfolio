import React from 'react'
import Image from 'next/image'

interface Props{
    imageUrl:string,
    title:string,
}

const SkillColumn:React.FC<Props> =  function ({ imageUrl, title, children }) {
    return (
        <div className="flex flex-col items-center w-full px-12 py-16 text-center border-b border-gray-200 lg:w-1/3 lg:border-r">
            <Image src={ imageUrl } width={48} height={48}></Image>
            <h1 className="mt-5 text-2xl font-semibold">{ title }</h1>
            { children }
        </div>
    )
}

export default SkillColumn

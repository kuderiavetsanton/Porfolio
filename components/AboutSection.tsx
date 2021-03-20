import React from 'react'

const AboutSection:React.FC = function() {
    return (
        <div className="w-full px-2 py-8 bg-red-500 min-h-192 lg:py-16" id="about">
            <div className="flex flex-col justify-center w-10/12 m-auto mt-12 text-center lg:mt-16 items center md:w-4/6 lg:w-1/2">
                <h1 className="mb-6 text-2xl font-bold text-white md:text-3xl">Hi, i am Anton. Nice to meet you.</h1>
                <p className="pb-40 text-lg font-normal text-white sm:pb-0">
                    Enthusiastic Junior Web Developer eager to contribute to team success through hard work, attention to detail and excellent organizational skills. Clear understanding of Frontend and Backend. Motivated to learn, grow and excel in Web development.
                </p>
            </div>
            
        </div>
    )
}

export default AboutSection
import React from 'react'
import SkillColumn from './SkillColumn'

const SkillsSection:React.FC = function () {
    return (
        <div className="px-8 py-20 xl:px-40 lg:px-32 md:px-20 sm:px-10 min-h-192" style={{marginTop:'-14rem'}} id="skills">
            <div className="flex flex-col bg-white border border-gray-200 rounded-lg shadow-md lg:flex-row min-h-192">
                <SkillColumn imageUrl="/images/frontend.svg" title="Front-end Developer">
                    <p className="py-10 text-lg">
                        I like to code things from scratch, and enjoy bringing ideas to life in the browser.
                    </p>
                    <h3 className="pb-1 text-xl text-red-500">Fron-end Dev Tools:</h3>
                    <ul>
                        <li className="pt-1">React</li>
                        <li className="pt-1">TypeScript</li>
                        <li className="pt-1">Tailwindcss</li>
                        <li className="pt-1">Redux</li>
                        <li className="pt-1">Next</li>
                    </ul>
                </SkillColumn>
                <SkillColumn imageUrl="/images/backend.svg" title="Back-end Developer">
                    <p className="py-10 text-lg">
                        I like to create Rest API, Authentaction and
                        complicated relation between collections.
                    </p>
                    <h3 className="pb-1 text-xl text-red-500">Back-end Dev Tools:</h3>
                    <ul>
                        <li className="pt-1">Express</li>
                        <li className="pt-1">TypeScript</li>
                        <li className="pt-1">Mongo DB</li>
                        <li className="pt-1">Mongoose</li>
                        <li className="pt-1">GraphQL</li>
                        <li className="pt-1">JWT Token</li>
                    </ul>
                </SkillColumn>
                <SkillColumn imageUrl="/images/book.svg" title="Study">
                    <p className="py-10 text-lg">
                        I like to discover new things and improving my software skills with every day.
                    </p>
                    <h3 className="pb-1 text-xl text-red-500">Topics that i am Studying:</h3>
                    <ul>
                        <li className="pt-1">Data Structures</li>
                        <li className="pt-1">Alghoritms</li>
                        <li className="pt-1">Apollo</li>
                        <li className="pt-1">WebPack</li>
                        <li className="pt-1">Sass</li>
                    </ul>
                </SkillColumn>
            </div>
        </div>
    )
}


export default SkillsSection
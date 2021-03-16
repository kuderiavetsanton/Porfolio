import React from 'react'
import WorkField from './WorkField'

const WorkSection:React.FC = function () {
    return (
        <div className="box-content px-8 my-10 text-center pb-28 pt-14 xl:px-40 lg:px-32 md:px-20 sm:px-10 min-h-192" id="work">
            <h1 className="text-3xl font-bold">My Recent Work</h1>
            <h3 className="mt-4 text-xl font-thin">Here are a few projects I've worked on recently.</h3>
            <div className="grid grid-cols-1 my-20 lg:grid-cols-3 sm:grid-cols-2 gap-x-5 gap-y-8">
                <WorkField site="https://reddit-kuderiavetsanton.vercel.app/" image="/images/my-reddit.png" title="Reddit Clone, Still Working on it"/>
                <WorkField site="https://messenger-kuderiavetsanton.vercel.app/" image="/images/messenger.png" title="Chat App"/>
                <WorkField site={null} image="/images/spotify.png" title="Spotify Clone, Working only with premium"/>
            </div>
            <a href="https://github.com/kuderiavetsanton?tab=repositories" className="m-auto mt-10 text-red-500 primary__button hover:text-white">See Code On GitHub</a>
        </div>

    )
}
export default WorkSection
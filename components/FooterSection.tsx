import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubAlt, faFacebookF,  } from '@fortawesome/free-brands-svg-icons'
import { faMailBulk } from '@fortawesome/free-solid-svg-icons'


const FooterSection:React.FC = function () {
    return (
        <div className="z-40 bg-red-500 py-14 min-h-180" id="contact">
            <div className="flex flex-col items-center justify-between w-11/12 px-10 py-5 m-auto bg-gray-900 md:px-10 min-h-40 rounded-2xl md:flex-row xl:w-8/12 lg:py-10" style={{marginTop:'-9rem'}}>
                <h2 className="text-3xl font-bold text-center text-white md:text-xl lg:text-3xl">Start a project</h2>
                <div className="my-5 text-lg font-thin text-center text-white">
                    Interested in working together? We should queue up a chat
                </div>
                <a href="mailto: kuderiavetsanton@gmail.com" className="text-white primary__button">
                    Let's do this
                </a>
            </div>
            <div className="flex flex-col items-center mt-14">
                <Image src="/images/my-logo-white.png" height={65} width={65} alt="white-logo"/>
                <p className="mt-8 text-2xl text-center text-white opacity-70" style={{maxWidth:"320px"}}>Living, learning, & leveling up one day at a time.</p>
                <div className="flex items-center justify-between px-5 mt-10 w-52">
                    <a className="social__brand" href="https://www.facebook.com/anton.kuderiawiec/">
                        <FontAwesomeIcon icon={faFacebookF} className="text-white social__icon" mask={['far', 'circle']} size={'lg'}/>
                    </a>
                    <a className="social__brand" href="https://github.com/kuderiavetsanton?tab=repositories">
                        <FontAwesomeIcon icon={faGithubAlt} className="text-white social__icon" mask={['far', 'circle']} size={'lg'}/>
                    </a>
                    <a className="social__brand" href="mailto: kuderiavetsanton@gmail.com">
                        <FontAwesomeIcon icon={faMailBulk} className="text-white social__icon" mask={['far', 'circle']} size={'lg'}/>
                    </a>
                </div>
                <p className="mt-16 text-white opacity-50 text-md">Created By @ Kuderiavets Anton</p>
            </div>
        </div>
    )
}


export default FooterSection
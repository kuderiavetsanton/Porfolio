import  React, { useEffect, useState } from 'react'
import AboutSection from '../components/AboutSection'
import FaceSection from '../components/FaceSection'
import FooterSection from '../components/FooterSection'
import Navbar from '../components/Navbar'
import SkillsSection from '../components/SkillsSection'
import WorkSection from '../components/WorkSection'

export default function Home() {
  const [ state, setState ] = useState(false)
  return (
    <div>
        <Navbar/>
        <FaceSection/>
        <AboutSection/>
        <SkillsSection/>
        <WorkSection/>
        <FooterSection/>
    </div>
      
  )
}

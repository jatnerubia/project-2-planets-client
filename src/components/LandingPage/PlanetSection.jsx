
import { useEffect, useState } from 'react'
import PlanetCard from './PlanetCard'
import SectionHeading from './SectionHeading'

const PlanetSection = () => {

    const [planets, setPlanets] = useState([])

    useEffect(() => {
        getPlanets()
    }, [])

    const getPlanets = async () => {
        const result = await fetch('https://project-2-planets-server.onrender.com/planet');
        let response = await result.json()
        response = response.slice(0, 6)
        setPlanets(response)
    }

    return (
        <div className="container">
            <SectionHeading name="The Planets" />
            <div className="row">
                {
                    planets.map((planet, index) => <PlanetCard key={index} planet={planet} />)
                }
            </div>
        </div>
    )
}

export default PlanetSection
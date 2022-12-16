
import { useEffect, useState } from "react"
import PlanetDetails from "./PlanetDetails"

const PlanetDetailsSection = () => {

    const [planets, setPlanets] = useState([])

    useEffect(() => {
        getPlanets()
    }, [])

    const getPlanets = async () => {
        try {
            const result = await fetch('https://project-2-planets-server.onrender.com/planets');
            let response = await result.json()
            response = response.slice(0, 6)
            setPlanets(response)
        } catch (error) {
            
        }
    }

    return (
        <div className="container">
            <div className="row">
                {
                    planets.map((planet, index) => <PlanetDetails key={index} planet={planet} />)
                }
            </div>
        </div>
    )
}

export default PlanetDetailsSection
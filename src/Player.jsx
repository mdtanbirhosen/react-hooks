import { useState } from "react"

export default function Player() {
    const [teamCount, setTeam] = useState(11)
    const handleAddPlayer = () => {
        setTeam(teamCount + 1)
    }
    const handleRemovePlayer = () => {
        const newTeamCount = teamCount - 1
        setTeam(newTeamCount)
    }
    const teamStyle = {
        border: "2px solid purple",
        margin: "20px",
        padding: "20px",
        borderRadius: "20px",
        color: 'lightGreen'
    }
    return (
        <div style={teamStyle}>
            <h3>Player : {teamCount}</h3>
            <button onClick={handleAddPlayer}>Add Player</button>
            <button onClick={handleRemovePlayer}>Remove Player</button>
        </div>
    )
}
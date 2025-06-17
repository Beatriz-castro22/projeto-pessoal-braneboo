import TimerBraineBoo from "./components/TimerBraineBoo"
import ListBraineBoo from "./components/ListBraineBoo"
import CharactersBraineBoo from "./components/CharactersBraineBoo"
import './style.css'
export default function App() {
    return (
        <div className="root">
            <div className="left">
            <TimerBraineBoo/>
            <ListBraineBoo/>
            </div>
            <div className="right">
            <CharactersBraineBoo/>
            </div>
        </div>
    )
}
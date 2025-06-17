import{ useState } from "react";
import "./style.css";

const characters = [
  { name: "Avatar 1",},
  { name: "Avatar 2",},
  { name: "Avatar 3",},
  { name: "Avatar 4",}
];
const image = [
  {image: "/11.png" },
  {image: "/12.png" },
  {image: "/13.png" },
  {image: "/14.png"}
]

export default function CharactersBraineBoo() {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % characters.length);
    
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + characters.length) % characters.length);
  };

  const current = characters[index];
  const current2 = image[index];

  return (
    <div className="selector-container">

      <div className="image-wrapper">
        <img
          src={current2.image}
          alt={current.name}
          className="character-image"
        />
      </div>

      <h2 className="title">𝜗ৎ Escolha seu companheiro 𝜗ৎ</h2>
      <p className="character-name">{current.name}</p>

      <div className="button-group">
        <button onClick={handlePrev} className="nav-button">←</button>
        <button onClick={handleNext} className="nav-button">→</button>
      </div>
    </div>
  );
}

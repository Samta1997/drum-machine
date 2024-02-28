import { GlobalStyle } from "./GlobalStyles"
import ClickableAudio from "./ClickableAudio"
import { useState } from "react";

function App() {
  const [dataFromChild, setDataFromChild] = useState(null);
  const [isToggled, setIsToggled]=useState(true)
  const [volume, setVolume]=useState(20)
  
  const receiveDataFromChild=(data)=>{
    setDataFromChild(data)
    console.log(dataFromChild)
  }
    
  const toggle=()=>{
    setIsToggled(!isToggled)
    
  }

  const handleVolume=(e)=>{
    const newVolume=parseInt(e.target.value)
    setVolume(newVolume)
    

  }
    
  return (
  <>
    <GlobalStyle/>
    <div id="container">
      <div id="drum-machine">
        <div className="grid-items"> 
          <ClickableAudio sendDataToParent={receiveDataFromChild} audioSrc='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' id="Heater-1" text="Q"  toggle={isToggled} volume={volume}/>
          <ClickableAudio audioSrc='https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' id="Heater-2" text="W" sendDataToParent={receiveDataFromChild} toggle={isToggled} volume={volume}/>
          <ClickableAudio audioSrc='https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' id="Heater-3" text="E" sendDataToParent={receiveDataFromChild} toggle={isToggled} volume={volume}/>
          <ClickableAudio audioSrc='https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' id="Heater-4" text="A" sendDataToParent={receiveDataFromChild} toggle={isToggled} volume={volume}/>
          <ClickableAudio audioSrc='https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' id="Clap" text="S" sendDataToParent={receiveDataFromChild} toggle={isToggled} volume={volume}/>
          <ClickableAudio audioSrc='https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' id="Open HH" text="D" sendDataToParent={receiveDataFromChild} toggle={isToggled} volume={volume}/>
          <ClickableAudio audioSrc='https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' id="Kick and Hat" text="Z" sendDataToParent={receiveDataFromChild} toggle={isToggled} volume={volume}/>
          <ClickableAudio audioSrc='https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' id="Kick" text="X" sendDataToParent={receiveDataFromChild} toggle={isToggled} volume={volume}/>
          <ClickableAudio audioSrc='https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' id="Close HH" text="C" sendDataToParent={receiveDataFromChild} toggle={isToggled} volume={volume}/>
        </div>
      </div>
    <div id="display">
      <div id="on-off">
        <button id="toggle" onClick={toggle} style={{backgroundColor:isToggled?'blue':'red', color:'white'}}>
          {isToggled?'Turn Off':'Turn On'}
        </button>
      </div>
      <div id="clip-name">{isToggled?dataFromChild:"Please press button above"}</div>
        <div className="volume-slider">
          <input type="range" min='0' max='100' value={volume} onChange={handleVolume} id="slide"/>{volume}%
        </div>
      </div>
    </div>
  </> 
  )
    
}
    

export default App

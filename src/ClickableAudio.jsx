import { useRef } from "react"

const ClickableAudio = (props) => {
    const audioRef=useRef(null)
    const playAudio=()=>{
      if(props.toggle){
        audioRef.current.play()
        props.sendDataToParent(props.id)
       
        
    }
    audioRef.current.volume=props.volume/100;
  }
  return (
    <div className='drum-pad' id={props.id} onClick={playAudio}>
      <div id="key" onKeyDown={playAudio}>
        {props.text}
       <audio 
          ref={audioRef} 
          src={props.audioSrc}
          type="audio/mp3"
          className="clip"
          id={props.text}>
        </audio>  
       {/* <audio controls src={props.audioSrc}></audio>*/} 
       </div>
    </div>   
  )
}
export default ClickableAudio
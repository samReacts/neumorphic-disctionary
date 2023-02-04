import React, { useEffect, useState } from "react";
import PartOfSpeech from "./PartOfSpeech";
const Details = (props) => {
  const partsOfSpeech = props.details.meanings;
  const [playing, setPlaying] = useState(false);
  const word = props.details.word;
  const audioUrl = props.details?.phonetics?.find(ph => ph.audio?.length)?.audio ?? "";
  const phonetic = props.details.phonetics?.find(ph => Boolean(ph.text?.length))?.text ?? "";
  const wordAudio = new Audio(audioUrl);
  console.log("audio url", );

  const handlePlay = ()=>{
    if(audioUrl){
      setPlaying(true)
      wordAudio.play();
      wordAudio.addEventListener("ended", ()=>{
        setPlaying(false);
      })
    }
  }

  return (
    <section className="details card">
      <header className="title">
        <div className="word">
          <h1>{word}</h1>
          <span className="pron">{phonetic}</span>
        </div>
        <button className="pron-btn" onClick={handlePlay} title={!audioUrl ? "No audio available!" : ""}>
          <span>{!playing ? "▶️" : "||"}</span>
        </button>
      </header>
      <main>
        {partsOfSpeech.map((partOfSpeech, index) => <PartOfSpeech  key={index} partOfSpeech={partOfSpeech}/>)}
      </main>
    </section>
  );
};

export default Details;

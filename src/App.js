import { useState } from "react";
import Details from "./Components/Details";
import Search from "./Components/Search";
import Error from "./Components/Error";

import "./styles.scss";

export default function App() {
  const [result, setResult] = useState({
    "word": "hello",
    "phonetics": [
      {
        "audio": "https://api.dictionaryapi.dev/media/pronunciations/en/hello-au.mp3",
        "sourceUrl": "https://commons.wikimedia.org/w/index.php?curid=75797336",
        "license": {
          "name": "BY-SA 4.0",
          "url": "https://creativecommons.org/licenses/by-sa/4.0"
        }
      },
    ],
    "meanings": [
      {
        "partOfSpeech": "noun",
        "definitions": [
          {
            "definition": "\"Hello!\" or an equivalent greeting.",
            "synonyms": [],
            "antonyms": []
          }
        ],
        "synonyms": [
          "greeting"
        ],
      },
      {
        "partOfSpeech": "verb",
        "definitions": [
          {
            "definition": "To greet with \"hello\".",
            "synonyms": [],
            "antonyms": []
          }
        ],
        "synonyms": [],
        "antonyms": []
      },
      {
        "partOfSpeech": "interjection",
        "definitions": [
          {
            "definition": "A greeting (salutation) said when meeting someone or acknowledging someone’s arrival or presence.",
            "synonyms": [],
            "antonyms": [],
            "example": "Hello, everyone."
          },
          {
            "definition": "A greeting used when answering the telephone.",
            "synonyms": [],
            "antonyms": [],
            "example": "Hello? How may I help you?"
          },
          {
            "definition": "A call for response if it is not clear if anyone is present or listening, or if a telephone conversation may have been disconnected.",
            "synonyms": [],
            "antonyms": [],
            "example": "Hello? Is anyone there?"
          },
          {
            "definition": "Used sarcastically to imply that the person addressed or referred to has done something the speaker or writer considers to be foolish.",
            "synonyms": [],
            "antonyms": [],
            "example": "You just tried to start your car with your cell phone. Hello?"
          },
          {
            "definition": "An expression of puzzlement or discovery.",
            "synonyms": [],
            "antonyms": [],
            "example": "Hello! What’s going on here?"
          }
        ],
        "synonyms": [],
        "antonyms": [
          "bye",
          "goodbye"
        ]
      }
    ],
  });
  const [isError, setIsError] = useState(false);

  const handleSearch = async (word)=>{
    
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    try{
      let res = await fetch(url);
      if(res.status != 200){
        let data = await res.json();
        setResult(data);
        throw new Error("Word not found");        
      }
      let data = await res.json();
      setResult(data[0]);
      setIsError(false)
    }catch(err){
      setIsError(true);
      console.warn(err);
    }
  }
  return (
    <div className="App">
      <Search handleSearch={handleSearch}/>
      {!isError && <Details details = {result}/>}
      {isError && <Error details = {result}/>}
    </div>
  );
}

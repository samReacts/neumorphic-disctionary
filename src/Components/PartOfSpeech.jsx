import React from 'react'

export const PartOfSpeech = (props) => {
  const partOfSpeech = props.partOfSpeech;
  const definitions = partOfSpeech["definitions"].length <=5 ? partOfSpeech["definitions"] : partOfSpeech["definitions"].slice(0,5);

  return (
    <article className="partOfSpeech-card">
          <header>
            <h3 className="partOfSpeech">{partOfSpeech["partOfSpeech"]}</h3>
            <hr />
          </header>
          <main>
            <p>Meaning</p>
            <ul>
              {definitions.map((def, id) =><li key={id}>{def.definition}</li> )}              
            </ul>
          </main>
        </article>
  )
}

export default PartOfSpeech;

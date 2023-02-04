import React from 'react'

const Error = (props) => {
    const details = props.details;
  return (
    <section className="details card">
      <header className="title">
        <div className="word">
          <h1>{details.title}</h1>
          <span className="pron">{details.message}</span>
        </div>
      </header>
      <main>
        {details.resolution}
      </main>
    </section>
  )
}

export default Error
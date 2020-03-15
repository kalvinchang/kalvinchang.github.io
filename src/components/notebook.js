import React from "react"

const Notebook = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      // margin: '15vh 5vh 0 5vh',
      width: '70vw',
      height: '80vh',
    }}>
      <div className='notebook-skin left'>
        <div className='paper'>
        </div>
      </div>
      <div className='notebook-skin right'>
        <div className='paper'>
        </div>
      </div>
    </div>
  )
}

export default Notebook

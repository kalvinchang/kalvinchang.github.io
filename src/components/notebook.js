import React from "react"

const Notebook = (props) => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '15vh 5vh 0 5vh',
      height: '70vh',
    }}>
      <div className='notebook-skin left'>
        {!props.hideLeft &&
          <div className='paper'>
            {props.left}
          </div>
        }
      </div>
      <div className='notebook-skin right'>
        {!props.hideRight &&
          <div className='paper'>
            {props.right}
          </div>
        }
      </div>
    </div>
  )
}

export default Notebook

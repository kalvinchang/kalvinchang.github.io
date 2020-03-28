import React from "react"
import Notebook from "../components/notebook"

const Timeline = () => {
    return <Notebook 
            left={
              <>
                <h1>high school</h1>
                <ul>
                  <li>life revolved around college apps TT</li>
                </ul>
              </>
            }
            right={
              <>
                <h1>fall 2018</h1>
                <ul>
                  <li>A FRICKING MESS</li>
                </ul>

                <h1>spring 2019</h1>
                <ul>
                  <li>ARCC Spring Theatre</li>
                </ul>

                <h1>summer 2019</h1>
                <ul>
                  <li>independence</li>
                </ul>

                <h1>fall 2019</h1>
                <ul>
                  <li>passing in the amily</li>
                </ul>

                <h1>spring 2020</h1>
                <ul>
                  <li>took semester off</li>
                </ul>
              </>
            }
    />
}

export default Timeline
import React from "react"
import Notebook from "../components/notebook"

const AboutPage = () => {
    return <Notebook
                left={
                    <>
                        <h1>about</h1>
                        <div>
                          <p>los angeles / 626 • taipei</p>
                          <p>cs • carnegie mellon '22 • glen a wilson '18</p>
                          <p>he/him/his • 20</p>
                        </div>
                    </>
                }
                right={
                  <>
                        <div>
                          <h1>interests</h1>
                          <ul>
                            <li>food</li>
                            <li>travel</li>
                            <li>Mandarin</li>
                          </ul>
                        </div>
                        <div>
                          <h1>movies/shows</h1>
                          <ul>
                            <li>TODO: insert list</li>
                          </ul>
                        </div>
                        <div>
                          <h1>music</h1>
                          <ul>
                            <li>五月天 Mayday (since 2018)</li>
                            <li>BTS (since 2016)</li>
                            <li>草東沒派對 No Party for Cao Dong (since 2020)</li>
                            <li>Ellie Goulding (since 2014)</li>
                          </ul>
                        </div>
                  </>
                }
                />
}

export default AboutPage
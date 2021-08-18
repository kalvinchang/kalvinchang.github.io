import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Notebook from "../../components/notebook"
import Header from "../../components/header"
import Nav from "../../components/nav"

const ResumePage = (props) => {
  const data = useStaticQuery(graphql`
  query {
    resumePdf: file(relativePath: {eq: "resume.pdf"}) {
      name
      extension
      publicURL
    }
    resumePng: file(relativePath: {eq: "resume.png"}) {
      publicURL
      childImageSharp {
        fluid(maxWidth: 450, maxHeight: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    download: file(relativePath: {eq: "images/icons/download.png"}) {
      childImageSharp {
        fluid(maxWidth: 72, maxHeight: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    collage: file(relativePath: {eq: "images/piccollage.png"}) {
      childImageSharp {
        fluid(maxWidth: 180, maxHeight: 180) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ruler: file(relativePath: {eq: "images/ruler.png"}) {
      childImageSharp {
        fluid(maxWidth: 1000, maxHeight: 108) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    leftArrow: file(relativePath: {eq: "images/icons/left_arrow.png"}) {
      childImageSharp {
        fluid(maxWidth: 131, maxHeight: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    rightArrow: file(relativePath: {eq: "images/icons/right_arrow.png"}) {
      childImageSharp {
        fluid(maxWidth: 131, maxHeight: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)

  return (
  <>
  <Header image={data.ruler.childImageSharp.fluid} />
  <Nav pageContext={props.pageContext}
            leftArrow={data.leftArrow.childImageSharp.fluid}
            rightArrow={data.rightArrow.childImageSharp.fluid} />
  <Notebook 
    left={
      <>
        <h3>junior spring, 2021</h3>
        <ul className="comments">
          <li>// 15-591 Independent Study, LLab</li>
          <li>// 15-451 Design and Analysis of Algorithms</li>
          <li>// 11-688 Computational Forensics and AI</li>
          <li>// 05-470 Digital Service Innovation</li>
          <li>// 02-261 Quantitative Cell and Molecular Biology Lab</li>
        </ul>
        <ul>
          <li>Zoom University</li>
        </ul>

        <br />
        <h3>junior fall, 2020</h3>
        <ul className="comments">
          <li>// Teaching Assis., 15-150 Princ. Functional Programming</li>
          <li>// 11-492 Speech Processing</li>
          <li>// 15-210 Parallel and Sequential Data Structures and Algorithms</li>
          <li>// 05-333 Gadgets, Sensors, and Activity Recognition in HCI</li>
          <li>// 17-200 Ethics and Policy Issues in Computing</li>
          <li>// 82-283 Language Diversity and Cultural Identity</li>
        </ul>
        <ul>
          <li>Zoom University</li>
        </ul>
      </>
    }
    right={
      <>
        <h3>PicCollage, feb - jul 2020</h3>
        <ul>
          <li>first deep dive into back end web development</li>
          <li>photo/video editing app with a million MAU</li>
          <li>enjoyed the office's open culture and small team feel</li>
          <li>took a semester off to intern in Taiwan</li>
          <li>left my 天龍人 bubble and explored Penghu, Taitung, Hualien, Tainan, Kaohsiung, Chiayi, Taichung</li>
        </ul>

        {/* <img src={require('../../../static/images/washitape.png')} style={{width: "52vh", height: "10vh"}}></img> */}
        <div className="polaroid" style={{ height: '45vh', width: '45vh', margin: '0.5rem auto' }}>
          {/* <Img fluid={data.collage.childImageSharp.fluid}></Img> */}
          <img src={require('../../../static/images/piccollage.png')} height="100%" width="100%"></img>
        </div>
      </>
    }
  />
  </>
  )
}

export default ResumePage
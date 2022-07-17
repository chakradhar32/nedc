import * as React from "react"
import Header from "../../components/Home/Header";
import About from "../../components/Home/About";
import Blog from "../../components/Home/Blog";
import Sign from "../../components/Home/Sign";
import Card from "../../components/Home/Card";

const IndexPage = () => {
  return (
    <>
      <Header />
      <About />
      <Blog />
      <Sign />
      <Card />
    </>
  )
}

export default IndexPage

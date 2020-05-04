import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
export default ({ data }) => (
    <Layout>
        <h1> About {data.site.siteMetadata.title} </h1>    
        <p>
            리액트를 공부하는 중이다. 열심히 공부해야지.
        </p>
    </Layout>
)

export const query = graphql`
    query {
        site {
            siteMetadata{
                title
            }
        }
    }
`
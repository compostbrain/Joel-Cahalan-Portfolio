import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div style={{ color: `rgb(12, 140, 98)` }}>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <img src="https://source.unsplash.com/random/400x200" alt="" />

  </div>
)

export default IndexPage

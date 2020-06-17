import React, { FC } from 'react'

import Layout from '../layout'
import SEO from '../components/common/seo'
import Hero from '../components/common/hero'
import RandomAlbumsGrid from '../components/albums/random-albums-grid'

const IndexPage: FC = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero
        title="Hi people"
        description="Welcome to your new Gatsby site. Now go build something great with
          Typescript and Material-ui."
      />
      <RandomAlbumsGrid />
    </Layout>
  )
}

export default IndexPage

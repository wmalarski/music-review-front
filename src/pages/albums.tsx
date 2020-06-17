import React, { FC } from 'react'
import Layout from '../layout'
import SEO from '../components/common/seo'
import Hero from '../components/common/hero'
import AlbumsGrid from '../components/albums/albums-grid'

const Albums: FC = () => (
  <Layout>
    <SEO title="Albums" />
    <Hero title="Albums" description="List of all albums." />
    <AlbumsGrid />
  </Layout>
)

export default Albums

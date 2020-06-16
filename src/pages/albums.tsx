import React, { FC } from 'react'
import Layout from '../layout'
import SEO from '../components/seo'
import Hero from '../components/hero'
import AlbumsGrid from '../components/albums/albums-grid'

const SecondPage: FC = () => (
  <Layout>
    <SEO title="Albums" />
    <Hero title="Albums" description="List of all albums and their albums." />
    <AlbumsGrid />
  </Layout>
)

export default SecondPage

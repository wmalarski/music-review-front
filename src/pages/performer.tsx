import React, { ReactChild } from 'react'
import Layout from '../layout'
import SEO from '../components/common/seo'
import Hero from '../components/common/hero'
import PerformerPage from '../components/performers/performer-page'

interface PerformerProps {
  id: string
  name: string
}

export default function Performer(): ReactChild {
  if (typeof window === 'undefined') return <p>Error</p>
  const props: PerformerProps = window.history.state
  return (
    <Layout>
      <SEO title={props.name} />
      <Hero title={props.name} />
      <PerformerPage id={props.id} name={props.name} />
    </Layout>
  )
}

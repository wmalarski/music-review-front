import React, { FC, useState } from 'react'
import Layout from '../layout'
import SEO from '../components/common/seo'
import Hero from '../components/common/hero'
import PerformersList from '../components/performers/performers-list'
import PerformerDetails from '../components/performers/performer-details'

const Performers: FC = () => {
  const [selectedPerformer, setSelectedPerformer] = useState<string | null>()

  return (
    <Layout>
      <SEO title="Performers" />
      <Hero
        title="Performers"
        description="List of all performers and their albums."
      />
      {selectedPerformer ? (
        <PerformerDetails
          selectedPerformer={selectedPerformer}
          setSelectedPerformer={setSelectedPerformer}
        />
      ) : (
        <PerformersList
          selectedPerformer={selectedPerformer ?? null}
          setSelectedPerformer={setSelectedPerformer}
        />
      )}
    </Layout>
  )
}

export default Performers

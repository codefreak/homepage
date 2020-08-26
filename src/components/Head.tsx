import { Head as Helmet } from 'react-static'
import { ReactSEOMetaTags } from 'react-seo-meta-tags'
import React from 'react'

const Head: React.FC = () => (
  <ReactSEOMetaTags
    website={{
      title: 'Code FREAK | Code Feedback, Review & Evaluation Kit',
      description:
        'Online Programming Platform and Evaluation/Auto-Feedback System for Coding Assignments',
      author: {
        email: 'codefreak@fh-kiel.de',
        name: 'Code FREAK'
      },
      url: process.env.REACT_STATIC_SITE_ROOT
    }}
    facebook={{
      image: process.env.REACT_STATIC_SITE_ROOT + '/og-banner.png'
    }}
    render={(el: React.ReactNode) => (
      <Helmet>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {el}
      </Helmet>
    )}
  />
)

export default Head

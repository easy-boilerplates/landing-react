import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { RepositoriesSection } from 'components/sections'
import { Header } from 'components/header'
import { T } from 'components/t'

export class Main extends Component {
  render() {
    return (
      <>
        <T id="seo.title">{title => <Helmet title={title} />}</T>
        <T id="seo.description">
          {content => <Helmet meta={[{ name: 'description', content }]} />}
        </T>
        <Header />
        <RepositoriesSection />
      </>
    )
  }
}

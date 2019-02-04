import React, { Component } from 'react'
import { RepositoriesSection } from 'components/sections'
import { Header } from 'components/header'

export class Main extends Component {
  render() {
    return (
      <>
        <Header />
        <RepositoriesSection />
      </>
    )
  }
}

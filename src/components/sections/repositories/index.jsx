import React, { Component } from 'react'
import cn from 'classnames'
import theme from './theme.module.css'
import { T } from 'components/t'
import { api } from 'api'

export class RepositoriesSection extends Component {
  state = {
    items: []
  }

  componentDidMount() {
    api.github.search.repositories().then(data =>
      this.setState({
        ...data
      })
    )
  }

  render() {
    const { items } = this.state
    return (
      <section className={theme.wrap}>
        <div className={theme.container}>
          <h2 className={theme.title}>
            <T id="repositories.title" />
          </h2>
          <div className={theme.table}>
            <div className={cn(theme.row, theme.head)}>
              <div className={theme.col}>Repo name</div>
              <div className={theme.col}>Watchers</div>
              <div className={theme.col}>Open Issues</div>
              <div className={theme.col}>Forks</div>
            </div>
            <ul className={theme.list}>
              {items.map(item => (
                <li key={item.name} className={theme.item}>
                  <div className={theme.row}>
                    <div className={theme.col}>
                      <a
                        href={item.html_url}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {item.name}
                      </a>
                    </div>
                    <div className={theme.col}>{item.watchers}</div>
                    <div className={theme.col}>{item.open_issues}</div>
                    <div className={theme.col}>{item.forks}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    )
  }
}

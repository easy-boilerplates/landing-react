import React from 'react'
import theme from './theme.module.css'
import { T } from 'components/t'
import { A11yText } from 'components/a11y-text'

const items = ['repositories', 'projects', 'companies']

export class Header extends React.Component {
  handleClick = e => e.preventDefault()
  render() {
    return (
      <header className={theme.header}>
        <div className={theme.container}>
          <div className={theme.logo}>
            <A11yText text={<T id="logo" />} />
          </div>
          <nav>
            <ul className={theme.list}>
              {items.map(item => (
                <li key={item} className={theme.item}>
                  <a className={theme.link} href="/" onClick={this.handleClick}>
                    <T id={`nav.${item}`} />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}

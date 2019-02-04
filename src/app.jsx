import React, { Component, Fragment } from 'react'
import { IntlProvider } from 'react-intl'
import locales from 'locales/locales.json'
import { Main } from 'scenes'

export class App extends Component {
  constructor(props) {
    super(props)
    const lang = this.getLang()

    this.state = {
      messages: this.getMessages(lang),
      lang
    }
  }

  getLang() {
    return window.location.pathname.startsWith('/en') ? 'en' : 'ru'
  }

  getMessages(lang) {
    const messages = {}
    Object.keys(locales).forEach(rid => {
      messages[rid] = locales[rid][lang]
    })
    return messages
  }

  render() {
    const { lang, messages } = this.state
    return (
      <IntlProvider locale={lang} messages={messages} textComponent={Fragment}>
        <Main />
      </IntlProvider>
    )
  }
}

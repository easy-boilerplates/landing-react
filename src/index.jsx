import React from 'react'
import ReactDOM from 'react-dom'
import { addLocaleData } from 'react-intl'
import * as serviceWorker from './serviceWorker'
import { App } from './app'
import 'theme/index.css'
import 'core-js'
import 'whatwg-fetch'

addLocaleData([
  ...require(`react-intl/locale-data/ru`),
  ...require(`react-intl/locale-data/en`)
])

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.unregister()

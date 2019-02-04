import React, { PureComponent } from 'react'
import { FormattedHTMLMessage, FormattedMessage, intlShape } from 'react-intl'

export class T extends PureComponent {
  static contextTypes = {
    intl: intlShape
  }

  render() {
    return this.isHtml() ? this.fmHtml() : this.fm()
  }

  /**
   * Detects if message contains html and we can use html component
   */
  isHtml() {
    const { id, values } = this.props
    let html = false

    const messages = this.context.intl.messages
    const hasHTML = /<[a-z][\s\S]*>/i.test(messages[id])

    if (
      hasHTML &&
      (!values ||
        Object.keys(values).every(key => !React.isValidElement(values[key])))
    ) {
      html = true
    }

    return html
  }

  fmHtml() {
    const { className, ...props } = this.props

    return (
      <FormattedHTMLMessage
        {...props}
        children={
          props.children ||
          (text => (
            <div
              dangerouslySetInnerHTML={{
                __html: text
              }}
              className={className}
            />
          ))
        }
      />
    )
  }

  fm() {
    const values = this.props.values || {}

    return (
      <FormattedMessage
        {...this.props}
        children={this.props.children}
        values={values}
      />
    )
  }
}

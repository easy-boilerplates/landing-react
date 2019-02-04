import React from 'react'
import theme from './theme.module.css'

export const A11yText = ({ children }) => (
  <span className={theme.text}>{children}</span>
)

import React from 'react'
import ReactDOM from 'react-dom'
import ControlPanel from './container'

const controlContainer = document.createElement('div')

document.body.appendChild(controlContainer)

ReactDOM.render(<ControlPanel/>, controlContainer)
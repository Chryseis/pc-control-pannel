import React from 'react'
import ReactDOM from 'react-dom'
import ControlPanel from './container'

const Global_Config = []

export default {
    init() {
        const controlContainer = document.createElement('div')

        document.body.appendChild(controlContainer)

        ReactDOM.render(<ControlPanel config={Global_Config}/>, controlContainer)
    },
    use(config) {
        Global_Config.push(config)
    }
}
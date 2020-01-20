/*
* Created by Allen on 2020-01-20
*/
import React from 'react'
import {Collapse} from 'antd'
import panelConfig from '@/config/panel'

const { Panel } = Collapse

export default () => {
    return <Collapse defaultActiveKey={[panelConfig[0].key]}>
        {
            panelConfig.map(p => <Panel header={p.title} key={p.key}>
                <p>Allen</p>
            </Panel>)
        }
    </Collapse>
}
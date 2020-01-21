/*
* Created by Allen on 2020-01-19
*/
import styles from './container.less'
import React, {useState, useCallback} from 'react'
import {Button} from 'antd'
import {useSpring, animated} from 'react-spring'
import {useDrag} from 'react-use-gesture'
import Box from './components/Box'

const initPos = {
    bottom: 100,
    right: 50
}

export default () => {
    const [visible, setVisible] = useState(false)

    const [{ x, y }, set] = useSpring(() => ({ x: 0, y: 0 }))

    const { right, bottom } = initPos

    const { clientWidth, clientHeight } = document.body || document.documentElement

    const bind = useDrag(({ offset: [x, y] }) => {
            set({ x, y })
        }, {
            bounds: {
                left: -(clientWidth - right - 40),
                right,
                top: -(clientHeight - bottom - 40),
                bottom
            }
        }
    )

    const handlePanel = useCallback((status) => {
        setVisible(status)
    }, [])

    return <>
        <animated.div className={styles.container} {...bind()}
                      style={{ right, bottom, x, y }}>
            <Button type='primary' size='large' shape='circle' icon='setting' onClick={() => handlePanel(!visible)}/>
        </animated.div>
        <Box visible={visible} onClose={() => handlePanel(false)}/>
    </>
}
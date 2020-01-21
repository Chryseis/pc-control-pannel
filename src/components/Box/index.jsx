/*
* Created by Allen on 2020-01-19
*/
import React, {useEffect} from 'react'
import {Modal, Button} from 'antd'
import Panel from '../Panel'

const footer = (onClose) => <Button type='primary' onClick={onClose}>Ok</Button>

export default ({ visible = false, onClose }) => {
    useEffect(() => {
        function onKeyDown(e) {
            if (e.keyCode === 13) {
                onClose()
            }
        }
        document.addEventListener('keydown', onKeyDown)

        return () => document.removeEventListener('keydown', onKeyDown)
    }, [onClose])

    return <Modal width={600} visible={visible} mask={false} closable={false} footer={footer(onClose)}>
        <Panel/>
    </Modal>
}


/*
* Created by Allen on 2020-01-20
*/
import styles from './index.less'
import React from 'react'
import {Form, Row, Input, Button, message} from 'antd'

const Control_Map = {
    'input': Input,
    'button': Button
}

export default Form.create()(({ form: { getFieldDecorator, validateFields, resetFields }, viewControl, operateControl }) => {

    const confirm = () => {
        validateFields((err, values) => {
            if (!err) {
                Object.keys(values).map(k => localStorage.setItem(k, values[k]))
                message.success('apiHost已修改成功！')
            }
        })
    }

    const reset = () => {
        viewControl.forEach(o => localStorage.removeItem(o.key))
        resetFields(viewControl.map(o => o.key))
        message.success('apiHost已重置！')
    }

    return <Form>
        {
            viewControl.map(o => {
                const Control = Control_Map[o.type.toLowerCase()]
                return <Row className={styles.row} key={o.key}>
                    <Form.Item>
                        {
                            getFieldDecorator(o.key, {
                                initialValue: localStorage.getItem(o.key),
                                rules: [{ required: true, message: '请填写apiHost' }]
                            })(React.createElement(Control, {
                                placeholder: o.placeholder
                            }))
                        }
                    </Form.Item>
                </Row>
            })
        }
        <Row>
            {
                operateControl.map(o => {
                    const Control = Control_Map[o.type.toLowerCase()]
                    return React.createElement(Control, {
                        key: o.operate_type,
                        children: o.text,
                        className: styles.button,
                        type: o.operate_type === 'confirm' ? 'primary' : '',
                        onClick: o.operate_type === 'confirm' ? confirm : reset
                    })
                })
            }
        </Row>
    </Form>
})


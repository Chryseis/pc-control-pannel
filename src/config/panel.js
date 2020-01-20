export default [
    {
        title: '自定义ApiHost',
        key: 'customApiHost',
        view_control: {
            type: 'Input',
            placeholder: '栗子：http(s)://www.baidu.com'
        },
        operate_control: [
            {
                type: 'Button',
                text: '确定',
                operate_type: 'confirm'
            },
            {
                type: 'Button',
                text: '重置',
                operate_type: 'reset'
            }
        ]
    }
]
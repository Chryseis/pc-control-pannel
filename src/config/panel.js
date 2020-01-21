export default [
    {
        title: '自定义ApiHost',
        key: 'customApiHost',
        view_control: [
            {
                type: 'input',
                placeholder: '栗子：http(s)://www.baidu.com',
                key: 'customApiHost'
            }
        ],
        operate_control: [
            {
                type: 'button',
                text: '确定',
                operate_type: 'confirm'
            },
            {
                type: 'button',
                text: '重置',
                operate_type: 'reset'
            }
        ]
    }
]
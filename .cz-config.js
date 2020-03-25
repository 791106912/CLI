'use strict';

//git地址 ： https://github.com/leonardoanalista/cz-customizable
// 实例：https://github.com/leonardoanalista/cz-customizable/blob/master/cz-config-EXAMPLE.js#L2

module.exports = {
    types: [
        {
            value: 'feature',
            name: '✨   feature: 引入新功能'
        },
        {
            value: 'fix',
            name: '🐞   fix: 修复BUG'
        },
        {
            value: 'chore',
            name: '⏫    chore: 开发环境相关： 例如辅助工具升级优化、 增加依赖、 删除依赖'
        },
        {
            value: 'lipstick',
            name: '💄   lipstick: 仅仅css相关 '
        },
        {
            value: 'style',
            name: '🎨   style: 代码格式，项目结构优化等，例如white-space，formatting、文件重命名等操作。'
        },
        {
            value: 'docs',
            name: '📝   docs: 仅仅文档工作'
        },
        {
            value: 'reactor',
            name: '♻️   reactor: 重构代码'
        },
        {
            value: 'pref',
            name: '🚀   pref: 性能优化'
        },
        {
            value: 'test',
            name: '✅   test: 测试相关'
        },
        {
            value: 'revert',
            name: '⏪    revert:  revert之前的commit'
        }
    ],

    scopes: ['系统配置'], // 指定特定的业务系统，也可以为，格式是Array Of String

    allowCustomScopes: true, // 是否允许用户自定义scope
    allowBreakingChanges: ["feature", "fix"], //要不要放在change log中
    subjectLimit: 80, // subject字符限制
    skipQuestions: ['footer', 'breaking'],//忽略问题

    // scopeOverrides: { //根据Type不同，选择不同的scope
    //     fix: [
    //       {name: 'merge'},
    //       {name: 'style'},
    //       {name: 'e2eTest'},
    //       {name: 'unitTest'}
    //     ]
    // },

    messages: {
        type: "请选择本次提交的类型:",
        scope: '\n请输入本次提交的影响范围 (可选):',
        customScope: '填入影响业务/功能范围:',// used if allowCustomScopes is true
        subject: '本次提交短说明:\n',
        body: '长说明，使用"|"换行 (可选):\n',
        breaking: '非兼容性说明 (可选):\n',
        footer: '关联关闭的issue，例如：#31, #34(可选):\n',
        confirmCommit: '搞定了，回车提交吧少年！',
    },

    upperCaseSubject: true, // Capitalizes first subject letter
    // breaklineChar: '|', //  body、 footer换行
    // footerPrefix : 'ISSUES CLOSED:'prefix for the footer .empty string to remove prefix.
    // ticketNumberPrefix: 'TICKET-', //custom prefix for footer ticker number.
    // askForBreakingChangeFirst : true, // default is false
};
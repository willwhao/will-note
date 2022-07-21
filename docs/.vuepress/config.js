/*
 * @Descripttion: 请输入此文件的说明
 * @version: 1.0
 * @LastEditors: will
 * @Author: will
 */
const head = require('./config/head.js')
const plugins = require('./config/plugins.js')
const themeConfig = require('./config/themeConfig.js')

module.exports = {
  theme: 'vdoing', // 使用npm包主题
  title: 'will-note',
  description: 'vdoing博客主题模板',
  base: '/will-note/', // 格式：'/<仓库名>/'， 默认'/'
  markdown: {
    lineNumbers: true // 代码行号
  },

  head,
  plugins,
  themeConfig,

  // vssue 评论插件
  plugins: [
    [
      'vuepress-plugin-vssue-global',
      {
        platform: 'github',
        title: '[Comment]<%- frontmatter.title %>',
        needComments: true,
        // 其他的 Vssue 配置
        autoCreateIssue: true,
        clientId: '7fd17fa1604cfd45804a',
        clientSecret: 'f71b41092cd654c29456d63d30a903849806333d',
        owner: 'eryajf',
        repo: 'will-note'
      }
    ],
    // 增强 markdown
    [
      'md-enhance',
      {
        // 启用 TeX 支持
        tex: true,
        // Enable mermaid
        mermaid: true,
        // 启用流程图
        flowchart: true
      }
    ]
  ]
}

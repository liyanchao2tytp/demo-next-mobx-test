/*
 * @Author: lyc
 * @Date: 2021-02-06 16:01:47
 * @LastEditors: lyc
 * @LastEditTime: 2021-02-06 16:39:41
 * @Description: file content
 */
const withCss = require('@zeit/next-css')
if (typeof require !== 'undefined') {
  require.extensions['.css'] = file => { }
}
module.exports = withCss({})

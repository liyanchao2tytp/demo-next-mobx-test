/*
 * @Author: lyc
 * @Date: 2021-02-05 23:14:39
 * @LastEditors: lyc
 * @LastEditTime: 2021-02-06 16:24:09
 * @Description: file content
 */
import { Provider } from 'mobx-react'
import store from '../store'
import '../styles/globals.css'
import App from 'next/app'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )

}

export default MyApp

/*
 * @Author: lyc
 * @Date: 2021-02-05 23:14:39
 * @LastEditors: lyc
 * @LastEditTime: 2021-02-06 17:16:13
 * @Description: file content
 */
import React, { useEffect, useState } from 'react'
import { inject, observer } from 'mobx-react'
import { loadGetInitialProps, ST } from 'next/dist/next-server/lib/utils'
import Head from 'next/head'
import { render } from 'react-dom';
import dynamic from 'next/dynamic'
// @inject('store') @observer
// export default class Home extends React.Component {

//   constructor(props) {
//     super(props)
//   }

//   render() {
//     console.log(this.props.store);
//     let { store } = this.props
//     return (
//       <div>
//         {store.num}
//         {this.props.store.num}
//       </div>
//     )
//   }

// }



/**       根据store.bol动态选择jsx-style里面的样式       */
// const Test = inject('store')(observer(({ store, idTest }) => {
//   console.log(store.bol);
//   return (
//     <div>
//       <button onClick={() => store.alterBol()} >改变背景颜色</button>
//       { store.bol}
//       {store.bol ? (<style jsx="true">
//         {` body {
//           background-color: aqua;
//         }`}
//       </style>) : (<style jsx="true">
//         {` body {
//           background-color: red;
//         }`}
//       </style>)}
//     </div >
//   )
// }))

/**    动态导入css样式      */
const Test = inject('store')(observer(({ store, idTest }) => {
  const [stylePath, setPath] = useState('testDynamic.css')
  console.log(store.bol);

  const handleButton = () => {
    store.alterBol();
    if (store.bol) {
      setPath('testDynamic.css')
    } else {
      setPath('testDynamic2.css')
    }
  }
  return (
    <div>
      {/* <DynamicCss /> */}
      <link
        rel="stylesheet"
        type="text/css"
        href={stylePath} />

      <button onClick={() => handleButton()} >改变背景颜色</button>

    </div >
  )
}))
Test.getInitialProps = async (context) => {
  return {
    idTest: 5
  }
}
export default Test;






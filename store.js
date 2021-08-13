/*
 * @Author: lyc
 * @Date: 2021-02-06 00:28:42
 * @LastEditors: lyc
 * @LastEditTime: 2021-02-06 03:33:04
 * @Description: file content
 */

import { action, makeAutoObservable, observable } from "mobx";


class Store {

  constructor() {
    makeAutoObservable(this)
  }
  num = 3
  bol = false
  alterNum(news) {
    this.num = news
  }
  alterBol() {
    this.bol = !this.bol
  }
}

const store = new Store()
export default store;
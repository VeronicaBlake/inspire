import Todo from "./Models/Todo.js"
import Image from "./Models/Image.js"
import Quote from "./Models/Quote.js"
import Weather from "./Models/Weather.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Todo} */
  todos = []
  /** @type {Image} */
  images = null
  /** @type {Quote} */
  quotes = null
  /** @type {Weather} */
  weathers = null
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})

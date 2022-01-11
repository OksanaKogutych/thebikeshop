import { tns } from "../../node_modules/tiny-slider/src/tiny-slider"


export default class Banner {
    constructor(option) {
      this.option = option;      
    }
    init (){
      return tns(this.option)
    }
  }




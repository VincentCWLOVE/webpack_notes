/*
* Created by Vincent on 18/6/6
* Email:438419787@qq.com
* Github:https://github.com/VincentCWLOVE/
*/

import "./css/index.css"
import "./less/index.less"



console.log("hello,webpack---")

let name = "vincent"

setTimeout(()=>{
    console.log("es6")
},1000)

let array = [1,2,3,5]

let new_array = [...array]


import Person from "./code/1.js"

let p = new Person("vincent",18)
p.speak()
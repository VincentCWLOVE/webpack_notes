/*
* Created by Vincent on 18/6/7
* Email:438419787@qq.com
* Github:https://github.com/VincentCWLOVE/
*/

class Person {
    constructor (name,age){
        this.name = name
        this.age = age
    }
    speak(){
        console.log(`${this.name} is speaking`)
    }
}

export default Person
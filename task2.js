const we = {
    are: {
        the: {
            best: "Koda"
        }
    }
}
// DESTRUCTURING 1
const {are:{the:{best}}} = we
console.log(best)

const hello = {
    world : "Hello World"
}
// DESTRUCTURING 2
const {world} = hello
console.log(world)

const obj = {
    str : [0,1,2,[0,[0,1,{man:[{tech:{academy : "Tech Academy"}}] }
    ]]]
}
// DESTRUCTURING 3
const {str: [a,b,c,[x,[p,q,{man:[{tech:{academy}}] }]]]} = obj
console.log(academy)

const my = [{favourite : [0,1,2, {fruit : {is : "Apple"}}]
}]
// DESTRUCTURING 4
const {favourite : [d,e,f,{fruit : {is}}]} = my[0]
console.log(is)

// const num = {
//     first : [0,30],
//     second : [0,1,2]
// }   

// console.log(we.are.the.best)
// console.log(hello.world)
// console.log(obj.str[3][1][2].man[0].tech.academy)
// console.log(my[0].favourite[3].fruit.is)
// console.log(num.first[1]+num.second[2])
// console.log(my[0].favourite[3])
/**
 * loops
 * 1.for loop
 * 2.for each
 * 3.while
 * 4.map
 */

//1.for loop

const students = [{name:'Josh', field:'Doctor'},
{name:'John', field:'Doctor'},
{name:'Jordon', field:'producer'},
{name:'Jason', field:'track star'},
{name:'Joe', field:'rapper'},
{name:'Jake', field:'capper'},
]

for(let i = 0; i < students.length; i++){
    console.log(students[i].name)
}

students.forEach((item,index) => {
    console.log(index, '->', item)
})

//3. map
students.map((item, index) => {
    console.log(index, '->', item)
})


'use strict'
console.log("hellow!!!!!!!!!!!!")
var data=[
    {id:1,date:"",room_id:1,staff_names:["x","y"]},
    {id:2,date:"",room_id:1,staff_names:["x","y"]},
    {id:3,date:"",room_id:1,staff_names:["x","y"]},    
]
data.forEach(element => {
    console.log(element.id +" " +element.room_id)
});        
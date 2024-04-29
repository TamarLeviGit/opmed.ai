'use strict';

//טעינת המודול המאפשר יצירת שרת
var myexpress=require('express')
//יצירת מופע מסוג אקפרסס
var app=myexpress()
//מודול המאפשר לקבל נתונים מהלקוח לשרת
var bodyParser=require('body-parser')
//שיוך המופע לשרת שיצרנו
app.use(bodyParser())
// //נתינת פורט להאזנה

// //טעינת הקונטרוללר
// var personcontroler=require('./controllers/personController')
// //שיוך הקונטרולר לשרת
// // app.use('/כתובת שנבחר לקונטרולר',personcontroler)
// app.use('/person',personcontroler)

// var studentController=require('./controllers/students')
// app.use('/student',studentController)

//אפשור גישה מהלקוח
var cors=require('cors')
app.use(cors())
app.listen(4200,()=>{
    console.log("run!!!!!!!!!!!!!!!!!!!");
})

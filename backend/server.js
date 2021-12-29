const express=require('express')

const app=express()

const db=require('./db')
const Todo=require('./todo')
app.use(express.json())
app.get('/',(req,res)=>{
   
   res.json('GET /is working')

})

   app.get('/tasks',(req,res)=>{
   Todo.find({},(err,data)=>{
   if(err){
      console.log('ERROR: ',err);
   }else{
      res.json(data)
   }
 
})

   })


   app.post("/tasks", (req, res) => {
        console.log('25:',req.body);
      Todo.create(req.body,(err, newTask) => {
        if (err) {
          console.log("ERRor", err);
       
        } else {
         res.status(201).json(newTask);
        }
      });
    });


    app.delete("/tasks/:id", (req, res) => {
      console.log('37:',req.params.id);
      Todo.deleteOne({ _id: req.params.id }, (err, deleteObj) => {
        if (err) {
          console.log("ERRor", err);
   
        } else {
          deleteObj.deletedCount === 1
           ? res.json("Delete one todo successfully")
          
            : res.status(200).json("this is not found");
          
        }

      });
    });
    
    app.put("/users/:id", (req, res) => {
      // console.log(req.params)
      Todo.updateOne(
        { _id: req.params.id },
        { title: req.body.newTitle },
        (err, updateObj) => {
          if (err) {
            console.log("ERRor", err);
            res.status(400).json(err);
          } else {
            console.log(updateObj);
              updateObj.modifiedCount === 1
             ? res.json("Update one todo successfully")
           
             : res.status(404).json("This todo is not");
            
          }
        }
      );
    });
    



app.listen(5000,()=>{
 console.log('SERVER IS WORKING');
})
  
if(process.env.NODE_ENV == "production"){
    module.exports = {
        mongoURI: "mongodb+srv://admin:admin@cluster0.triop.mongodb.net/db-todolist?retryWrites=true&w=majority",
        options: { 
            useUnifiedTopology: true 
        }
    }
}
else{
    module.exports = {
        mongoURI: "mongodb://localhost/db-todolist"
    }
}
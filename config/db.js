  
if(process.env.NODE_ENV == "production"){
    //module.exports = {mongoURI: "mongodb://admin:admin123@ds037067.mlab.com:37067/db-todolist"}
    module.exports = {mongoURI: "mongodb+srv://admin:admin@cluster0.tzavo.mongodb.net/db-todolist?retryWrites=true&w=majority"}
}
else{
    module.exports = {mongoURI: "mongodb://localhost/db-todolist"}
}
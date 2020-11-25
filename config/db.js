  
if(process.env.NODE_ENV == "production"){
    module.exports = {mongoURI: "mongodb://admin:admin123@ds037067.mlab.com:37067/db-todolist"}
}
else{
    module.exports = {mongoURI: "mongodb://localhost/db-todolist"}
}
const  Homepage = require('./controller/index')
const Login = require('./controller/login')


module.exports  = (app) =>{
app.get('/ekle', Homepage.homePage)
app.get('/login', Login.login)
app.post('/login', Login.login )
}

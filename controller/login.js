module.exports = {
    login(req, res){
        console.log(req.body.input)
        res.render('login')
    }
}
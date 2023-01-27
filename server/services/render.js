// instaed of the callback function in router.js

exports.homeRoute = (req,res) => {
    res.render('/')
}

exports.add_user = (req, res) => {
    res.render('add-user')
}

exports.update_user = (req, res) => {
    res.render('update_user')
}

const express = require('express')
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.set('view engine', 'ejs')

app.get('/', function(req, res) {
    res.render('pages/index')
})

app.get('/about', function(req, res) {
    res.render('pages/about')
})

const posthandler = require('./post_handler.js')

app.route('/api/v1/post')
    .get(posthandler.index)
    .post(posthandler.addIndex)
app.route('/post/:post_id') 
    .get(posthandler.get)
    .post(posthandler.add)
    .put(posthandler.edit)
    .delete(posthandler.delete)

app.listen(3000);
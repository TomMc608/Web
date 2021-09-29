const express = require('express')
const path = require('path')
const app = express()
const port = 3000
const expressLayouts = require('express-ejs-layouts')

app.set("view engine","ejs");
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'assets')))

app.get('/',(req, res) => {
    let user = {"name":"Tom"}
    res.render('index')
})
app.get('/home', (req, res) => res.render('index'))
app.get('/user', (req, res) => res.render('Hello User'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


app.use(expressLayouts)
const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 3000
const expressLayouts = require('express-ejs-layouts')
app.use(expressLayouts)
app.set("view engine","ejs");
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'assets')))

app.get('/',(req, res) => {
    let user = {"name":"Tom"}
    res.render('index')
})
app.get('/API', (req, res) => res.render('API'))



app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))



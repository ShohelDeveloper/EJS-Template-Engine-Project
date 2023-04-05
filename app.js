const express = require('express')
const morgan = require('morgan')

const app = express()

app.set('view engine', 'ejs')

app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/about', (req, res) => {
    res.render('pages/about.ejs',{title:'I am about page'})
})

app.get('/help', (req, res) => {
    res.render('pages/help.ejs',{title:'I am help page'})
})

app.get('/', (req, res) => {
    let post = {
        title: 'Test Title',
        body: 'Test Body',
        published:false
    }

    let posts = [
        {title:'Title One',author:'shohel rana'},
        {title:'Title Two',author:'shohel rana'},
        {title:'Title Three',author:'shohel rana'},
        {title:'Title Four',author:'shohel rana'}
    ]
    res.render('pages/index', { title: "EJS is an awesome template engine",post, posts })
    


})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
})
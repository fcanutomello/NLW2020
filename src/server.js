

//se nao, nao adicionar

const express = require('express')
const server = express()
const nunjucks = require('nunjucks')
const {pageLanding, pageStudy, pageGiveClasses, saveClasses} = require('./pages')

//configurar nunjucks (template engine)
nunjucks.configure('src/views', {
    express:server,
    noCache:true,
})


//inicio e configuracao do servidor 
server
//receber os dados do req,body
.use(express.urlencoded({extended: true}))
//configurar arquivos estaticos, css, arquivos, imagens
.use(express.static("public"))
//
//rotas da aplicacao
.get("/",pageLanding)
.get("/study",pageStudy)
.get("/give-classes",pageGiveClasses)
.post("/save-classes",saveClasses)
.listen(5500)

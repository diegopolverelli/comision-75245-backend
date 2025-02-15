const http = require("http")
const url=require("url")

const PORT = 3000

const server = http.createServer((req, res) => {
    console.log(req.url)
    let parseURL=url.parse(req.url, true)
    console.log(parseURL)

    // if(req.url=="/contacto"){
    if(parseURL.pathname=="/contacto"){
        let {nombre} = parseURL.query
        if(!nombre) nombre=""
        // res.setHeader("Content-Type", "text/html; charset=UTF-8")
        res.setHeader("Content-Type", "text/html; charset=UTF-8")
        return res.end("<h1>Página de contacto...!!!"+nombre+"</h1>")
    }

    res.end(`Hola...!!!`)
})

server.listen(PORT, () => console.log(`Server escuchando en puerto ${PORT}...!!!`))
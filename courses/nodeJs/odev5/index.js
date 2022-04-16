import http from "http";

const server = http.createServer( (req,resp) => {
    
    const url = req.url;

    console.log(url)

    if( url === '/')  { 
        resp.writeHead(200,{'Content-Type': 'text/html;  charset=utf-8'})
        resp.write("<h2>INDEX SAYFASINA HOŞGELDİNİZ</h2>") 
    } else if ( url === '/about') {
        resp.writeHead(200,{'Content-Type': 'text/html;  charset=utf-8'})
        resp.write("<h2>ABOUT SAYFASINA HOŞGELDİNİZ</h2>")
    } else if ( url === '/contact') {
        resp.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'})
        resp.write("<h2>CONTACT SAYFASINA HOŞGELDİNİZ</h2>")
    } else {
        resp.writeHead(404,{'Content-Type': 'text/html; charset=utf-8'})
        resp.write("404 SAYFA BULUNAMADI")
    }
        console.log('Bir istek gönderildi.')
   // resp.write("Merhaba")
    resp.end()
})


const port = 5000
server.listen(port, () => {
    console.log(`Sunucu port  ${port} de başlatıldı`)
})
import { Router } from "express";
import Koa from "koa" ;

const app = new Koa()
const port = 3000

app.use(async ctx => {
  
  const url = ctx.url;
  console.log(url)

  if(url === '/') {
    ctx.response.body ="<h2> index sayfasına hoşgeldiniz"
    ctx.response.status = 200;
  } else if(url === '/about') {
    ctx.response.body ="<h2> about sayfasına hoşgeldiniz"
    ctx.response.status = 200;
  } else if(url === '/contact') {
    ctx.response.body ="<h2> contact sayfasına hoşgeldiniz"
    ctx.response.status = 200;
  } else {
    ctx.response.body ="<h2> sayfa bulunamadı"
    ctx.response.status = 404;
  }
  
});

app.listen(port);


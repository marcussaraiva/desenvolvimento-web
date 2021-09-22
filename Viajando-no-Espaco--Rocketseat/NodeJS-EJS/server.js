const express = require('express');
const app = express();
//  Setando o EJS como ferramenta para renderizar a página
app.set("view engine", "ejs");
//  Setando a rota
app.get("/", function (req, res){
    const items = [
        {
            title: "N",
            message: "ecessário foco"
        },
        {
            title: "O",
            message: " estudo é a solução"
        },
        {
            title: "D",
            message: "eterminação é a chave"
        },
        {
            title: "E",
            message: "sforço será recompensado"
        }
    ];
    
    const subtitle = "Uma linguagem de modelagem para criação de página HTML";

    res.render("pages/index", {
        qualitys: items,
        subtitle: subtitle
    });
});

app.get("/sobre", function (req, res){
    res.render("pages/about");
});

app.listen(8080);
console.log("Server on");
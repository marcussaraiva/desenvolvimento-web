const questions = [
    "O que eu aprendi hoje?",
    "O que me deixou chateado?",
    "O que eu posso fazer para melhorar?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas eu ajudei hoje?"
];

const ask = (index = 0) => {
    process.stdout.write(`\n${questions[index]}\n> `);
};

ask();

const answers = [];

process.stdin.on("data", data => {
    answers.push(data.toString().trim());
    if (answers.length < questions.length) {
        ask(answers.length)
    } else {
        process.exit();
    }
});

process.on("exit", () =>{
    console.log(`
        Olá William,\n\n
        Hoje você aprendeu:\n
        ${answers[0]}\n
        E ficou chateado com:\n
        ${answers[1]}\n
        Porém, você pode melhorar desta forma:\n
        ${answers[2]}\n
        E como tudo tem seu lado bom e ruim, você também me contou que ficou feliz por:\n
        ${answers[3]}\n
        E que também fez sua parte ajudando ${answers[4]} pessoa(s)!\n\n
        Você já está no caminho certo!\n
    `);
});
const booksByCategory = [
    {
        category: 'Riqueza',
        books: [
            {
                title: 'Os segredos da mente milionária',
                author: 'T. Harv Eker'
            },
            {
                title: 'O homem mais rico da babilônia',
                author: 'George S. Clason'
            },
            {
                title: 'Pai rico, pai pobre',
                author: 'Robert T. Kiyosaki e Sharon L. Lechter'
            }
        ]
    },
    {
        category: 'Inteligência Emocional',
        books: [
            {
                title: 'Você é insubstituível',
                author: 'Augusto Cury'
            },
            {
                title: 'Ansiedade - como enfrentar o mal do século',
                author: 'Augusto Cury'
            },
            {
                title: 'Os 7 hábitos das pessoas altamente eficazes',
                author: 'Stephen R. Covey'
            }
        ]
    }
];
const total_category = booksByCategory.length;

function countAuthor() {
    let authors = [];

    booksByCategory.forEach(element => {
        element.books.forEach(element => {
            if (authors.indexOf(element.author) == -1) {
                authors.push(element.author);
            }
        });
    });
    
    return authors.length;
}

function searchByAuthor(author){
    let titles = [];
    booksByCategory.forEach(element => {
        element.books.forEach(element => {
            if(element.author === author){
                titles.push(element.title);
            }
        });
    });
    return titles;
}

console.log(`O total de categorias é: ${total_category}`);
booksByCategory.forEach(element => {
    console.log(`Total de Livros da categoria ${element.category} é: ${element.books.length}`);
});

console.log(`O número de autores é: ${countAuthor()}`);

const author = 'Augusto Cury'
console.log(`Os livros de ${author} é/são:\n${searchByAuthor(author).join(',\n')}`);
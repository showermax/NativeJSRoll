const movies = {
    "The Shawshank Redemption": {
        year: 1994,
        director: "Frank Darabont",
        genre: ["Drama"],
        description:
            "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    },
    "The Godfather": {
        year: 1972,
        director: "Francis Ford Coppola",
        genre: ["Crime", "Drama"],
        description:
            "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
    },
    "The Dark Knight": {
        year: 2008,
        director: "Christopher Nolan",
        genre: ["Action", "Crime", "Drama"],
        description:
            "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    },
    "12 Angry Men": {
        year: 1957,
        director: "Sidney Lumet",
        genre: ["Drama"],
        description:
            "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
    },
    "Schindler's List": {
        year: 1993,
        director: "Steven Spielberg",
        genre: ["Biography", "Drama", "History"],
        description:
            "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
    },
    "The Lord of the Rings: The Return of the King": {
        year: 2003,
        director: "Peter Jackson",
        genre: ["Adventure", "Drama", "Fantasy"],
        description:
            "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
    },
    "Pulp Fiction": {
        year: 1994,
        director: "Quentin Tarantino",
        genre: ["Crime", "Drama"],
        description:
            "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    },
    "The Matrix": {
        year: 1999,
        director: "Lana Wachowski, Lilly Wachowski",
        genre: ["Action", "Sci-Fi"],
        description:
            "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    },
    "Forrest Gump": {
        year: 1994,
        director: "Robert Zemeckis",
        genre: ["Drama", "Romance"],
        description:
            "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold through the perspective of an Alabama man with an IQ of 75.",
    },
    "Inception": {
        year: 2010,
        director: "Christopher Nolan",
        genre: ["Action", "Adventure", "Sci-Fi"],
        description:
            "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    },
};

//1. Получить список всех фильмов жанра "Drama"
//  console.log(Object.values(movies).filter(el=>el.genre.includes('Drama')))

//2. Получить список всех фильмов, выпущенных в 1994 году.
// console.log(Object.values(movies).filter(el=>el.year===1994))

// 3. Получить список всех фильмов, режиссером которых является Christopher Nolan
// console.log(Object.values(movies).filter(el=>el.director==="Christopher Nolan"))
//4. Дан список из 3-х объектов, необходимо из списка объектов сделать асоциативный массив. Для создания такого массива,
// необходимо взять title в качестве ключа.

const games = [
    {
        title: "Ведьмак 3: Дикая Охота",
        developer: "CD Projekt Red",
        year: 2015,
        platform: "Multiplatform",
        genre: ["Action RPG"],
        description: "Ведьмак 3: Дикая Охота - это культовая ролевая игра, которая перенесет вас в фэнтезийный мир, полный опасностей и приключений. Игроку предстоит выступить в роли профессионального охотника на чудовищ и путешественника, пытающегося разгадать тайны своего прошлого.",
    },
    {
        title: "Cyberpunk 2077",
        developer: "CD Projekt Red",
        year: 2020,
        platform: "Multiplatform",
        genre: ["Action RPG"],
        description: "Cyberpunk 2077 - это открытый мир в стиле киберпанк, где игроки смогут погрузиться в темный, опасный мир будущего. Игра предлагает огромную свободу действий, множество вариантов развития сюжета и уникальные персонажи.",
    },
    {
        title: "Dark Souls",
        developer: "FromSoftware",
        year: 2011,
        platform: "Multiplatform",
        genre: ["Action RPG"],
        description: "Dark Souls - это экшен-RPG, который известен своей сложностью и требовательностью к игроку. Он отправляет вас в мрачный фэнтезийный мир, полный опасностей и загадок. Игра предлагает множество боссов, которых нужно победить, а также уникальные локации, которые можно исследовать.",
    },
];

//5. Получить список названий всех фильмов.
// let newArr=[]
// for (let i = 0; i < games.length; i++) {
//     newArr.push(games[i].title)
// }
// console.log(newArr)
// 6. Получить список всех режиссеров.


// 7. Получить список фильмов, вышедших в 90-х годах.
let array=[]
for (const key in movies) {
    if (movies[key].year>=1990 && movies[key].year<2000)
        array.push(key)
}
console.log(array)
// 8. Получить список фильмов, отсортированных по году выхода.

// 9.Напишите функцию, которая принимает объект, состоящий из ключей и значений, и возвращает новый объект, в котором
// ключи и значения поменяны местами.
const obj = { name: 'John', age: 30 };

const swapObjectKeysAndValues = (obj) => {
    //писать тут
}

const swappedObj = swapObjectKeysAndValues(obj);
// console.log(swappedObj); // { John: 'name', '30': 'age' }

// 10. Напишите функцию, которая принимает массив объектов и возвращает новый объект, в котором ключами являются
// значения определенного свойства объектов, а значениями являются массивы объектов, у которых это свойство имеет такое значение.
const arr = [
    { name: 'John', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Alice', age: 30 },
];
const groupObjectsByProperty =(arr, age)=>{
    //писать тут
}
const groupedObj = groupObjectsByProperty(arr, 'age');
// console.log(groupedObj);
//
// {
//   '25': [{ name: 'Bob', age: 25 }],
//   '30': [
//     { name: 'John', age: 30 },
//     { name: 'Alice', age: 30 },
//   ]
// }


// 11. Напишите функцию, которая принимает объект и возвращает новый объект, в котором все значения, являющиеся строками,
// приведены к верхнему регистру.
// const obj = { name: 'John', age: 30, job: 'programmer' };
const upperCaseObjectValues =(obj)=> {
    //писать тут
}
// const upperCasedObj = upperCaseObjectValues(obj);
// console.log(upperCasedObj); // { name: 'JOHN', age: 30, job: 'PROGRAMMER' }


// 12.Напишите функцию, которая принимает объект и возвращает новый объект, в котором все значения, являющиеся числами,
// увеличены на определенное число.

const increaseObjectValues =(ob, n)=> {
    //писать тут
}
// const obj = { x: 5, y: 10, z: 15 };
// const increasedObj = increaseObjectValues(obj, 3);
// console.log(increasedObj); // { x: 8, y: 13, z: 18 }




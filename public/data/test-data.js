export default {
    state: 0,
    currentTest: null,
    name: "COOL Quiz",
    tests: [
        {
            title: "Matematyka",
            questions: [
                {
                    timeSpent: 0,
                    question: "Jaka jest suma kątów wewnętrznych trójkąta?",
                    answers: [
                        { content: "90 stopni", id: "first", correctAnswer: false },
                        { content: "120 stopni", id: "second", correctAnswer: false },
                        { content: "180 stopni", id: "third", correctAnswer: true },
                        { content: "360 stopni", id: "fourth", correctAnswer: false },
                    ],
                },
                {
                    timeSpent: 0,
                    question: "Rozwiąż równanie: 2x - 5 = 3.",
                    answers: [
                        { content: "x = -1", id: "first", correctAnswer: false },
                        { content: "x = 2", id: "second", correctAnswer: false },
                        { content: "x = 4", id: "third", correctAnswer: true },
                        { content: "x = 8/3", id: "fourth", correctAnswer: false },
                    ],
                },
                {
                    timeSpent: 0,
                    question: "Ile wynosi pierwiastek kwadratowy z liczby 25?",
                    answers: [
                        { content: "2", id: "first", correctAnswer: false },
                        { content: "5", id: "second", correctAnswer: true },
                        { content: "-5", id: "third", correctAnswer: true },
                        { content: "-2", id: "fourth", correctAnswer: false },
                    ],
                },
                {
                    timeSpent: 0,
                    question: "Które z poniższych liczby są liczbami pierwszymi?",
                    answers: [
                        { content: "12", id: "first", correctAnswer: false },
                        { content: "7", id: "second", correctAnswer: true },
                        { content: "15", id: "third", correctAnswer: false },
                        { content: "21", id: "fourth", correctAnswer: false },
                    ],
                },
                {
                    timeSpent: 0,
                    question: "Oblicz pole prostokąta o bokach długości 8 cm i 12 cm.",
                    answers: [
                        { content: "20 cm²", id: "first", correctAnswer: false },
                        { content: "48 cm²", id: "second", correctAnswer: false },
                        { content: "96 cm²", id: "third", correctAnswer: true },
                        { content: "120 cm²", id: "fourth", correctAnswer: false },
                    ],
                },
            ],
        },
        {
            title: "Programowanie",
            questions: [
                {
                    timeSpent: 0,
                    question: "Co to jest język programowania Python?",
                    answers: [
                        { content: "Rodzaj węża", id: "first", correctAnswer: false },
                        {
                            content: "Język programowania",
                            id: "second",
                            correctAnswer: true,
                        },
                        {
                            content: "Nazwa firmy produkującej oprogramowanie",
                            id: "third",
                            correctAnswer: false,
                        },
                        {
                            content: "Typ maszyny do pisania",
                            id: "fourth",
                            correctAnswer: false,
                        },
                    ],
                },
                {
                    timeSpent: 0,
                    question: "Jak nazywa się narzędzie służące do zarządzania wersjami kodu źródłowego?",
                    answers: [
                        { content: "Debugger", id: "first", correctAnswer: false },
                        { content: "Edytor tekstu", id: "second", correctAnswer: false },
                        {
                            content: "System kontroli wersji",
                            id: "third",
                            correctAnswer: true,
                        },
                        { content: "Kompilator", id: "fourth", correctAnswer: false },
                    ],
                },
                {
                    timeSpent: 0,
                    question: "Co oznacza skrót API w kontekście programowania?",
                    answers: [
                        {
                            content: "Aplikacja internetowa",
                            id: "first",
                            correctAnswer: false,
                        },
                        {
                            content: "Automatyczne przetwarzanie informacji",
                            id: "second",
                            correctAnswer: false,
                        },
                        {
                            content: "Interfejs programowania aplikacji",
                            id: "third",
                            correctAnswer: true,
                        },
                        {
                            content: "Asynchroniczne programowanie internetowe",
                            id: "fourth",
                            correctAnswer: false,
                        },
                    ],
                },
                {
                    timeSpent: 0,
                    question: "Co to jest debugging?",
                    answers: [
                        {
                            content: "Proces programowania",
                            id: "first",
                            correctAnswer: false,
                        },
                        {
                            content: "Usuwanie błędów w kodzie",
                            id: "second",
                            correctAnswer: true,
                        },
                        {
                            content: "Tworzenie interfejsu użytkownika",
                            id: "third",
                            correctAnswer: false,
                        },
                        { content: "Analiza danych", id: "fourth", correctAnswer: false },
                    ],
                },
                {
                    timeSpent: 0,
                    question: "Co to jest pętla for w programowaniu?",
                    answers: [
                        {
                            content: "Zmienna przechowująca dane",
                            id: "first",
                            correctAnswer: false,
                        },
                        {
                            content: "Instrukcja warunkowa",
                            id: "second",
                            correctAnswer: false,
                        },
                        { content: "Struktura danych", id: "third", correctAnswer: false },
                        {
                            content: "Fragment kodu wykonywany wielokrotnie",
                            id: "fourth",
                            correctAnswer: true,
                        },
                    ],
                },
            ],
        },
        {
            title: "Religia",
            questions: [
                {
                    timeSpent: 0,
                    question: "Kto jest uznawany za założyciela buddyzmu?",
                    answers: [
                        { content: "Jezus Chrystus", id: "first", correctAnswer: false },
                        { content: "Mahawira", id: "second", correctAnswer: false },
                        {
                            content: "Budda Siddhartha Gautama",
                            id: "third",
                            correctAnswer: true,
                        },
                        { content: "Mohamed", id: "fourth", correctAnswer: false },
                    ],
                },
                {
                    timeSpent: 0,
                    question: "Które z poniższych świąt jest obchodzone przez wyznawców hinduizmu?",
                    answers: [
                        { content: "Boże Narodzenie", id: "first", correctAnswer: false },
                        { content: "Diwali", id: "second", correctAnswer: true },
                        { content: "Ramadan", id: "third", correctAnswer: false },
                        { content: "Hanuka", id: "fourth", correctAnswer: false },
                    ],
                },
                {
                    timeSpent: 0,
                    question: "Co to jest Koran?",
                    answers: [
                        { content: "Biblia hinduizmu", id: "first", correctAnswer: false },
                        {
                            content: "Święta księga islamu",
                            id: "second",
                            correctAnswer: true,
                        },
                        { content: "Księga Mormona", id: "third", correctAnswer: false },
                        { content: "Stary Testament", id: "fourth", correctAnswer: false },
                    ],
                },
                {
                    timeSpent: 0,
                    question: "Które z poniższych miast uważane jest za święte przez wyznawców judaizmu?",
                    answers: [
                        { content: "Jerozolima", id: "first", correctAnswer: true },
                        { content: "Mekka", id: "second", correctAnswer: false },
                        { content: "Varanasi", id: "third", correctAnswer: false },
                        { content: "Rzym", id: "fourth", correctAnswer: false },
                    ],
                },
                {
                    timeSpent: 0,
                    question: "Kto jest głównym prorokiem w islamie?",
                    answers: [
                        { content: "Budda", id: "first", correctAnswer: false },
                        { content: "Jezus Chrystus", id: "second", correctAnswer: false },
                        { content: "Mohamed", id: "third", correctAnswer: true },
                        { content: "Abraham", id: "fourth", correctAnswer: false },
                    ],
                },
            ],
        },
        {
            title: "Anime",
            questions: [
                {
                    timeSpent: 0,
                    question: "Kto jest twórcą słynnego anime 'Naruto'?",
                    answers: [
                        { content: "Hayao Miyazaki", id: "first", correctAnswer: false },
                        { content: "Masashi Kishimoto", id: "second", correctAnswer: true },
                        { content: "Mamoru Hosoda", id: "third", correctAnswer: false },
                        { content: "Isao Takahata", id: "fourth", correctAnswer: false },
                    ],
                },
                {
                    timeSpent: 0,
                    question: "Co oznacza termin 'manga' w kontekście japońskiej kultury?",
                    answers: [
                        { content: "Anime filmowe", id: "first", correctAnswer: false },
                        { content: "Komiks japoński", id: "second", correctAnswer: true },
                        {
                            content: "Tradycyjna herbata",
                            id: "third",
                            correctAnswer: false,
                        },
                        { content: "Styl sztuk walki", id: "fourth", correctAnswer: false },
                    ],
                },
                {
                    timeSpent: 0,
                    question: "Które z poniższych anime należy do gatunku 'mecha'?",
                    answers: [
                        { content: "One Piece", id: "first", correctAnswer: false },
                        { content: "Gundam Wing", id: "second", correctAnswer: true },
                        { content: "Death Note", id: "third", correctAnswer: false },
                        { content: "My Hero Academia", id: "fourth", correctAnswer: false },
                    ],
                },
                {
                    timeSpent: 0,
                    question: "Które anime opowiada historię o chłopcu, który staje się mistrzem Pokemonów?",
                    answers: [
                        { content: "Dragon Ball", id: "first", correctAnswer: false },
                        { content: "One Punch Man", id: "second", correctAnswer: false },
                        { content: "Naruto", id: "third", correctAnswer: false },
                        { content: "Pokémon", id: "fourth", correctAnswer: true },
                    ],
                },
                {
                    timeSpent: 0,
                    question: "Co to jest 'cosplay' w kontekście kultury anime?",
                    answers: [
                        {
                            content: "Typ japońskiego jedzenia",
                            id: "first",
                            correctAnswer: false,
                        },
                        { content: "Sztuka origami", id: "second", correctAnswer: false },
                        {
                            content: "Ubieranie się w stroje postaci z anime",
                            id: "third",
                            correctAnswer: true,
                        },
                        {
                            content: "Japońska sztuka walki",
                            id: "fourth",
                            correctAnswer: false,
                        },
                    ],
                },
            ],
        },
    ],
};

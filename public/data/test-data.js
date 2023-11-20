export default {
    name: "COOL Quiz",
    tests: [{
            title: "Matematyka",
            questions: [
                {
                    timeSpent: 0,
                    question: "Jaka jest suma kątów wewnętrznych trójkąta?",
                    answers: [
                        { content: "90 stopni", id: "first", correctAnswer: false },
                        { content: "120 stopni", id: "second", correctAnswer: false },
                        { content: "180 stopni", id: "third", correctAnswer: true },
                        { content: "360 stopni", id: "fourth", correctAnswer: false }
                    ]
                },
                {
                    timeSpent: 0,
                    question: "Rozwiąż równanie: 2x - 5 = 3.",
                    answers: [
                        { content: "x = -1", id: "first", correctAnswer: false },
                        { content: "x = 2", id: "second", correctAnswer: false },
                        { content: "x = 4", id: "third", correctAnswer: true },
                        { content: "x = 8/3", id: "fourth", correctAnswer: false }
                    ]
                },
                {
                    timeSpent: 0,
                    question: "Ile wynosi pierwiastek kwadratowy z liczby 25?",
                    answers: [
                        { content: "2", id: "first", correctAnswer: false },
                        { content: "5", id: "second", correctAnswer: true },
                        { content: "-5", id: "third", correctAnswer: true },
                        { content: "-2", id: "fourth", correctAnswer: false }
                    ]
                },
                {
                    timeSpent: 0,
                    question: "Które z poniższych liczby są liczbami pierwszymi?",
                    answers: [
                        { content: "12", id: "first", correctAnswer: false },
                        { content: "7", id: "second", correctAnswer: true },
                        { content: "15", id: "third", correctAnswer: false },
                        { content: "21", id: "fourth", correctAnswer: false }
                    ]
                },
                {
                    timeSpent: 0,
                    question: "Oblicz pole prostokąta o bokach długości 8 cm i 12 cm.",
                    answers: [
                        { content: "20 cm²", id: "first", correctAnswer: false },
                        { content: "48 cm²", id: "second", correctAnswer: false },
                        { content: "96 cm²", id: "third", correctAnswer: true },
                        { content: "120 cm²", id: "fourth", correctAnswer: false }
                    ]
                }
            ]
        }]
};

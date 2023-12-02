import { type QuizData } from '../../interfaces/quiz.interface'

const it: QuizData = {
    title: 'Programowanie',
    questions: [
        {
            timeSpent: 0,
            question: 'Co to jest język programowania Python?',
            correctAnswer: 2,
            answers: [
                { content: 'Rodzaj węża', id: 1 },
                {
                    content: 'Język programowania',
                    id: 2
                },
                {
                    content: 'Nazwa firmy produkującej oprogramowanie',
                    id: 3
                },
                {
                    content: 'Typ maszyny do pisania',
                    id: 4
                }
            ]
        },
        {
            timeSpent: 0,
            question:
                'Jak nazywa się narzędzie służące do zarządzania wersjami kodu źródłowego?',
            correctAnswer: 3,
            answers: [
                { content: 'Debugger', id: 1 },
                { content: 'Edytor tekstu', id: 2 },
                {
                    content: 'System kontroli wersji',
                    id: 3
                },
                { content: 'Kompilator', id: 4 }
            ]
        },
        {
            timeSpent: 0,
            question: 'Co oznacza skrót API w kontekście programowania?',
            correctAnswer: 3,
            answers: [
                {
                    content: 'Aplikacja internetowa',
                    id: 1
                },
                {
                    content: 'Automatyczne przetwarzanie informacji',
                    id: 2
                },
                {
                    content: 'Interfejs programowania aplikacji',
                    id: 3
                },
                {
                    content: 'Asynchroniczne programowanie internetowe',
                    id: 4
                }
            ]
        },
        {
            timeSpent: 0,
            question: 'Co to jest debugging?',
            correctAnswer: 2,
            answers: [
                {
                    content: 'Proces programowania',
                    id: 1
                },
                {
                    content: 'Usuwanie błędów w kodzie',
                    id: 2
                },
                {
                    content: 'Tworzenie interfejsu użytkownika',
                    id: 3
                },
                { content: 'Analiza danych', id: 4 }
            ]
        },
        {
            timeSpent: 0,
            question: 'Co to jest pętla for w programowaniu?',
            correctAnswer: 4,
            answers: [
                {
                    content: 'Zmienna przechowująca dane',
                    id: 1
                },
                {
                    content: 'Instrukcja warunkowa',
                    id: 2
                },
                { content: 'Struktura danych', id: 3 },
                {
                    content: 'Fragment kodu wykonywany wielokrotnie',
                    id: 4
                }
            ]
        }
    ]
}
export default it

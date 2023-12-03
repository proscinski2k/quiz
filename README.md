# Aplikacja Cool Quiz

Aplikacja typu quiz została napisana w TypeScript. Do stylizacji została wykorzystana biblioteka Tailwind z rozszerzeniem DaisyUI. Program umożliwia zarządzanie widokami, wybór quizów, podgląd wyników oraz śledzenie czasu i poprawności odpowiedzi.

## Uruchamianie

Aplikację można uruchomić za pomocą Visual Studio Code i rozszerzenia Open with Live Server. Dodatkowo, do rozwijania aplikacji używane są polecenia:

```bash
npm run start:tailwind
npm run start:typescript
```

## Instrukcja uruchomienia

-   Sklonuj repozytorium.
-   Zainstaluj wymagane zależności za pomocą npm install.
-   Uruchom polecenia npm run start:tailwind oraz npm run start:typescript w osobnych terminalach, aby rozpocząć rozwijanie aplikacji.
-   Otwórz plik index.html za pomocą rozszerzenia Visual Studio Code Open with Live Server.

## Struktura pliku HTML

Plik HTML index.html zawiera strukturę aplikacji. Składa się on z:

-   Strony głównej z wyborem kategorii quizów.
-   Widoku rozpoczęcia quizu.
-   Widoku samego quizu.
-   Podsumowania wyniku quizu.
-   Widoku autorów.

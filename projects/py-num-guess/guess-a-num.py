import random

guessCount = 7
name = input("what's your name, stranger? ")
secretNum = random.randint(1, 20)
print(f'hi, {name}!! can you guess my secret number?')


while guessCount:
    if guessCount == 1:
        print(
            f'sorry, {name}!! you couldn\'t guess the secret number {secretNum}')
        break

    print(f'you\'ve got {guessCount - 1} guesses left.')
    guess = int(float(input('what number am i thinking of, eh? ')))

    if guess < secretNum:
        print('too low')
        guessCount -= 1
    elif guess > secretNum:
        print('too high')
        guessCount -= 1
    else:
        print(
            f'ya did it, {name}!! and it only took {guessCount - 1} guesses!')
        guessCount = 0

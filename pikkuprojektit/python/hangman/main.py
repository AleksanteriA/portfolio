import random
from hangman_art import logo, stages
from hangman_words import word_list

print(logo)

chosen_word = random.choice(word_list)
word_length = len(chosen_word)

end_of_game = False
lives = 6


#Creating the blanks
display = []
for _ in range(word_length):
    display += "_"

while not end_of_game:
    guess = input("Guess a letter: ").lower()

    if guess in display:
        print(f"You already guessed {guess}")   

    #Check guessed letter
    for position in range(word_length):
        letter = chosen_word[position]
        if letter == guess:
            display[position] = letter

    #Check if the user is wrong
    if guess not in chosen_word:
        print(f"{guess} is not in the word, try again!")
        lives -= 1
        if lives == 0:
            end_of_game = True
            print("You lose")

    #Join all the elements in the list and turn it into a string
    print(f"{' '.join(display)}")

    #Check if user has all the letters.
    if "_" not in display:
        end_of_game = True
        print("You win")

    print(stages[lives])

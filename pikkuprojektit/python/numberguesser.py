import random

chosen_number = random.randint(1, 100)
##print(chosen_number)

print("I'm thinking of a number between 1 and 100.")
difficulty_chosen = input("Choose a difficulty - e for easy, h for hard: ")
if difficulty_chosen == "h":
    print("You have 5 guesses.")
    lives = 5
elif difficulty_chosen == "e":
    print("You have 10 guesses.")
    lives = 10
else:
  print("Invalid input. Try again")
  exit()

def user_guess():
    try:
        guess = int(input("Make a guess: "))
    except ValueError:
        print("Invalid input. Please enter a valid number.")
        return False

    if guess == chosen_number:
        print(f"You got it! It was {guess}")
        return True
    elif guess < chosen_number:
        print("Too low.")
    elif guess > chosen_number:
        print("Too high.")
    return False


while lives > 0:
    if user_guess():
        break
    lives -= 1
    if lives > 0:
        print(f"You have {lives} attempts remaining")

if lives == 0:
    print(f"You ran out of lives. The correct number was {chosen_number}.")

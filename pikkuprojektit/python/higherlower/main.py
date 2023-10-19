from art import *
from game_data import data
import random

print(logo)

score = 0
should_continue = True

a_member = random.choice(data)
while should_continue:
    b_member = random.choice(data)

    print(f"Compare A: {a_member['name']}, {a_member['description']}, {a_member['country']}")
    print(vs)
    print(f"Against B: {b_member['name']}, {b_member['description']}, {b_member['country']}")

    more_followers = input("Who has more followers? Type 'A' or 'B': ").lower()

    if a_member['follower_count'] > b_member['follower_count']:
        winner = "a"
    else:
        winner = "b"

    if more_followers == winner:
        score += 1
        print(f"You are correct! Your current score is {score}\n")
    else:
        print(f"You are wrong! The correct answer is {winner}. Game over!")
        should_continue = False

    if more_followers != "a":
        a_member = b_member
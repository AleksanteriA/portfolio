from replit import clear #remove this and line 29 if not running on repl.it
from art import logo
print(logo)


bidders = {}
def highest_bidder(bidding_record):
    highest_bid = 0
    winner = ""
    for bidder in bidding_record:
        bid_amount = bidding_record[bidder]
        if bid_amount > highest_bid:
            highest_bid = bid_amount
            winner = bidder
    print(f"The winner is {winner} with a bid of ${highest_bid}")
        

looping = True
while looping:
    
    input_name = input("What is your name?: ")
    input_bid = int(input("What is your bid?: $"))
    bidders[input_name] = input_bid
    looping_input = input("Are there any other bidders? Type 'yes' or 'no'\n")
    if looping_input == "no":
        looping = False
        highest_bidder(bidders)
    elif looping_input == "yes":
        clear()
    else:
        continue



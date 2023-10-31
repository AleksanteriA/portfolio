MENU = {
    "espresso": {
        "ingredients": {
            "water": 50,
            "coffee": 18,
        },
        "cost": 1.5,
    },
    "latte": {
        "ingredients": {
            "water": 200,
            "milk": 150,
            "coffee": 24,
        },
        "cost": 2.5,
    },
    "cappuccino": {
        "ingredients": {
            "water": 250,
            "milk": 100,
            "coffee": 24,
        },
        "cost": 3.0,
    }
}

resources = {
    "water": 300,
    "milk": 200,
    "coffee": 100,
    "money": 0,
}

while True:
    order = input("What would you like? (espresso/latte/cappuccino): ")

    if order == "off":
        print("Turning off the coffee machine. Goodbye!")
        break

    elif order == "report":
        # Print the resources report
        print(f"Water: {resources['water']}ml")
        print(f"Milk: {resources['milk']}ml")
        print(f"Coffee: {resources['coffee']}g")
        print(f"Money: ${resources['money']:.2f}")

    elif order in MENU:
        # Check if there are enough resources
        ingredients = MENU[order]["ingredients"]
        insufficient_resource = None

        for ingredient, amount in ingredients.items():
            if resources[ingredient] - amount < 0:
                insufficient_resource = ingredient
                break

        if insufficient_resource:
            print(f"Sorry, not enough {insufficient_resource}.")
        else:
            print("Please insert coins. ")
            # Get the number of quarters from the user
            quarters = int(input("How many quarters?: "))

            # Get the number of dimes from the user
            dimes = int(input("How many dimes?: "))

            # Get the number of nickels from the user
            nickels = int(input("How many nickels?: "))

            # Get the number of pennies from the user
            pennies = int(input("How many pennies?: "))

            # Calculate the total value in dollars
            total_dollars = (quarters * 0.25) + (dimes * 0.10) + (nickels * 0.05) + (pennies * 0.01)

            # Access the "cost" of the selected item
            item_cost = MENU[order]["cost"]

            # Check if the user has enough money to purchase the selected item
            if total_dollars >= item_cost:
                # Calculate the change
                change = total_dollars - item_cost

                # Update the available resources
                for ingredient, amount in ingredients.items():
                    resources[ingredient] -= amount

                # Add money to the machine
                resources["money"] += item_cost

                # Give the user the item and change
                print(f"Here is your {order}. Enjoy your coffee!")
                if change > 0:
                    print(f"Here is ${change:.2f} in change.")
            else:
                print("Sorry, that's not enough money. Money refunded.")
    else:
        print("Sorry, we don't have that item on the menu.")

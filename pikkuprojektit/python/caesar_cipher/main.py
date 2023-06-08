alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

from art import logo
def caesar(start_text, shift_amount, cipher_direction):
    end_text = ""
    if cipher_direction == "decode":
        shift_amount *= -1
    for char in start_text:
        if char not in alphabet:
            end_text += char


        else:
            position = alphabet.index(char)
            new_position = position + shift_amount
            end_text += alphabet[new_position]


    print(f"Here's the {cipher_direction}d result: {end_text}")
    
continue_program = True
print(logo)


while continue_program == True:

    direction = input("Type 'encode' to encrypt, type 'decode' to decrypt:\n")
    text = input("Type your message:\n").lower()

    try:
        shift = int(input("Type the shift number:\n"))
    except:
        print("Error, you entered wrong value")
        continue

    shift = shift % 26
    caesar(start_text=text, shift_amount=shift, cipher_direction=direction)
    program = input("Type 'yes' to continue, 'no' to stop\n")
    if program == "no":
        continue_program = False
    else:
        continue

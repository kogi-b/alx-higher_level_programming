#!/usr/bin/python3
def safe_print_list_integers(my_list=[], x=0):
    printed = 0
    for numb in range(0, x):
        try:
            print("{:d}".format(my_list[numb]), end="")
            printed += 1
        except TypeError:
            continue
        except ValueError:
            continue
    print("")
    return printed

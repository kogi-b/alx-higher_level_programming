#!/usr/bin/python3
def uniq_add(my_list=[]):
    sum = 0
    added = []
    for numb in my_list:
        if numb not in added:
            sum += numb
            added.append(numb)
    return sum

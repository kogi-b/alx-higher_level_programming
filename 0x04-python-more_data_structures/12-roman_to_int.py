#!/usr/bin/python3
def roman_to_int(roman_string):
    r_s = roman_string
    if isinstance(r_s, str) is False or r_s is None or r_s == "":
        return 0
    numb_r = 0
    lst = []
    for l in roman_string:
        lst.append(l)
    i = 0
    roman_s = {'I': 1, 'V': 5, 'X': 10, 'L': 50,
               'C': 100, 'D': 500, 'M': 1000}
    i = 0
    for s in lst:
        if s not in roman_s:
            return 0
        else:
            if i + 1 == len(lst) or roman_s[s] >= roman_s[lst[i + 1]]:
                numb_r += roman_s[s]
            else:
                numb_r -= roman_s[s]
        i += 1
    return numb_r

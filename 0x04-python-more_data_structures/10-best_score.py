#!/usr/bin/python3
def best_score(a_dictionary):
    if a_dictionary == {} or a_dictionary is None:
        return None
    keys = list(a_dictionary.keys())
    best_key = keys[0]
    for k in keys:
        if a_dictionary[k] > a_dictionary[best_key]:
            best_key = k
    return best_key

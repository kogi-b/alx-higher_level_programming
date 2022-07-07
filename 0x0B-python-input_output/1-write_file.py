#!/usr/bin/python3
"""write in a file"""


def write_file(filename="", text=""):
    """ return len of text"""
    with open(filename, mode="w", encoding="utf-8") as myFile:
        myFile.write(text)
    return len(text)

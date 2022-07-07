#!/usr/bin/python3
""" This is a function """


class MyList(list):
    """ print new list """

    def print_sorted(self):
        """Methot that sorted a list"""

        print(sorted(list(self)))

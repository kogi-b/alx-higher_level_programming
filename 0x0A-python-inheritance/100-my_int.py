#!/usr/bin/python3
"""
Rebel int class
"""


class MyInt(int):
    """class that inherits from int"""

    def __init__(self, my_int):
        """for initialize a value my_int"""

        self.my_int = my_int

    @property
    def my_int(self):
        """something"""
        return self.__my_int

    @my_int.setter
    def my_int(self, my_int):
        """something"""
        if type(my_int) is not int:
            raise TypeError("my_int must be an integer")
        else:
            self.__my_int = my_int

    def __eq__(self, other):
        """eq rebel"""
        return !(self.my_int == other)

    def __ne__(self, other):
        """ne rebel"""
        return !(self.my_int != other)

#!/bin/python3

import math
import os
import random
import re
import sys



if __name__ == '__main__':
    N = int(input().strip())
    i=N
    if i%2==0:
        if i>1 and i<6:
            print("Not Weird")
        elif i>5 and i<21:
            print("Weird")
        elif i>20:
            print("Not Weird")
    else:
        print("Weird")
                
            
#!/bin/python3
if __name__ == '__main__':
    n = int(input().strip())
    for i in range(1,11):
        result=n*i
        print("{} x {} = {}".format(n,i,result))
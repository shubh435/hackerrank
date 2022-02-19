n=int(input("Enter no:"))
arr=[]
for i in range(n):
    a=int(input())
    arr.append(a)
zero,one,two,three,four,five=0,0,0,0,0,0
for i in range(n):
    if arr[i]==0:
        zero+=1
    elif arr[i]==1:
        one+=1
    elif arr[i]==2:
        two+=1
    elif arr[i]==3:
        three+=1
    elif arr[i]==4:
        four+=1
    elif arr[i]==5:
        five+=1
    else:
        pass
    
print("zero",zero)
print("one",one)
print("two",two)
print("three",three)
print("four",four)
print("five",five)
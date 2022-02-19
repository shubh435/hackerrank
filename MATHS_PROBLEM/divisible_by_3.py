num=int(input("Enter the Number : "))
sum=0
temp=num
while(temp>0):
    sum+=(temp%10)
    temp=temp//10
if(sum%3==0):
    print("{} is divisible by 3".format(num))
else:
    print("{} is not divisible by 3".format(num))
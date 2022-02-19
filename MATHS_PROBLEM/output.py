a=False
while not a:
    try:
        f_n=input("Rnter file name")
        i_f=open(f_n,'r')
    except:
        print("file not found")
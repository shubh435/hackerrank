import math
height_of_the_pole=float(input("Enter height of the pole:"))
length_of_the_its_shadow=float(input("Enter the length of its shadow:"))
tan_theta=height_of_the_pole/length_of_the_its_shadow
print("angle of deviation=",math.atan(tan_theta)*(180/math.pi),"in degree")
print("angle of deviation=",math.atan(tan_theta),"in rad")
import math
angle_of_elevation=float(input("Enter angle of elevation:"))
length_of_the_shadow=float(input("Enter the length of the shadow:"))
tan_theta=math.tan((angle_of_elevation*180/3.14))
print(1/math.sqrt(3))
print(tan_theta)
height_of_the_tree=length_of_the_shadow*tan_theta
print("Height of the tree is",abs(height_of_the_tree))
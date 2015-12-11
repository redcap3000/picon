import sys

print(sys.argv)
from sense_hat import SenseHat
from time import sleep

sense = SenseHat()
if len(sys.argv) == 1:
	sense.clear()  # no arguments defaults to off
else:
	sense.clear(int(sys.argv[1]),int(sys.argv[2]),int(sys.argv[3]))

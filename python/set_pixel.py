#!/usr/bin/env python
import sys
import time
import random

print(sys.argv)
from sense_hat import SenseHat

sense = SenseHat()

# examples using (x, y, r, g, b)

sense.set_pixel(int(sys.argv[1]), int(sys.argv[2]), int(sys.argv[3]), int(sys.argv[4]), int(sys.argv[5]))

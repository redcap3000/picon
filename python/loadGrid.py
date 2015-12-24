#!/usr/bin/env python                                                                                    
import sys
from sense_hat import SenseHat
from MeteorClient import MeteorClient


print(sys.argv);

value = sys.argv[1];
client = MeteorClient('ws://127.0.0.1:3000/websocket')
client.connect()

def subscription_callback(error):
    if error:
        print(error)

client.subscribe('sensehat', callback=subscription_callback)

result = client.find_one('sensehat',selector={ '_id' : value})

sense = SenseHat()

sense.set_pixels(result['grid'])



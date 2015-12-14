#picon

============
##Node.js web interface to control Raspberry Pi Sense HAT LED's


**Why?**

Created as a quick and easy way to start playing around with the LED on a sensehat. Also helpful in determining what RGB values look like on the sensehat without having to write some python scripts.

**How**

This package basically works by launching Python scripts that are passed data via the commandline from meteor.

**Future Plans**

Animations, saving and recalling icons. 'Group edit' mode. 

##**Installation**

**1) Install package as normal.**

**2) Copy scripts from python/ to your meteor's private/ directory**

**3) Add {{>picon}} template where needed**

**4) Go for it!**


##**Use**##

**1) Enter RGB values into the fields to select a color; the currently selected color will appear in upper left corner.**

**2) Click on the black square matrix to set the color of the LED.**

**3) Press clear to 'blank' out all LED's**

##**FAQ**##

**Its not working**

Did you copy the scripts from the Python folder into your private/ project directory? Examine the server logs which will tell you more about any errors related to your python scripts.

# picon

============
## Node.js web interface to control Raspberry Pi Sense HAT LED's


## Why?

Created as a quick and easy way to start playing around with the LED on a sensehat. Also helpful in determining what RGB values look like on the sensehat without having to write some python scripts.

**How**

This package basically works by launching Python scripts that are passed data via the commandline from meteor. Save functionality functions with use of python-meteor (python meteor client) which connects to a mongo database to recall the 'saved' icon.

**Future Plans**

Animations! Editble color palletes. 'Group edit' mode. 

##**Installation**

**1) Install package as normal.**

**2) Copy scripts from python/ to your meteor's private/ directory**

**3) Add {{>picon}} template where needed**

**4) Add {{>savedGrids}} for save/restore functionality**

**5) Add {{>rgbColors}} for (work in progress) some preset rgb color values (with names)**

**4) Go for it!**


##**Save/Recall Icons**

You may now save and recall icons thanks in part to [python-meteor](https://github.com/hharnisc/python-meteor) . This works by connecting to your locally running meteor server (on port 3000) with the passed mongo ID. I'm experimenting with the library and have noticed it works best if packages 'insecure' and 'autopublish' are enabled.

```
pip install python-meteor
```

This feature is forthcoming and is the basis for an animation interface.

##**Use**##

**1) Enter RGB values into the fields to select a color; the currently selected color will appear in upper left corner.**

**2) Click on the black square matrix to set the color of the LED.**

**3) Press clear to 'blank' out all LED's**

**4) Press 'save' to save icon**

**6) Click the mongo id of a saved icon to restore it to the pi and the main grid editor.**

##**FAQ**##

**Its not working**

Did you copy the scripts from the Python folder into your private/ project directory? Examine the server logs which will tell you more about any errors related to your python scripts.

Install python-meteor for appropriate save functionality (otherwise you can save the icons, but they won't show up on the sensehat when accessed).

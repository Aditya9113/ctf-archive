# REHOSTING

Files can be found here: [really obnoxious problem](https://2022.angstromctf.com/challenges)

## Challenge Setup
There are no dependecy files for `really_obnoxious_problem`. It does however need a `flag.txt` file in the current directory for the challenge to give the flag.

## Flag Linking
This challenge calls a flag file in the current directory so had to link the flag with /flag which is the pwn.college text:
Checks if the file flag.txt exists and if not then it creates a link between flag.txt and /flag
```
#!/bin/bash

# Attempt to create a symboliclink
ln -s /flag /challenge/flag.txt 2>/dev/null
```
# Y-combinator Theme for lightdm-webkit

Because `slim` was sunk, and desktop HTML applications rocks.

## Screenshot

![Y-combinator-screenshot]()

The progress will automatically expand ( **animated** ).
Unfortunately, I didn't finish the real evaluating function.
So what you see is manually evaluating version. 

## Installation

0. You must install `lightdm-webkit-greeter` first.

1. Clone this repo and copy all things in `/usr/local/share/lightdm-webkit/lightdm-webkit-Y-combinator`.

And if the directory dosen't exist, create it ( you don't want your system mixed any customed things. Don't you ?)

2. Link the theme directory to `/usr/share/lightdm-webkit/lightdm-webkit-Y-combinator`

3. Add new greater in `/etc/lightdm` and named it with any name you want.

You can copy the original webkit greeter.
Just notice that the `webkit-theme` attribute must match to this theme's name, ex:

    webkit-theme=lightdm-webkit-Y-combinator

4. Modify `/etc/lightdm/lightdm.conf` to use the greeter:

    [SeatDefaults]
    greeter-session=lightdm-webkit-greeter-snowmantw

5. Done.


## Resolution issue

I made this for my laptop run in 1600X800 mode, and do some basic testing under 1280X800.
My keypoint is that the last line of evaluating must stick to the bottom of screen.
But you can adjust it according to your resolution.

## Where is session selector, user menu, password prompt, etc.?  

May follow `slim`'s shortcut keys to implement these features in the future.
But I almost use none of these features, so this "future" may not come true. 

## License

CC BY-SA-3.0

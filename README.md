# ![logo](img/neoify-48.png) neoify 
a neopets application which gives neoifications

## updates
* `08/22/17`: first working prototype!

## caveats
* When you first use the extension, you might be flooded with notifications of past posts. This is necessary since the extension's local storage needs to be loaded with all the existing posts for it to have posts to compare with.
* The extension also assumes you need to be signed into Neopets. I'll probably create some error message to check to see if the user is signed in or not in the future. 
* There's also a minute delay when a new post has been made. Will figure out this issue. 

## additional features for future:
* login check error message: checks to see if the user is logged in or not
* filter search: checks to see if your message contains any non neo-friendly words and highlights them for you before you submit so you don't lose your message
* a&c notification: alerts people when a&c occurs

## resources
* `filter search` ![Real Time Text Input Filter tutorial Program Textarea Javascript HTML Tutorial]https://www.youtube.com/watch?v=ump6O8yFWkY

## how to use:
1. Download the folder/repo.
![alt tag](img/screenshots/step_1.png)
2. Navigate to `chrome://extensions` in your chrome browser.
![alt tag](img/screenshots/step_2.png)
3. Check the check box for `developer mode` in the upper right hand corner.
![alt tag](img/screenshots/step_3.png)
4. Select `load unpacked extension...` Remember to unzip the file!
![alt tag](img/screenshots/step_4.png)
5. Select the folder we downloaded in Step #1.
![alt tag](img/screenshots/step_5.png)
6. Select `ok` and viola! Neoify is officially running :)
## Inspiration
Being stressed, no one wants that that's why we created nifty canvas. 
no one likes being stressed that's why i created nifty canvas.

## What it does
- <b>Canvas</b> - Nifty canvas have a pixel canvas (obviously) where users can create pixel art. The canvas specifications can be adjusted to your choice, this is done before you start creating an artwork and in the main canvas, there's a color picker and a scale which helps zoom in and out of your work. when you're done with your artwork, you'll export it to the gallery.
- <b>Gallery</b> - all the artworks exported by the users would be stored on the gallery, so each artworks shown would display the owners DID and avatar.
- <b>Profile</b> - profile show the users did and all of pixelart he has created

## How we built it
It's frontend is built using typescript while it's backend uses IPFS for storing the art cid and Ceramics for it's database.

## Challenges we ran into
When using ceramic for the database, I ran into some es6 errors of using a module with commonjs, using ceramic on node.

## Accomplishments that we're proud of
Being able to build an app within this short period of time which works up to what i imagined 

## What we learned
creating database using ceramics

## What's next for Nifty Canvas
Working on it's UI, implementing more features in it's Gallery such as reactions on artworks and commenting, users being able to follow others, choosing/ creating your avatar

# Custom MAL CSS

## About

A custom CSS theme for MyAnimeList. 

Live Example: https://myanimelist.net/animelist/Bento-Box

## Built With

- SASS

## Installing the Theme

1. Login to MyAnimeList
2. Head to https://myanimelist.net/ownlist/style
3. Select Animelist and/or Mangalist under "Default Theme" under Modern List Design
4. Then click the default theme image to go to the style editor
5. Copy-paste the text inside `animelist.css` into the box under "Add Custom CSS" 

## Customizing the Theme

### Prerequisites
* Node.js

### Editing the Theme
1. Clone the repository
2. In the directory of the repository you just cloned, run:
    ```
    npm install
    ```
3. Then run:
    ```
    npx sass --watch style/animelist.scss animelist.css
    ```
4. Now when you make a change inside the `style` folder and save, the `animelist.css` file will be updated with your changes

For changes like changing images, font size, or colors, edit the `style\constants.scss` files

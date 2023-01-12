# Custom MAL CSS

## About

A Custom CSS Theme for MyAnimeList. 

Live Example: https://myanimelist.net/animelist/Bento-Box

## Built With

- SASS

# Getting Started

## Installing the Theme
1. Login to MyAnimeList
2. Head to https://myanimelist.net/ownlist/style
3. Select Animelist and/or Mangalist under "Default Theme" under Modern List Design
4. Then click the default theme image to go to the style editor
5. Copy-paste the text inside `animelist.css` into the box under "Add Custom CSS" 

## Customizing the Theme
1. Install NodeJS
2. Clone the repository to your computer
3. In the diretory of the repository you just cloned, run:
    ```
    npm install
    ```
4. Then run:
    ```
    npx scss --watch style/animelist.scss animelist.css
    ```
5. Now when you make a change inside the `style` folder and save, the `animelist.css` file will be updated with your changes

For simple changes like changing images, font size, or colors, edit the `style\constants.scss` files
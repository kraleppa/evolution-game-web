# Evolution game frontend

[![react badge](https://img.shields.io/badge/react-17.0.1-blue)](https://www.npmjs.com/package/react)
[![bootstrap badge](https://img.shields.io/badge/bootstrap-4.5.3-darkviolet)](https://www.npmjs.com/package/bootstrap) <br> 


## Description
Frontend of evolution game<br>
[Link](https://github.com/kraleppa/evolution-game-v2) 

### What is an evolution game?
Evolution game is simple simulation of evolution. Imagine endless steppes
and dense jungles full of animals which fight with each other for food and space.
Only strongest will survive and pass their genes and you have one and only opportunity to observe this
beautiful and terrifying process.

<img align="right" src="https://github.com/kraleppa/evolution-game-web/blob/master/src/data/mapScreen.png" height=50% width=50%>


### Map
Map is really simple it has two parts:
<ul>
  <li>Jungle - green field in the center of map</li>
  <li>Steppe - rest of the map</li>
</ul>
  
### Plants
Plants are marked as a dark green fields. Every day one plant is growing in the jungle and on the steppe.

### Animals
Animals are marked as a numbers on the fields. There can be many animals on one field.
The number on the field shows how many animals currently occupies this field. <br>
Animals lose their energy when they move and restore it when they eat plant.
When meet another animal on the same field and if they have enough energy they can procreate.

### Hierarchy
Animals have their hierarchy. When there are many animals on the field with grass only the strongest can eat a grass.
Similar situation is with procreation - only two strongest animals on the field can procreate

## Menu
![screen](https://github.com/kraleppa/evolution-game-web/blob/master/screenShots/menu.png)

## Preview
![preview](https://github.com/kraleppa/evolution-game-web/blob/master/screenShots/preview.gif)


## Contributors 🐖
<table>
  <tr>
    <td align="center"><a href="https://github.com/kraleppa"><img src="https://avatars1.githubusercontent.com/u/56135216?s=460&u=359e017d16c70a31d3bdb086172308cc6f045acf&v=4" width="100px;" alt=""/><br /><sub><b>Krzysztof Nalepa</b></sub></a><br /></td>
    </td>
  </tr>
</table>  


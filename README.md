# frontend-101

## Index

**index.html** file is a simple home page which contain div which on click direct you the three repective page A1 - A3

## A1

### HTML

**A1.html** file contains a div with a class `.boxbody` which conatians all the 12 box which are present in the webpage. These box each contains a letter from A-L sequencaly. Each box contain the class `.box` and unqiue id `.box1` to `.box12`.

### CSS

**A1style.css** file contains two keyframes `firstleft` and `firstright`.
`.boxbody` is first place in the center by using `display:flex` and `justify-content: center`. After which the `.boxbody` is made a grid with varing number of column depending upon the `max-width` of the viewport.

- Upto _900px_ there is only 1 column
- then from _901px_ to _1200px_ there is 2 column
- the from _1201px_ onward there is 3 columns
  for all the alternate row from the first row `firstleft` animation was applied and for all the alternate row from the second row `firstright` animation was applied.
  These animation was applied using nth-child pseudo selector

## A2

### HTML

**A2.html** there is a div with class `.boxbody` containing two div `.box1 and `.box2`. Each of this box contains 6 div which represent each all the 6 faces of the box.

### CSS

**A2style.css** first `.box1` and `.box2` are made grid with 1 row and 1 column so all the faces can overlap. After that each faces is give `position : relative` and each face is given and each face is moved using `top` and `left` property such that they represent a box's net diagram. Then each faces is rotated using `transform: rotateX()` and rotated `transform: rotateY()` to make a box

- for `.box1` `transform-style: preserve-3d` is used and then rotate in Y axis to _-30deg_ and perpective of _300px_ and on hover these transformation are removed with an transition
- for `box2` `perspective` is set to _200px_ and `presepective-origin` is set to _200px -50px_. On hover the transform property of `.box2faces` are remove and `translateZ(-20px)` is set.

## A3

### HTML

**A3.html** conatians a div of class `.conntainer` which holds 5 divs 4 empty div for each box have different color and 1 for the text **Hi!**.

### CSS

**A3style.css** first div `.container` was centered. The `.containere` was made `display: grid` with 2 row and 2 column of _200px by 200px_.
`.box` has height and width of 200px. and each `.box` `background-color` was assigned. Each `.box` `transfrom-origin` is set with repect to their position.
`.text` was made to span 2 row and 2 column such that is overlaps with all the `.box`. and centered it using `display: flex`.
On hover `.container`, `.box` were rotated with transition.

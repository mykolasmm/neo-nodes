# Neo nodes

---
Live coding challenge

## Getting started 

---

1. Install project dependencies
```
npm install
```

2. Install test framework.

```
npm install --save-dev jest
```

3. Write your challenge solution in `./src/index.js` file.</br>
   Your code must pass as many tests as possible (tests are defined in `./tests/test.js`)</br>
   

4. Run tests and validate your solution.

```
npm test
```

5. Profit!


# Challenge 

---

### Goal

The game is played on a rectangular grid with a given size. Some cells contain power nodes. The rest of the cells are empty.

The goal is to find, when they exist, the horizontal and vertical neighbors of each node.


### Rules

To do this, you must find each (x1,y1) coordinates containing a node, and display the (x2,y2) coordinates of the next node to the right, and the (x3,y3) coordinates of the next node to the bottom within the grid.

If a neighbor does not exist, you must output the coordinates `-1` `-1` instead of (x2,y2) and/or (x3,y3).


You lose if:
- You give an incorrect neighbor for a node.
- You give the neighbors for an empty cell.
- You compute the same node twice.
- You forget to compute the neighbors of a node.

### Output for a turn
**One line per node.** Six integers on each line: `x1` `y1` `x2` `y2` `x3` `y3`

Where:
- (`x1`,`y1`) the coordinates of a node
- (`x2`,`y2`) the coordinates of the closest neighbor on the right of the node
- (`x3`,`y3`) the coordinates of the closest bottom neighbor
- If there is no neighbor, the coordinates should be `-1` `-1`.

## Examples

---

### Basic example

| 0 | 0 |
|---|---|
| 0 | . |

Basic example positions

| 0,0 | 1,0 |
|---|---|
| 0,1 | 1,1 |

In the example above there are 3 nodes - `0,0`, `1,0`, `0,1`

The node at (`0,0`) has 2 neighbors - `1 0` and `0 1`</br>
Therefore program should first print `0 0 1 0 0 1` (node coordinates, horizontal neighbour, vertical neighbour)

The node at (1,0) has no neighbors. Expected output: `1 0 -1 -1 -1 -1`

The node at (0,1) has no neighbors. Expected output: `0 1 -1 -1 -1 -1`




####Horizontal example

| 0 | . | 0 | . | 0 | 
|---|---|---|---|---|

Expected output:
```
0 0 2 0 -1 -1
2 0 4 0 -1 -1
4 0 -1 -1 -1 -1
```


#### Vertical example

| 0 |
|---|
| 0 |
| 0 |
| 0 |

Expected output:

``` 
0 0 -1 -1 0 1
0 1 -1 -1 0 2
0 2 -1 -1 0 3
0 3 -1 -1 -1 -1
```

## Exercise constraints

---

0 < `width` ≤ 30

0 < `height` ≤ 30

0 ≤ `x1` < `width`

0 ≤ `y1` < `height`

-1 ≤ `x2`, `x3` < `width`

-1 ≤ `y2`, `y3` < `height`

var Direction;

(function (Direction) {
    Direction[Direction["left"] = 0] = "left";
    Direction[Direction["right"] = 1] = "right";
    Direction[Direction["up"] = 2] = "up";
    Direction[Direction["down"] = 3] = "down";
})

(Direction || (Direction = {}));

function move(a) {
    console.log("Move to ".concat(Direction[a]));
}
move(Direction.map(function (e) { return Direction.e; }));

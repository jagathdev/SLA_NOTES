enum Direction {
    left, right, up, down
}

function move(a) {
    console.log(`Move to ${Direction[a]}`)
}

move(Direction.right)

namespace SpriteKind {
    export const Ball = SpriteKind.create()
    export const right_paddle = SpriteKind.create()
    export const left_paddle = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Ball, SpriteKind.right_paddle, function (sprite, otherSprite) {
    starball.vx = starball.vx * -1
    info.player2.changeScoreBy(1)
})
function create_paddle2 () {
    paddle2 = sprites.create(img`
        . . . . . . 2 2 . . . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . 2 2 . . . . . . . . 
        `, SpriteKind.left_paddle)
    controller.moveSprite(paddle2, 0, 100)
    paddle2.x = 0
    paddle2.setStayInScreen(true)
    info.setScore(0)
}
function create_ball () {
    starball = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . 3 1 1 3 . . . . . . 
        . . . . . 2 1 1 1 1 2 . . . . . 
        . . . . . 2 1 1 1 1 2 . . . . . 
        . . . . . . 3 1 1 3 . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Ball)
    starball.setVelocity(75, 75)
    starball.setBounceOnWall(true)
    starball.y = randint(0, 120)
}
function create_paddle1 () {
    paddle1 = sprites.create(img`
        . . . . . . . 8 8 . . . . . . . 
        . . . . . . 8 8 8 . . . . . . . 
        . . . . . . 8 8 8 . . . . . . . 
        . . . . . . 8 8 8 . . . . . . . 
        . . . . . . 8 8 8 . . . . . . . 
        . . . . . . 8 8 8 . . . . . . . 
        . . . . . . 8 8 8 . . . . . . . 
        . . . . . . 8 8 8 . . . . . . . 
        . . . . . . 8 8 8 . . . . . . . 
        . . . . . . 8 8 8 . . . . . . . 
        . . . . . . 8 8 8 . . . . . . . 
        . . . . . . 8 8 8 . . . . . . . 
        . . . . . . 8 8 8 . . . . . . . 
        . . . . . . 8 8 8 . . . . . . . 
        . . . . . . 8 8 8 . . . . . . . 
        . . . . . . . 8 8 . . . . . . . 
        `, SpriteKind.right_paddle)
    paddle1.x = scene.screenWidth()
    paddle1.setStayInScreen(true)
    controller.player2.moveSprite(paddle1, 0, 100)
    info.player2.setScore(0)
}
sprites.onOverlap(SpriteKind.Ball, SpriteKind.left_paddle, function (sprite, otherSprite) {
    starball.vx = starball.vx * -1
    info.changeScoreBy(1)
})
let paddle1: Sprite = null
let paddle2: Sprite = null
let starball: Sprite = null
create_ball()
create_paddle2()
create_paddle1()

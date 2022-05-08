
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . b 5 5 b . . .
    . . . . . . b b b b b b . . . .
    . . . . . b b 5 5 5 5 5 b . . .
    . b b b b b 5 5 5 5 5 5 5 b . .
    . b d 5 b 5 5 5 5 5 5 5 5 b . .
    . . b 5 5 b 5 d 1 f 5 d 4 f . .
    . . b d 5 5 b 1 f f 5 4 4 c . .
    b b d b 5 5 5 d f b 4 4 4 4 b .
    b d d c d 5 5 b 5 4 4 4 4 4 4 b
    c d d d c c b 5 5 5 5 5 5 5 b .
    c b d d d d d 5 5 5 5 5 5 5 b .
    . c d d d d d d 5 5 5 5 5 d b .
    . . c b d d d d d 5 5 5 b b . .
    . . . c c c c c c c c b b . . .
`, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.setBackgroundColor(7)
info.setScore(0)

game.onUpdateInterval(200, function() {
    let projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, null, 0, 50)
projectile.setPosition(randint(0,160), 0)
info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, Spritekinds.Projectile, 
function(sprite: Sprite, otherSprite: Sprite) {
game.over(false)
})
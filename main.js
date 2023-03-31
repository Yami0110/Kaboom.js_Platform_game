// vytvorenie hry
kaboom({
    width: 800,
    height: 600
});

// volanie funkcie resize() pri otvorení okna alebo pri zmene jej veľkosti
window.onload = function() { resizeGame(); }
window.addEventListener("resize", resizeGame);

// funkcia pre zabezpečenie automatického nastavenia veľkosti hernej obrazovky
function resizeGame() {
    var canvas = document.querySelector("canvas");
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var windowRatio = windowWidth / windowHeight;
    var gameRatio = width() / height();
    if (windowRatio < gameRatio) {
        canvas.style.width = windowWidth - 20 + "px";
        canvas.style.height = (windowWidth / gameRatio) - 20 + "px";
    } else {
        canvas.style.width = (windowHeight * gameRatio) - 20 + "px";
        canvas.style.height = windowHeight - 20 + "px";
    }
}

window.canvas.focus();

// nahranie spritesheetov a vytvorenie animácií
loadSprite("player", "assets/sprites/player.png", {
    sliceX: 23,
    anims: {
        "idle": { from: 0, to: 10, speed: 15, loop: true },
        "run": { from:11, to:22, speed: 25, loop: true }
    }
});
loadSprite("coin", "assets/sprites/coin.png", {
    sliceX: 8,
    anims: {
        "rotation": {
            from: 0,
            to: 7,
            speed: 10,
            loop: true
        }
    }
});
loadSprite("apple", "assets/sprites/apple.png", {
    sliceX: 17,
    anims: {
        "active": {
            from: 0,
            to: 16,
            speed: 15,
            loop: true
        }
    }
});
loadSprite("saw", "assets/sprites/saw.png", {
    sliceX: 8,
    anims: {
        "active": {
            from: 0,
            to: 7,
            speed: 10,
            loop: true
        }
    }
});
loadSprite("spikeHead", "assets/sprites/spikeHead.png", {
    sliceX: 4,
    anims: {
        "blink": {
            from: 0,
            to: 3,
            speed: 5,
            loop: true
        }
    }
});

// nahranie audií
loadSound("jump", "assets/sounds/jump.wav");
loadSound("coinPickUp", "assets/sounds/coinPickUp.wav");
loadSound("applePickUp", "assets/sounds/applePickUp.wav");
loadSound("injured", "assets/sounds/injured.wav");
loadSound("background", "assets/sounds/background.wav");
loadSound("gameOver", "assets/sounds/gameOver.wav");
loadSound("gameClear", "assets/sounds/gameClear.wav");

// nahranie dlaždíc
loadSprite("tileA", "assets/tiles/tileA.png");
loadSprite("tileB", "assets/tiles/tileB.png");
loadSprite("tileC", "assets/tiles/tileC.png");
loadSprite("tileD", "assets/tiles/tileD.png");
loadSprite("tileE", "assets/tiles/tileE.png");
loadSprite("tileF", "assets/tiles/tileF.png");
loadSprite("tileG", "assets/tiles/tileG.png");
loadSprite("tileH", "assets/tiles/tileH.png");
loadSprite("tileI", "assets/tiles/tileI.png");
loadSprite("tileJ", "assets/tiles/tileJ.png");
loadSprite("tileK", "assets/tiles/tileK.png");
loadSprite("tileL", "assets/tiles/tileL.png");
loadSprite("tileM", "assets/tiles/tileM.png");
loadSprite("tileN", "assets/tiles/tileN.png");

// nahranie obrázkov
loadSprite("spike", "assets/images/spike.png");
loadSprite("life", "assets/images/life.png");
loadSprite("bar", "assets/images/bar.png");
loadSprite("level1", "assets/images/level1.png");
loadSprite("level2", "assets/images/level2.png");
loadSprite("level3", "assets/images/level3.png");
loadSprite("level4", "assets/images/level4.png");
loadSprite("level5", "assets/images/level5.png");
loadSprite("background", "assets/images/background.png");
loadSprite("gameTitle", "assets/images/gameTitle.png");
loadSprite("gameTutorial", "assets/images/gameTutorial.png");
loadSprite("table", "assets/images/table.png");
loadSprite("scoreTable", "assets/images/scoreTable.png");

// nahranie fontu
loadFont("galvanic", "assets/fonts/galvanic.ttf");

// vykreslenie konštrukcií máp
const levels = [
    [
        "F                                                                                                 DE",
        "F                   $                                                $$$               $          DE",
        "F                  $^$                   $  $                       ^   ^     $  $     ^    $     DE",
        "F                 NNNNN                                          NNNNNNNNNNN  N  N  NNNNNNN $     DE",
        "F               N                        N  N            $ABBBC     #                  #    $     GK",
        "F          $$$$$            $$         N      N         $AMJHHI                $$           $      D",
        "F          ABBBC           $  $       $        $       $AMEF$ $                $$                  D",
        "F         AMEEEF >         ABBC   ^   N    >   N       AMEEF $        * #  N >      N     ^        D",
        "LBBBBBBBBBMEEEELBBBBBBBBBBBMEELBBBBBBBBBBBBBBBBBBBBBBBBMEEELBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBM",
        "EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE"
    ],
    [
        "EJHHHHHHHHHHHHHHHHHHHHHHHHKF                                                  NNNNNNNN             D",
        "EF $ $ $                  DF     $                                                  NN    $ $      D",
        "EF$ $ $                   DF $   N NN$$NN                                        $$$NN     $       D",
        "EF >    N     ^ ABBBBBC   DF N  $   NNNN  $    N   $ $ $                         $ $NN$N NNNNN     D",
        "JINNNNNNNN   ABBMJHHHHI   DF    N         N  $   N ^   ^ N                      ^$$$NN      #      D",
        "F       #   AMJHHI        GI  $           #  N   NNNNNNNNN            $ $     NNNNNNNNN            D",
        "F          AMEF$$$            N                      *             N $ $ $ N            $          D",
        "F         AMEEF    >  N           ^N^          N >                NN^     ^NN           N          D",
        "LBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBC >       ABBBBBBBBBBBM",
        "EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEELBBBBBBBBBMEEEEEEEEEEEE"
    ],
    [
        "F        NNNNNNNNNNNNN                            $                                                D",
        "F        N           N                           $ $          $                                    D",
        "F        N $ $   $ $ N        NNNNNN  NNNNNNN   $ $ $       $ N $  $  $  $                         D",
        "F        N N N $ N N N      AC$$$$$$  $$$$$$N  NNN NNN      N   N  N  N  N                         D",
        "F        N     N     N     AMF$    $  $    $N  N#NNN#N    N                $                       D",
        "F        N $ $   $ $ N    AMEF>    N  N    >N  N N N N    N                N $     $ $ $           D",
        "F        N^N^N   N^N^N   AMJHINNNNNN  NNNNNNN    $ $     NN  $ $    $   $    N    $ $ $ $          D",
        "F        NNNNNN NNNNNN  AMEF$$$                   $          ^ ^    ^   ^       N>        N        D",
        "LBBBBBBC               AMEEF*                    $^$   ABBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBM",
        "EEEEEEELBBBBBBBBBBBBBBBMEEELBBBBBBBBBBBBBBBBBBBBBBBBBBBMEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE"
    ],
    [
        "F      DEEEEEEEEEEEEEEEEEEEEJHHKEEEEEJHHHHHHHHHHHHHHKJHHHHHHHHHHHHHHHHHI                           D",
        "F      DJHHHHHHHHHHHKEEEEEEEF# GHHHHKF              DF$ $                                          D",
        "F      DF$$   $   $ DEEJHHHHI   $ $ DF    $ACNNNNN ^DF*$ $NNNNNNNNNNNNN $  $  $ $ $ $  $ $         D",
        "F      DF$$  $ $ $ $DEEF$ $ $  $ $ $DF   $AMF $ $  NDF  > NN#NNN#NNN#NN N  N N>  N  >N $ $         D",
        "F      DLBBBC $   $ DEEF $ $   ABBBBMF  $AMEF$ $ $  DFNNNNN               $  NNNNNNNNN $ $         D",
        "F      GHHHHI N   N GHHINNNNN  GHHHHHI $AMJHINNNNN ^DF        $   $       N  N         N N         D",
        "F               $             #        AMJI$       NGI                   $   N $ $ $               D",
        "F               N      ABBBBBBBBBBBBBBBMJI$$               $ $ $ $ $ $   N   N  $ $                D",
        "LBBBBBBC     ^     ^  AMEEEEEEEEEEEEEEEEF   >  ABC     ABBC^N^N^N^N^N^N      N      >      ABBBBBBBM",
        "EEEEEEELBBBBBBBBBBBBBBMEEEEEEEEEEEEEEEEELBBBBBBMELBBBBBMEELBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBMEEEEEEEE"
    ],
    [
        "F                     N  N                                                  NNNNNN                 D",
        "F                     #                              $$$$                   $$$$$N                 D",
        "F                AC         $  $  $       $ $   ABC NNNNNN     $    $      NNNNN$N                 D",
        "F          $  $ AMFN   $$   N> N> N  ABC $ $ $ AMJI          $ N    $     N   # $N                 D",
        "F          N  N DJI N  $$#   NN NN   DELC >   AMJI   *       N      $    N       N     $           D",
        "F        $      DF   NNNNNN          DEELBBBBBMJI    N NNNNN    NNNN NNNN        N  $   N  ABBBBBBBD",
        "F        N      GI                   GHHHHHHHHHI                           N NNNNN   N     DEEEEEEEE",
        "F                                                                          N               DEEEEEEEE",
        "LBBBBBBC    ^^             ^^      ^               ^^       ^  ^    ^    ^^N       N   >   DEEEEEEEE",
        "EEEEEEELBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBMEEEEEEEE"
    ]
];

// konfigurácia levelu
const levelConfig = {
    width: 16,
	height: 16,
	"A": () => [ sprite("tileA"), area(), solid(), origin("bot") ],
	"B": () => [ sprite("tileB"), area(), solid(), origin("bot") ],
	"C": () => [ sprite("tileC"), area(), solid(), origin("bot") ],
	"D": () => [ sprite("tileD"), area(), solid(), origin("bot") ],
	"E": () => [ sprite("tileE"), area(), solid(), origin("bot") ],
	"F": () => [ sprite("tileF"), area(), solid(), origin("bot") ],
	"G": () => [ sprite("tileG"), area(), solid(), origin("bot") ],
	"H": () => [ sprite("tileH"), area(), solid(), origin("bot") ],
	"I": () => [ sprite("tileI"), area(), solid(), origin("bot") ],
	"J": () => [ sprite("tileJ"), area(), solid(), origin("bot") ],
	"K": () => [ sprite("tileK"), area(), solid(), origin("bot") ],
	"L": () => [ sprite("tileL"), area(), solid(), origin("bot") ],
	"M": () => [ sprite("tileM"), area(), solid(), origin("bot") ],
	"N": () => [ sprite("tileN"), area(), solid(), origin("bot") ],
    "$": () => [ sprite("coin", { anim: "rotation" }), area({ width: 10, height: 10 }), origin("bot"), scale(0.7), "coin" ],
    "*": () => [ sprite("apple", { anim: "active" }), area({ width: 10, height: 10 }), origin("bot"), scale(0.7), "apple" ],
    ">": () => [ sprite("saw", { anim: "active" }), area({ width: 20, height: 20 }), solid(), origin("bot"), scale(0.4), sawMovement(), "dangerousObject" ],
    "#": () => [ sprite("spikeHead", { anim: "blink" }), area({ width: 20, height: 20 }), solid(), origin("center"), scale(0.5), spikeHeadMovement(), "dangerousObject" ],
    "^": () => [ sprite("spike"), area({ width: 8, height: 4 }), origin("bot"), "dangerousObject" ]
};

// pohyb píly (saw)
function sawMovement(speed = 50, direction = "right") {
    return {
        add() {
            this.on("collide", (obj, col) => {
                if (col.isLeft()) direction = "right"; 
                else direction = "left";
            });
        },
        update() {
            if (direction == "right") this.move(speed, 0);
            else this.move(-speed, 0);
        }
    }
}

// pohyb pichľavej hlavy (spike head)
function spikeHeadMovement(speed = 50, direction = "down") {
    return {
        add() {
            this.on("collide", (obj, col) => {
                if (col.isBottom()) direction = "up";
                else direction = "down";
            });
        },
        update() {
            if (direction == "up") this.move(0, -speed);
            else this.move(0, speed); 
        }
    }
}

// nastavenia fontov
var fontConfigs = [
    { size: 16, font: "galvanic" },
    { size: 32, font: "galvanic" },
    { size: 48, font: "galvanic" },
    { size: 64, font: "galvanic" }
];
var fontColor = color(0, 153, 77);

var levelScores = [ 0, 0, 0, 0, 0 ];
var musicOn = false;
var music;

// vytvorenie scény pre hru
scene("game", ({ levelId, score, lives } = { levelId: 0, score: 0, lives: 3 }) => {
    // prehranie hudby s jej opakovaním a pridanie obrázku na pozadie
    if (musicOn == false) {
        music = play("background", { loop: true });
        musicOn = true;
    }
    add([ sprite("background"), pos(width() / 2, height() / 2), scale(1.17), origin("center"), fixed() ]);

    // nastavenie gravitačnej sily
    gravity(1500);

    // vygenerovanie mapy
    const level = addLevel(levels[levelId ?? 0], levelConfig);

    // pridanie hráčskej postavy
    const player = add([
        sprite("player"),
        pos(50, 110),
        area({ width: 20, height: 25 }),
        body(),
        origin("center"),
        scale(0.6)
    ]);

    // pravidelné vykonávanie nasledujúcich kódov
    player.onUpdate(() => {
        // nastavenie kamery pre sledovanie hráčskej postavy
        if (player.pos.x < 92) camPos(92, 69);
        else if (player.pos.x > 1491) camPos(1491, 69);
        else camPos(player.pos.x, 69);
        if (player.pos.y < 45) camPos(player.pos.x, 60);
        camScale(4)
        // zapísanie získaného skóre v danom leveli a prejednie do ďalšieho levelu
        if (player.pos.x > 1568) {
            if (levelId + 1 < levels.length) {
                switch (levelId) {
                    case 0: levelScores[0] = score; break;
                    case 1: levelScores[1] = score; break;
                    case 2: levelScores[2] = score; break;
                    case 3: levelScores[3] = score; break;
                }
                go("game", { levelId: levelId + 1, score: 0, lives: lives });
            // v prípade prejdenia posledného levelu, sa zastaví hudba a prejde sa na scénu gameClear
            } else {
                levelScores[4] = score;
                music.stop();
                musicOn = false;
                go("gameClear");
            }
        }
    });

    // nastavenia pohybov a prehrávania animácií hráčskej postavy na základe získaných klávesnicových vstupov
    const speed = 100;
    const jumpForce = 300;
    
    player.onGround(() => {
        if (!isKeyDown("left") && !isKeyDown("right")) player.play("idle");
        else player.play("run");
    });
    
    onKeyDown("left", () => {
        player.move(-speed, 0);
        player.flipX(true);
        if (player.isGrounded() && player.curAnim() !== "run") {
            player.play("run");
        }
    });
    
    onKeyDown("right", () => {
        player.move(speed, 0);
        player.flipX(false);
        if (player.isGrounded() && player.curAnim() !== "run") {
            player.play("run");
        }
    });
    
    onKeyRelease(["left", "right"], () => {
        if (player.isGrounded() && !isKeyDown("left") && !isKeyDown("right")) {
            player.play("idle");
        }
    });
    
    onKeyDown("space", () => {
        if (player.isGrounded()) {
            player.jump(jumpForce);
            play("jump");
        }
    });
    
    // vkladanie obrázkov predstavujúce bary
    add([ sprite("bar"), pos(0, 0), scale(0.85), origin("topleft"), fixed() ]);
    add([ sprite("bar"), pos(width(), 0), scale(0.85), origin("topright"), fixed() ]);

    // prepínanie medzi obrázkami predstavujúce čísla levelov
    var actualLevel;
    switch(levelId) {
        case 0: actualLevel = "level1"; break;
        case 1: actualLevel = "level2"; break;
        case 2: actualLevel = "level3"; break;
        case 3: actualLevel = "level4"; break;
        case 4: actualLevel = "level5"; break;
    }
    add([ sprite(actualLevel), pos(width() / 2, 40), scale(3), origin("center"), fixed() ]);
    
    // pripočítanie 10 bodov ku skóre pri každej kolízii hráča s mincou
    player.onCollide("coin", (c) => {
        score += 10;
        coinsLabel.text = "SCORE: " + score;
        play("coinPickUp");
        destroy(c);
    });

    // vkladanie textu pre skóre na scénu
    const coinsLabel = add([ text("SCORE: " + score, fontConfigs[2]), pos(35, 25), fontColor, fixed() ]);

    // vkladanie objektov predstavujúce životy hráča na scénu
    var life1, life2, life3;
    switch (lives) {
        case 1:
            life3 = add([ sprite("life"), pos(680, 10), scale(2), fixed() ]);
            break;
        case 2:
            life2 = add([ sprite("life"), pos(580, 10), scale(2), fixed() ]);
            life3 = add([ sprite("life"), pos(680, 10), scale(2), fixed() ]);
            break;
        case 3:
            life1 = add([ sprite("life"), pos(480, 10), scale(2), fixed() ]);
            life2 = add([ sprite("life"), pos(580, 10), scale(2), fixed() ]);
            life3 = add([ sprite("life"), pos(680, 10), scale(2), fixed() ]);
            break;
    }

    // zabezpečenie odobranie života pri kolízii hráča s nebezpečným objektom
    var injured = false;
    player.onCollide("dangerousObject", () => {
        if (injured == false) {
            play("injured");
            lives--;
            switch (lives) {
            case 2: { destroy(life1); break; }
            case 1: { destroy(life2); break; }
            case 0: { music.stop(); musicOn = false; go("gameOver"); break; }
            }
            injured = true;
            wait(1, () => { injured = false; });
        }
    });

    // zabezpečenie doplnenie života pri kolízii hráča s jablkom
    player.onCollide("apple", (a) => {
        destroy(a);
        play("applePickUp");
        if (lives < 3) {
            lives += 1;
            switch (lives) {
                case 2: { life2 = add([ sprite("life"), pos(580, 10), scale(2), fixed() ]); break; }
                case 3: { life1 = add([ sprite("life"), pos(480, 10), scale(2), fixed() ]); break; }
            }
        }
    });
});

// vytvorenie scény pre titulok
scene("title", () => {
    add([ sprite("background"), pos(width() / 2, height() / 2), scale(1.17), origin("center") ]);
    add([ sprite("gameTitle"), pos(width() / 2, height() / 2 - 20), origin("center"), scale(0.7) ]);
    add([ text("PRESS ENTER ", fontConfigs[1]), origin("center"), pos(width() / 2, height() - 90), fontColor ]);
    onKeyPress("enter", () => { go("tutorial") });
});

// vytvorenie scény pre tutoriál
scene("tutorial", () => {
    add([ sprite("background"), pos(width() / 2, height() / 2), scale(1.17), origin("center") ]);
    add([ sprite("gameTutorial"), pos(width() / 2, height() / 2), origin("center"), scale(0.78) ]);
    add([ text("Tutorial", fontConfigs[2]), origin("top"), pos(width() / 2, 90), fontColor ]);
    add([ text("Clear all 5 levels", fontConfigs[0]), origin("top"), pos(250, 205), fontColor ]);
    add([ text("Avoid traps", fontConfigs[0]), origin("top"), pos(250, 275), fontColor ]);
    add([ text("Collect coins", fontConfigs[0]), origin("top"), pos(250, 345), fontColor ]);
    add([ text("Move right", fontConfigs[0]), origin("topleft"), pos(450, 205), fontColor ]);
    add([ text("Move left", fontConfigs[0]), origin("topleft"), pos(450, 275), fontColor ]);
    add([ text("Jump", fontConfigs[0]), origin("topleft"), pos(450, 345), fontColor ]);
    add([ text("SPACE", fontConfigs[0]), origin("topleft"), pos(570, 345), fontColor ]);
    add([ text("PRESS ENTER TO START", fontConfigs[1]), origin("top"), pos(width() / 2, height() - 140), fontColor ]);
    onKeyPress("enter", () => { go("game") });
});

// vytvorenie scény pre oznam o neúspešnom ukončení hry (Game Over)
scene("gameOver", () => {
    add([ sprite("background"), pos(width() / 2, height() / 2), scale(1.17), origin("center") ]);
    add([ sprite("table"), pos(width() / 2, height() / 2), origin("center"), scale(0.78) ]);
    add([ text("GAME OVER!", fontConfigs[3]), origin("center"), pos(width() / 2, height() / 2), fontColor ]);
    add([ text("PRESS ENTER TO RESTART GAME", fontConfigs[1]), origin("top"), pos(width() / 2, height() - 140), fontColor ]);
    play("gameOver");
    onKeyPress("enter", () => { go("game") });
});

// vytvorenie scény pre oznam o úspešnom ukončení hry (Game Clear) a tabuľku získaných skóre
scene("gameClear", () => {
    add([ sprite("background"), pos(width() / 2, height() / 2), scale(1.17), origin("center") ]);
    add([ sprite("scoreTable"), pos(width() / 2, height() / 2), origin("center"), scale(0.78) ]);
    add([ text("GAME CLEAR!", fontConfigs[3]), origin("center"), pos(width() / 2, 110), fontColor ]);
    add([ text("LEVEL", fontConfigs[1]), origin("center"), pos(305, 172), fontColor ]);
    add([ text("SCORE", fontConfigs[1]), origin("center"), pos(495, 172), fontColor ]);
    var levelNumber = 0;
    for (var i = 225; i < 460; i += 53) {
        levelNumber++;
        add([ text(levelNumber, fontConfigs[1]), origin("center"), pos(305, i), fontColor ]);
        add([ text(levelScores[levelNumber - 1], fontConfigs[1]), origin("center"), pos(495, i), fontColor ]);
    }
    var totalScore = levelScores[0] + levelScores[1] + levelScores[2] + levelScores[3] + levelScores[4];
    add([ text("TOTAL SCORE: " + totalScore, fontConfigs[1]), origin("top"), pos(width() / 2, height() - 130), fontColor ]);
    add([ text("PRESS ENTER TO RESTART GAME", fontConfigs[0]), origin("top"), pos(width() / 2, height() - 90), fontColor ]);
    play("gameClear");
    onKeyPress("enter", () => { go("game") });
});

// prejdenie na scénu pre titulok
go("title");

debug.inspect = false;
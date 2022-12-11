// import the robotjs library
var robot = require('robotjs');

function main() {
    console.log("Starting...");
    sleep(4000);

    //t = tree, i = inventory




    //var number_of_loops =0; Jos haluaa määrittää looppien määrän
    //while(number_of_loops < 5){ Jos haluaa määrittää looppien määrän
    while(true){
        var tree = findTree();
        //Jos puuta ei löydy, error ja poistuu loopista
        if(tree == false){
            rotateCamera();
            continue;
        }
        //hakkaa löydetyn puun
        robot.moveMouse(tree.x, tree.y);
        robot.mouseClick();
        sleep(3000);

        dropLogs();

        // number_of_loops +=1; Jos haluaa määrittää looppien määrän
    }
}

function dropLogs(){
    var ix = 2520;
    var iy = 1227;
    var inventory_log_color = "735835";

    var pixel_color = robot.getPixelColor(ix,iy);
    //console.log("Inventory log color is: " + pixel_color);


    var wait_cycles = 0;
    var max_wait_cycles =9;
    while (pixel_color != inventory_log_color && wait_cycles < max_wait_cycles){
        //Odottaa hetken, jos puun kaataminen onnistuu
        sleep(1000);
        //Käy läpi pikselit odotuksen jälkeen
        pixel_color = robot.getPixelColor(ix,iy);
        //Kasvattaa aina yhdellä
        wait_cycles++;
    }

    //pudottaa login inventorystä, jos väri mätchää login väriin
    if(pixel_color == inventory_log_color){
        robot.moveMouse(ix,iy);
        robot.mouseClick('right');
        sleep(300);
        robot.moveMouse(ix,iy+70);
        robot.mouseClick();
        sleep(1000);
    }
}
function ScreenCapture(){
    //Ottaa screenshotin
    var img = robot.screen.capture(0, 0, 2560, 1440);

    var pixel_color = img.colorAt(30,18);
    console.log(pixel_color);
}
function findTree(){
    var x = 300, y = 300, width = 1300, height = 400;
    var img = robot.screen.capture(x, y, width, height);

    var tree_colors = ["6A5130","765B37","6D5432","664E2E","574328","6A6A30","705634","	705C34","60492C"];

    for(var i = 0; i < 1000; i++){
        var random_x = getRandomInt(0,width-1);
        var random_y = getRandomInt(0, height-1);
        var sample_color = img.colorAt(random_x,random_y);

        if (tree_colors.includes(sample_color)){
            var screen_x = random_x +x;
            var screen_y = random_y +y;


            if(confirmTree(screen_x, screen_y)){
                console.log("Found a tree at: " +screen_x + ", " + screen_y + " color " + sample_color);
                return {x: screen_x, y: screen_y};
            } else{
                console.log("Uncorfmied tree at: " +screen_x + ", " + screen_y + " color " + sample_color);
            }

        }
    }

    //ei löytynyt väriä screenshotista
    return false;

}

function confirmTree(screen_x, screen_y){
    //liikuta hiiri annettuihin koordinaatteihin
    robot.moveMouse(screen_x,screen_y);
    //Odotetaan hetki ennen kuin teksti ilmestyy
    sleep(300);

    //Tarkastetaan tekstin väri
    var check_x = 103;
    var check_y = 63;
    var pixel_color = robot.getPixelColor(check_x, check_y);

    return pixel_color == "00ffff";

}

function rotateCamera(){
    console.log("Rotating camera");
    robot.keyToggle('right', 'down');
    sleep(1000);
    robot.keyToggle('right','up');
}

function sleep(ms) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)) ,0,0,ms);
}

function getRandomInt(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;


}


main();

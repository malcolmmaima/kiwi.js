/// <reference path="../../src/Kiwi.ts" />

/**
* This script is a demonstration of how you can use a basic spritesheet. This covers loading of spritesheets and changing the cell gameobjects will use.
**/

class Spritesheets extends Kiwi.State {

    constructor() {
        super('Spritesheets');
    }
    
    preload() {
        // Load our spritesheet we want to use. 

        /**
        * When loading spritesheets you have to pass slightly more information.
        * - Parameter One - Name of the spritesheet for your reference.
        * - Parameter Two - The URL to the spritesheet.
        * - Parameter Three - The width of each cell
        * - Parameter Four - The height of each cell
        **/
        this.addSpriteSheet('characters', 'assets/spritesheets/characters.png', 150, 117);
    }
    
    /**
    * A few different sprites that we will have.
    * Note that each one will be based off a different cell in the spritesheet.
    * Also when using a spritesheet you can use either the static image or sprite gameobjects BUT only the sprite will support have the animation component.
    **/
    skele: Kiwi.GameObjects.Sprite;
    robot: Kiwi.GameObjects.StaticImage;
    spartan: Kiwi.GameObjects.Sprite;

    create() {
        
        /**
        * To change which cell the sprite is using we can change the CELL INDEX which is on both the sprite and static image objects.
        **/
        this.skele = new Kiwi.GameObjects.Sprite(this, this.textures.characters, 100, 10);
        this.skele.cellIndex = 2;       //the skeleton is the third cell

        this.robot = new Kiwi.GameObjects.StaticImage(this, this.textures.characters, 500, 200);
        this.robot.cellIndex = 8;       //the robot is the ninth cell
        
        this.spartan = new Kiwi.GameObjects.Sprite(this, this.textures.characters, 150, 300);
        this.spartan.cellIndex = 5;     //the spartan is the sixth cell

        //add them all to the stage
        this.addChild(this.skele);
        this.addChild(this.robot);
        this.addChild(this.spartan);

    }

}
class Player{
    constructor(){
        this.name = "";
        this.totalCoins = 0;
        this.status = "Average";
        this.hasStar = false;
        this.gameActive = true
    }
    setName(namePicked){
        this.name = namePicked;
    }
    gotHit(){
        if(this.status === "Powered Up"){
            this.status = "Big";
        } else if(this.status === "Big"){
            this.status = "Average"
        } else if(this.status === "Average"){
            this.status = "Dead"
        }
    }
    powerUp(){
        if(this.status === "Average"){
            this.status = "Big"
        } else if(this.status === "Big"){
            this.status = "Powered Up"
        } else {
          this.hasStar = true
        }
    }
    addCoin(){
        this.totalCoins += 1
    }
    print(){
        console.log(`Name: ${this.name},\n Coins: ${this.totalCoins},\n Status: ${this.status}`)
    }
}


const mario = new Player();
mario.setName("Mario")

const game = setInterval(() => {
    let value = Math.floor(Math.random() * 3);
    if(value === 0){
        mario.gotHit();
    } else if(value === 1){
        mario.powerUp();
    } else {
        mario.addCoin()
    }
    mario.print();

    if (mario.status === "Dead") {
        clearInterval(game)
    }
}, 750)
class Form{
    constructor(){

    }
    display(){
        var title = createElement('h2')
        title.html("Car racing Game")
        title.position(450,100)

        var input = createInput("name")
        input.position(500,300)

        var button = createButton('play')
        button.position(540,330)

        button.mousePressed(function(){
            input.hide();
            button.hide();

            var name = input.value();
            playerCount += 1;

            player.update(name)
            player.updateCount(playerCount)
            
            var greeting = createElement('h3')
            greeting.html("Hello "+name)
            greeting.position(130,160)

        })
    }
}
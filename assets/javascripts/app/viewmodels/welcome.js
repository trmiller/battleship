define(function() {
    var ctor = function () {
        this.displayName = 'Welcome to Battleship!';
        this.description = 'This is an exploration of node.js, durandal, and other technologies in the context of a fun game.';
        this.features = [
            'Play with a friend',
            'Play against a computer',
            'Gain powerups',
            'Crappy graphics!'
        ];
    };

    return ctor;
});
function greet(name = 'Guest') {
    console.log(`Hey ${name}`);
    return 'something';
}

greet('Josh');
greet('Oksana');
greet('Oualid');
greet('Tim');

greet();

function playGodzilla() {
    console.log('Prepare movie');
    console.log('clean seats');
    console.log('and rolling...');
    console.log('Godzilla - The Movie');
    console.log('rewind the tape');
}
function playJurassicPark() {
    console.log('Prepare movie');
    console.log('clean seats');
    console.log('and rolling...');
    console.log('Jurassic Park');
    console.log('rewind the tape');
}

function playMovie(fn) {
    console.log('Start the process');
    fn();
    console.log('');
}

playMovie(playGodzilla);
playMovie(playJurassicPark);

function movieGenerator(title) {
    return () => {
        console.log('Prepare movie');
        console.log('and rolling...');
        console.log(title);
        console.log('rewind the tape');
    };
}

const playHarryPotter = movieGenerator('Harry Potter');
const playBatman = movieGenerator('Batman');

playMovie(playHarryPotter);
playMovie(playBatman);

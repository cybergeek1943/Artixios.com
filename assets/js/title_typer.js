// define the sleep function
const sleep = (duration) => new Promise(resolve => setTimeout(resolve, duration*1000));

// title getter & setter functions
function get_title() { // gets the main_title header
    return document.getElementById('main_title').innerHTML
};
function set_title(text) { // sets the main_title header
    document.getElementById('main_title').innerHTML = text
}

// blinker effect function
async function blink(times=5, speed=0.4) {
    for (let i=0; i < times; i+=1) {
        await sleep(speed);
        if (i % 2 === 0) {
            set_title(get_title().slice(0, -1) + ' ');
        } else {
            set_title(get_title().slice(0, -1) + '|');
        }
        
    }
}

// typer function
async function typer(new_title) {
    // untype the original title
    const original_text_length = get_title().length
    for (let i=0; i < original_text_length; i+=1) {
        await sleep(0.1);
        set_title(get_title().slice(0, -2)+'|');
    }

    // type the new title
    const new_text_length = new_title.length
    for (let i=0; i < new_text_length; i+=1) {
        await sleep(0.1);
        set_title(get_title().slice(0, -1)+(new_title[i]+'|'));
    }

    // blinking effect to pause function before return
    await blink()
}

// main loop... because await only works inside async functions
async function main() {
    await blink(8)  // start with blinking

    // then start loop
    while (true) {
        await typer('Design • Invent • Create')
        await typer('Study • Learn • Master')
        await typer('Share • Inspire • Educate')
    }
    
}
main()  // start main loop

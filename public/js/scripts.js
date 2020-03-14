function load() {
    console.log("load event detected!");
    console.log('scripts.js loaded!')

    // Create a map of event loggers
    function asgn_fcn(target, event) {
        target[event] = (event) => {
            console.log(`Target Id: ${event.target.id}, Event Type: ${event.type}` )
        }
    }

    function asgn_all(target) {
        for (var fcn in target) {
            if (fcn.substr(0, 2) == 'on' && target.hasOwnProperty(fcn) && target[fcn] == null) {
                target[fcn] = (event) => {
                    if (!['mouse', 'pointer', 'focus'].some(type => event.type.includes(type))) {
                        console.log(`Target Id: ${event.target.id}, Event Type: ${event.type}`)
                    }
                }
            }

        }
    }

    const my_iframe = document.getElementById("my_iframe");
    asgn_all(my_iframe)

    const my_button = document.getElementById("my_button");
    asgn_all(my_button)
    // asgn_fcn(my_button, 'onsubmit')
    // asgn_fcn(my_button, 'onload')
    // asgn_fcn(my_button, 'onloadstart')
    // asgn_fcn(my_button, 'onloadend')

    const my_form = document.getElementById("my_form");
    asgn_all(my_form)

    // Window
    asgn_all(window)

    // Window.document
    asgn_all(window.document)
}

window.onload = load;

function load() {
    console.log("load event detected!");
    console.log('scripts.js loaded!')

    // Create a map of event loggers
    function asgn_fcn(target, event) {
        target[event] = (event) => {
            console.log(`Target Id: ${event.target.id}, Event Type: ${event.type}` )
        }
    }

    var ignoreMe = ['mouse', 'pointer', 'focus', 'device', 'blur', 'click', 'resize']
    function asgn_all(target) {
        for (var fcn in target) {
            if (fcn.substr(0, 2) == 'on' && target.hasOwnProperty(fcn) && target[fcn] == null) {
                target[fcn] = (event) => {
                    if (!ignoreMe.some(type => event.type.includes(type))) {
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

    const my_form = document.getElementById("my_form");
    asgn_all(my_form)

    // Window
    asgn_all(window)

    // Window.document
    asgn_all(window.document)
}

window.onload = load;

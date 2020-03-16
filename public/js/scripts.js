function load() {
    console.log("load event detected!");
    console.log('scripts.js loaded!')

    var ignoreMe = ['mouse', 'pointer', 'focus', 'device', 'blur', 'click', 'resize']
    function asgn_all(target) {
        for (var fcn in target) {
            if (fcn.substr(0, 2) == 'on' && target.hasOwnProperty(fcn) && target[fcn] == null) {
                target[fcn] = (event) => {
                    // Special targets: window, html, document
                    let target;
                    if (event.target === window) {
                        target = 'window'
                    } else if (event.target === document) {
                        target = 'document'
                    } else {
                        target = `localName: ${event.target.localName}, id: ${event.target.id}`
                    }
                    if (ignoreMe.some(type => event.type.includes(type))) {
                        // console.log(`Skipping: ${event.type}`)
                    } else {
                        console.log(`Target: ${target}, Event Type: ${event.type}`)
                        if (event.type == 'beforeunload') {
                            // debugger
                        }
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

    // https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
    // A different event, load, should be used only to detect a fully-loaded page.
    // It is a common mistake to use load where DOMContentLoaded would be more appropriate.
    window.addEventListener('DOMContentLoaded', (event) => {
        console.log('window: DOM fully loaded and parsed');
    });

    document.addEventListener('DOMContentLoaded', (event) => {
        console.log('document: DOM fully loaded and parsed');
    });

}

window.onload = load;

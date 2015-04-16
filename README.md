# scrollerciser

Joke repo

Go to http://scroll-o-meter.club/

open chrome developer console

paste the code below

hit enter

get fit

v~~~PASTE THIS~~~v
function timeout() {
    setTimeout(function () {
        $("html, body").animate({ scrollTop: $(document).height() })
        timeout();
    }, 500);
}
timeout()

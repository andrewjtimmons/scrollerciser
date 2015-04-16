# scrollerciser

joke repo

go to http://scroll-o-meter.club/

open chrome developer console

paste the code below

hit enter

get fit

v~paste ths~v

function timeout() {
    setTimeout(function () {
        $("html, body").animate({ scrollTop: $(document).height() })
        timeout();
    }, 500);
}
timeout()

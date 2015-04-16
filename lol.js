function timeout() {
    setTimeout(function () {
        $("html, body").animate({ scrollTop: $(document).height() })
        timeout();
    }, 500);
}
timeout()

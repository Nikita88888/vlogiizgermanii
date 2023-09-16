document.addEventListener("visibilitychange", function() {
    if (document.visibilityState === "hidden") {
        location.reload()
    } else if (document.visibilityState === "visible") {
        location.reload()
    }
});
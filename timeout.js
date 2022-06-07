function IdleTimeout(timeoutSeconds, options){

    var defaultOptions = {
        callback: function() {},
        alertTimeoutSeconds: 10
    }
    this.timeoutSeconds = timeoutSeconds
    this.options = Object.assign({}, options, defaultOptions);

    this.startTimer();
}

IdleTimeout.prototype.startTimer = function () {
    setTimeout(this.onTimerDone, this.timeoutSeconds * 1000);
}

IdleTimeout.prototype.onTimerDone = function() {
    console.log('timer completed');
}
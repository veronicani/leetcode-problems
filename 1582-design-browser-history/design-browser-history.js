/**
 * @param {string} homepage
 */
 class BrowserHistory {
        
    constructor(homepage) {
        this.homepage = homepage;
        this.history = [homepage];
        this.currentPlace = 0;
        this.currentUrl = homepage;
    }

    visit = function(url) {
        this.history.splice(this.currentPlace + 1);
        this.history.push(url);
        this.currentPlace++;
};

    back = function(steps) {
        this.currentPlace -= steps;
        if (this.currentPlace < 0) this.currentPlace = 0;
        
        return this.history[this.currentPlace];
    };

    forward = function(steps) {
        this.currentPlace += steps;
        if (this.currentPlace > this.history.length - 1) this.currentPlace = this.history.length - 1;

        return this.history[this.currentPlace];
    };
};

/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
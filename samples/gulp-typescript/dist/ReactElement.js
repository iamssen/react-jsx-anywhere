// React Classes
var ReactElement = (function () {
    function ReactElement(type, props, children) {
        this.type = type;
        this.props = props;
        this.children = children;
    }
    return ReactElement;
})();
module.exports = ReactElement;

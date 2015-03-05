'use strict'

// React Classes
class ReactElement {
	constructor(type, props, children) {
		this.type = type
		this.props = props
		this.children = children
	}
}

class React {
	static createElement(type, props, ...children) {
		return new ReactElement(type, props, children)
	}
}

// Classes
class Application {
	toTypeString() {
		return 'application'
	}
}

class Container {
	toTypeString() {
		return 'container'
	}
}

class Button {
	toTypeString() {
		return 'button'
	}
}

class Label {
	toTypeString() {
		return 'label'
	}
}

// Exports
var element = jsx(`
	<Application num={1} str="a">
		<Container num={2} str="b">
			<Label num={3} str="c"/>
			<Button num={4} str="d"/>
		</Container>
	</Application>
`)

module.exports = element
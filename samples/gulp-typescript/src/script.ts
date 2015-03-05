///<reference path="ReactElement.ts"/>

import ReactElement = require('./ReactElement')

class React {
	static createElement(type:any, props?:Object, ...children:Array<ReactElement>):ReactElement {
		return new ReactElement(type, props, children)
	}
}

function jsx(str:string):ReactElement {
	return null
}

// Classes
class Application {
	public toTypeString():string {
		return 'application'
	}
}

class Container {
	public toTypeString():string {
		return 'container'
	}
}

class Button {
	public toTypeString():string {
		return 'button'
	}
}

class Label {
	public toTypeString():string {
		return 'label'
	}
}

// Exports
var element:ReactElement = jsx(`
	<Application num={1} str="a">
		<Container num={2} str="b">
			<Label num={3} str="c"/>
			<Button num={4} str="d"/>
		</Container>
	</Application>
`)

export = element
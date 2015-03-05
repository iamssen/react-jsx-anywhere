// React Classes
class ReactElement {
	public type:any
	public props:Object
	public children:Array<ReactElement>

	constructor(type:any, props:Object, children:Array<ReactElement>) {
		this.type = type
		this.props = props
		this.children = children
	}
}

export = ReactElement
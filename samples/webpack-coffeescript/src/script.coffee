# React Classes
class ReactElement
	constructor: (@type, @props, @children) ->

class ReactClass
	createElement: (type, props, children...) ->
		new ReactElement(type, props, children)

React = new ReactClass

# Classes
class Application
	toTypeString: () -> 'application'

class Container
	toTypeString: () -> 'container'

class Button
	toTypeString: () -> 'button'

class Label
	toTypeString: () -> 'label'

# Exports
module.exports = jsx("""
	<Application num={1} str="a">
		<Container num={2} str="b">
			<Label num={3} str="c"/>
			<Button num={4} str="d"/>
		</Container>
	</Application>
""")


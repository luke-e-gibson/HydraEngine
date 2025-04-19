#Features to add:
- Text rendering
- Physics Extensions

#Todo:
## Keyboard Input
- ( X ) Handel Input
    - ( X ) Listen to keyboard events
    - ( X ) Process Input 
- () Allow game Engine accses to input
    - ( X ) Function to allow engine to accede map
    - (X ) Key event types
      - Pressed: Bool true pressed false not pressed
- () Add input to context
    - ( X ) Add input to Context interface
    - ( X ) Example demo

## Mouse Input
- Mouse position in side canvas
- ( X ) Handel Input
	- ( X ) Listen to event
	- ( X ) Process Input
- ( X ) Allow Game engine accses
	- ( X ) Game engine accese
	- ( X ) Script accses
- ( X ) Demo
	
## Extention Support
- (  ) Add and load extentions
	- (  ) Extentions metdata json schema
		- Extentiosn load through main Engine initalizeation
	- (  ) Add extention to engine
	- (  ) Load and initalize extention
	- (  ) Bind functions to extentiosn
- (  ) Call extentions binds

## More Sprite options
- ( X ) solid color sprites
	- ( X ) Engine Sprite adapation for solid color
	- ( X ) Addapt triton render for soild color sprites
- ( X ) sprite sizes
- (  ) pixel art sprites
	- (  ) Config texture for scaled up none fillter texture

## Engine Customization from game json
- ( X ) Set custom tab title from game json
	- Name and version combine to Name: Version for tab title
- ( X ) Set background color
	- ( X ) Set render background color

## Other
- ( X ) Load game from in memory json blob
	
## Editor
- (  ) Editor Gui
	- ( X ) Inspector
		- (  ) Add interactivuty
	- ( X ) Scene View
		- (  ) Refresh Sceen
	- ( * ) Console
		- (  ) Fix scroll container
		- (  ) Add interactivuty
	- ( X ) Scene View	
		- (  ) Add interactivuty
		
- (  ) Save and create Projects
	- (  ) Create Project store
	- (  ) Save and load project from project store
	- (  ) Create new project based of template
- (  ) Script Editor
	- (  ) Vscode Editor
	- (  ) Saving and loading script from somewhere

## Script Context saving
- ( X ) Local context
- ( X ) Globel context
- ( X ) Save context 

## Bugs:
- (  ) Screen color not loading set value and staying green 
- (  ) Sprites prefering color over texture and color is block in test.json in editor
	- (  ) Sprites not loading color in editor
- (  ) Script run start befor game start



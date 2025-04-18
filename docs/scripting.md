# Scripting
Hydra scripting loads and runs javascript from the game.json and currently allows all javasciprt windows attriutes. Currently all function calls are stateless.

Scripts are run from top to bottom in the components list. Scripts are also requried to return the context of the script runtime and all modifed values will be reflected on the gameObject affter the script has run.

## Script functions:
- Start - Required
  - When the game engine creates the object this script function will run
- Update - Required
  - Runs everyframe before rendering 

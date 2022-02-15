# KubeJS-Definitions

KubeJS d.ts documentations for VScode linting

## IMPORTANT
Typedefs aren't final! Automatic ones doesnt contain all as the java parser isn't done!
JSON data from the parser is sourced from <https://kubejs.com/wiki/data.json>

## Basic usage

1. Download the repository
2. Place somewhere in your workspace
3. Modify your `.vscode/settings.json` and add 
```json
{
	"typescript.tsdk": "RELATIVE_PATH_TO_THE_LIB_FOLDER"
}
```

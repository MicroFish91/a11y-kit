# Accessibility Testkit

Accessibility Testkit (a11y-kit) is a menu-driven extension that allows users to quickly demo a small subset of VSCode's
common UI features with different base configuration sets. a11y-kit's fast feature demo'ing enables the user to quickly check
UI configurations for screen reader compliance.

## Getting Started

Option 1: Search for and install a11y-kit from VSCode's Extension Marketplace.

Option 2: Clone the repo and run 'npm install'

Open the command pallette and type in "a11y", "menu", or "accessibility". The menu command should pop up under "a11y-kit: ..."

<img src="./src/resources/menu.gif" alt="a11y-kit Menu Display" />

Finally, choose a menu item to demo.

## Features & File Paths for Changing Options

1. Quick Picks

- Show Quick Picks Method - Single Selection
  - "src/components/quickPicks/showQuickPicks.ts" => showQuickPicksSingle()
- Show Quick Picks Method - Multiple Selection
  - "src/components/quickPicks/showQuickPicks.ts" => showQuickPicksMany()
- Create Quick Picks Method - Single Selection
  - Quick Pick: "src/components/quickPicks/createQuickPicks.ts" => createQuickPicksSingle()
  - Quick Pick Item: "src/components/quickPicks/CustomQuickPickItem.ts"
- Create Quick Picks Method - Multiple Selection
  - Quick Pick: "src/components/quickPicks/createQuickPicks.ts" => createQuickPicksMany()
  - Quick Pick Item: "src/components/quickPicks/CustomQuickPickItem.ts"

2. Input Box

- Show Input Box Method - Without Password
  - "src/components/inputBox/showInputBox.ts" => showInputBox()
- Show Input Box Method - With Password
  - "src/components/inputBox/showInputBox.ts" => showInputBoxWithPassword()
- Create Input Box Method - Without Password
  - "src/components/inputBox/createInputBox.ts" => createInputBox()
- Create Input Box Method - With Password
  - "src/components/inputBox/createInputBox.ts" => createInputBoxWithPassword()

3. Tree View (current default is a Binary Search Tree)

- Main Toolbar Icon Commands - Insert (inserts a random integer value into the tree), Refresh, Clear
- Inline Toolbar Icons (Placeholders) - Edit, Delete
- File Path: "src/components/treeView/BinarySearchTreeProvider.ts"

## Demo a Change to Existing Feature

1. Clone the repository
2. Install dependencies (npm install)
3. Optional - Create a branch (`git checkout -b <testBranchName>`)
4. Navigate to "src/components/". These are the list of the current VSCode UI features.
5. Open the UI feature folder of choice, and find your creation method. Open the file, make changes to your feature, then save.
6. Run the change with F5 in the Extension Host mode, following the instructions in the Getting Started section.

<img src="./src/resources/changeFeature.gif" alt="Changing an Existing Feature" />

## Adding a New Feature

Coming soon...

## Screen Readers for Testing

1. JAWS - Download [here](https://support.freedomscientific.com/Downloads/JAWS).
2. NVDA - Download [here](https://www.nvaccess.org/download/). Quick start, press: control + alt + n
3. Apple Voiceover (Mac OS) - Open spotlight search and look for Apple Voiceover, or press Command-F5 to enable.
   For more information on Apple Voiceover, click [here](https://www.apple.com/voiceover/info/guide/_1121.html).

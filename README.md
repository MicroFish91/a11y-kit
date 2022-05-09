# Accessibility Testkit

Accessibility Testkit (a11y-kit) is a menu-driven extension that allows users to quickly demo a small subset of VSCode's
common UI features with different base configuration sets. a11y-kit's fast feature demo'ing enables the user to quickly check
UI configurations for screen reader compliance.

## Getting Started

<b><u>Option 1</u></b>: Search for and install a11y-kit from VSCode's Extension Marketplace.

<b><u>Option 2</u></b>: Clone the repo and run 'npm install'

Open the command pallette and type in "a11y", "menu", or "accessibility". The menu command should pop up under "a11y-kit: ..."

<img src="./resources/menu.gif" alt="a11y-kit Menu Display" />

Finally, choose a menu item to demo.

## Features & File Paths for Changing Options

The following sections highlight all the UI components that are available for preview through this extension.
Their relative file locations in the repository are also listed below.

### Quick Picks:

#### a) Show Quick Picks Method - Single Selection

File Path: "src/components/quickPicks/showQuickPicks.ts" => showQuickPicksSingle()

#### b) Show Quick Picks Method - Multiple Selection
File Path: "src/components/quickPicks/showQuickPicks.ts" => showQuickPicksMany()

#### c) Create Quick Picks Method - Single Selection
Quick Pick Path: "src/components/quickPicks/createQuickPicks.ts" => createQuickPicksSingle()
<br />
Quick Pick Item Path: "src/components/quickPicks/CustomQuickPickItem.ts"

#### d) Create Quick Picks Method - Multiple Selection
Quick Pick Path: "src/components/quickPicks/createQuickPicks.ts" => createQuickPicksMany()
<br />
Quick Pick Item Path: "src/components/quickPicks/CustomQuickPickItem.ts"

### Input Box:

#### a) Show Input Box Method - Without Password
File Path: "src/components/inputBox/showInputBox.ts" => showInputBox()

#### b) Show Input Box Method - With Password
File Path: "src/components/inputBox/showInputBox.ts" => showInputBoxWithPassword()

#### c) Create Input Box Method - Without Password
File Path: "src/components/inputBox/createInputBox.ts" => createInputBox()

#### d) Create Input Box Method - With Password
File Path: "src/components/inputBox/createInputBox.ts" => createInputBoxWithPassword()

### Tree View (current default is a Binary Search Tree):

<b><u>Main Toolbar Icon Commands</u></b>: Insert (inserts a random integer value into the tree), Refresh, Clear
<br />
<b><u>Inline Toolbar Icons (Placeholders)</u></b>: Edit, Delete
<br /> <br />
File Path: "src/components/treeView/BinarySearchTreeProvider.ts"

## Demo a Change to Existing Feature

1. Clone the repository
2. Install dependencies (npm install)
3. Optional - Create a branch (`git checkout -b <testBranchName>`)
4. Navigate to "src/components/". These are the list of the current VSCode UI features.
5. Open the UI feature folder of choice, and find your creation method. Open the file, make changes to your feature, then save.
6. Run the change with F5 in the Extension Host mode, following the instructions in the Getting Started section.

<img src="./resources/changeFeature.gif" alt="Changing an Existing Feature" />

## Adding a New Feature

Coming soon...

## Screen Readers for Testing

1. <b>JAWS</b>: Download [here](https://support.freedomscientific.com/Downloads/JAWS).
2. <b>NVDA</b>: Download [here](https://www.nvaccess.org/download/). Quick start, press: control + alt + n
3. <b>Apple Voiceover (Mac OS)</b>: Open spotlight search and look for Apple Voiceover, or press Command-F5 to enable.
   For more information on Apple Voiceover, click [here](https://www.apple.com/voiceover/info/guide/_1121.html).

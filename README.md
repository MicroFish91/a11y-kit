# Accessibility Testkit (a11y-kit)

Accessibility Testkit (`a11y-kit`) is a menu-driven extension that allows users to quickly demo a small subset of VS Code's
common UI features with different base configuration sets. `a11y-kit`'s fast feature demo'ing enables the user to quickly check
UI configurations for screen reader compliance.

## Getting Started

<b><u>Option 1</u></b>: Search for and install `a11y-kit` from VS Code's extension marketplace.

<b><u>Option 2</u></b>: Clone the repo, run npm install, hit F5.

Open the command pallette and type in `a11y`. The menu command should pop up under `a11y-kit: ...`

![Use the a11y-kit menu](resources/menu.gif)

Choose `a11y-kit: Select UI feature for accessibility testing`.  Finally, choose the menu item you wish to demo.

## Menu Components

Menu components are listed in the `components/` directory.  Any additions, changes, or enhancements to the components should be made there. 

Integrate new components into the menu by calling the `addComponent` Menu method.

## Web Support

`a11y-kit` also has full support as a web extension.  Try it out [here](https://vscode.dev/).

## Screen Readers for Testing

1. <b>JAWS</b>: Download [here](https://support.freedomscientific.com/Downloads/JAWS).
2. <b>NVDA</b>: Download [here](https://www.nvaccess.org/download/).  Shortcut: `control + alt + n`
3. <b>Apple Voiceover (Mac OS)</b>: Open spotlight search and look for Apple Voiceover, or press `Command-F5` to enable.
   For more information on Apple Voiceover, click [here](https://www.apple.com/voiceover/info/guide/_1121.html).

## Attribution

Icon created by Freepik at Flaticon

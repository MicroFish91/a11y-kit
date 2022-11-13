# Accessibility Testkit

Accessibility Testkit (a11y-kit) is a menu-driven extension that allows users to quickly demo a small subset of VSCode's
common UI features with different base configuration sets. a11y-kit's fast feature demo'ing enables the user to quickly check
UI configurations for screen reader compliance.

## Getting Started

<b><u>Option 1</u></b>: Search for and install a11y-kit from VS Code's Extension Marketplace.

<b><u>Option 2</u></b>: Clone the repo and run `npm install`

Open the command pallette and type in `a11y`. The menu command should pop up under `a11y-kit: ...`

<img src="https://github.com/MicroFish91/a11y-kit/blob/main/resources/menu.gif?raw=true" alt="a11y-kit Menu Display" />

Choose `a11y-kit: Select UI feature for accessibility testing`. Finally, choose then menu item you wish to demo.

## UI Components

UI components are listed in the `components/` folder.  Any changes or enhancements to the components should be made here.

<img src="https://github.com/MicroFish91/a11y-kit/blob/main/resources/changeFeature.gif?raw=true" alt="a11y-kit Menu Display" />

When adding a new component, follow the design flow of the other components in this directory.  Once the component is built per the `IComponent` format, it can then be incorporated using `createAndRegisterMenu.ts`.

## Screen Readers for Testing

1. <b>JAWS</b>: Download [here](https://support.freedomscientific.com/Downloads/JAWS).
2. <b>NVDA</b>: Download [here](https://www.nvaccess.org/download/). Quick start, press: `control + alt + n`
3. <b>Apple Voiceover (Mac OS)</b>: Open spotlight search and look for Apple Voiceover, or press `Command-F5` to enable.
   For more information on Apple Voiceover, click [here](https://www.apple.com/voiceover/info/guide/_1121.html).

## Attribution

Icon created by Freepik at Flaticon

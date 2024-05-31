# React Single Text Editor Application

This is a simple text editor application built with React and TypeScript, utilizing a custom hook for state management and several UI components. It includes functionalities for adding, deleting, undoing, and redoing text changes, as well as cursor movements.

##3 Tailwind React with Vite and TypeScript

### Demo
- Visit: https://single-editor.netlify.app/

### Features

- Add, delete, undo, and redo text changes
- Move cursor forward and backward
- Save and display text history


### Get code & install

#### Get the repo

* [Create new repo](https://github.com/castelstack/single-text-editor) with this template
* &hellip; or clone this repo on GitHub
* &hellip; or [download .zip](https://github.com/castelstack/single-text-editor/archive/master.zip) from GitHub

#### Install

`cd` to project's dir and run `npm install`


#### Hot-reloads for development

```
npm run dev
```

#### Builds and minifies for production

```
npm run build
```

#### Exports build for static hosts

```
npm run export
```

### Docs

Docs are coming soon

### Browser Support
We try to make sure Dashboard works well in the latest versions of all major browsers

### File Structure

* src/App.tsx: Main application component.
* src/hooks/useGetActions.ts: Custom hook for managing text editor state and actions.
* src/components/ActionsBtns.tsx: Component for undo, redo, and reset buttons.
* src/components/Header.tsx: Component for the application header.
* src/components/InputActions.tsx: Component for input field and action buttons.
* src/components/SaveHistory.tsx: Component for displaying saved texts.
* src/components/TextDisplay.tsx: Component for displaying the text with a cursor.

### Hook Exports

- The useGetActions hook exports the following functions and state variables:

* handleRedo
* handleAddText
* handleCursorDirBack
* handleCursorDirFrw
* handleUndo
* handleDelete
* handleChangeText
* text
* saveData
* handleSaveData
* inputChar
* handleReset
* cursorCurrIndex


### License
This project is licensed under the MIT License.
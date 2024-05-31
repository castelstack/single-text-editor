# React Single Text Editor Application

This is a simple text editor application built with React and TypeScript, utilizing a custom hook for state management and several UI components. It includes functionalities for adding, deleting, undoing, and redoing text changes, as well as cursor movements.

## Tailwind React with Vite and TypeScript

## Demo
- Visit: https://single-editor.netlify.app/

## Features

- Add, delete, undo, and redo text changes
- Move cursor forward and backward
- Save and display text history

## Installation

1. **Clone the Repository**

   ```
   git clone https://github.com/castelstack/single-text-editor
   cd single-text-editor
  ```

2. **Install Dependencies**
Ensure you have Node.js installed, then run:

   ```
    yarn
  ```
    ** Start the Application

   ```
    yarn dev
  ```
1. **File Structure**

* src/App.tsx: Main application component.
* src/hooks/useGetActions.ts: Custom hook for managing text editor state and actions.
* src/components/ActionsBtns.tsx: Component for undo, redo, and reset buttons.
* src/components/Header.tsx: Component for the application header.
* src/components/InputActions.tsx: Component for input field and action buttons.
* src/components/SaveHistory.tsx: Component for displaying saved texts.
* src/components/TextDisplay.tsx: Component for displaying the text with a cursor.

## Hook Exports

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


## License
This project is licensed under the MIT License.
import './App.css';
import { ActionsBtns } from './components/ActionsBtns';
import { Header } from './components/Header';
import { InputActions } from './components/InputActions';
import { SaveHistory } from './components/SaveHistory';
import { TextDisplay } from './components/TextDisplay';
import { useGetActions } from './hooks/useGetActions';

function App() {
  const {
    handleRedo,
    handleAddText,
    handleCursorDirBack,
    handleCursorDirFrw,
    handleUndo,
    handleDelete,
    handleChangeText,
    text,
    saveData,
    handleSaveData,
    inputChar,
    handleReset,cursorCurrIndex
  } = useGetActions();

  return (
    <div className=' '>
      <Header />
      <div className='wrapper-inner mt-32 flex flex-col gap-3 '>
        <ActionsBtns
          handleReset={handleReset}
          handleRedo={handleRedo}
          handleUndo={handleUndo}
        />
        <TextDisplay
          text={text}
          cursorCurrIndex={cursorCurrIndex}
          handleCursorDirBack={handleCursorDirBack}
          handleCursorDirFrw={handleCursorDirFrw}
        />
        <InputActions
          inputChar={inputChar}
          handleSaveData={handleSaveData}
          handleChangeText={handleChangeText}
          handleAddText={handleAddText}
          handleDelete={handleDelete}
        />
        <SaveHistory history={saveData} />
      </div>
    </div>
  );
}

export default App;

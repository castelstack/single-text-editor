import { useState, useEffect } from 'react';
type TextPos = {
  id: number;
  value: string;
};
export const useGetActions = () => {
  const [text, setText] = useState<string>('');
  const [textHistory, setTextHistory] = useState<TextPos[]>([]);
  const [textHistoryUndo, setTextHistoryUndo] = useState<TextPos[]>([]);
  const [cursorCurrIndex, setCursorCurrIndex] = useState<number>(0);
  const [inputChar, setInputChar] = useState<string>('');
  const [saveData, setSaveData] = useState<string[]>([]);

  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputChar(e.target.value);
  };
  const handleReset = () => {
    setTextHistory([]);
    setTextHistoryUndo([]);
    setCursorCurrIndex(0);
    setInputChar('');
    setText('');
  };
  const handleSaveData = () => {
    setSaveData((prev) => [text, ...prev]);
    handleReset();
  };
  const handleAddText = () => {
    if (!inputChar) {
      return;
    }
    const newText =
      text.slice(0, cursorCurrIndex) + inputChar + text.slice(cursorCurrIndex);
    setTextHistory((prev) => [
      ...prev,
      { id: Number(cursorCurrIndex), value: inputChar },
    ]);
    setText(newText);
    setInputChar('');

    setCursorCurrIndex((prev) => prev + 1);
  };

  const handleDelete = () => {
    const newText =
      text.slice(0, cursorCurrIndex - 1) + text.slice(cursorCurrIndex);

    setText(newText);
    const deleteTextFromHistory = textHistory.filter(
      (_, i) => i !== cursorCurrIndex - 1
    );
    const findTextFromHistory = textHistory.filter(
      (_, i) => i === cursorCurrIndex - 1
    );
    setTextHistoryUndo((prev) => [...prev, findTextFromHistory[0]]);
    setTextHistory(deleteTextFromHistory);
    setCursorCurrIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleCursorDirFrw = () => {
    if (cursorCurrIndex < text.length) {
      setCursorCurrIndex((prev) => prev + 1);
    }
  };

  const handleCursorDirBack = () => {
    if (cursorCurrIndex > 0) {
      setCursorCurrIndex((prev) => prev - 1);
    }
  };

  const handleUndo = () => {
    if (textHistory.length <= 0) {
      return;
    }
    const getLastObj = textHistory[textHistory.length - 1];
    const newText =
      text.slice(0, getLastObj?.id) + text.slice(getLastObj?.id + 1);
    setText(newText);
    setTextHistoryUndo((prev) => [...prev, getLastObj]);
    const newArray = textHistory.slice(0, -1);
    setTextHistory(newArray);
    setCursorCurrIndex(getLastObj.id);
  };

  const handleRedo = () => {
    if (textHistoryUndo.length <= 0) {
      return;
    }
    const getLastObj = textHistoryUndo[textHistoryUndo.length - 1];
    const newText =
      text.slice(0, getLastObj?.id) +
      getLastObj?.value +
      text.slice(getLastObj?.id);
    setText(newText);
    setTextHistory((prev) => [...prev, getLastObj]);
    const newArray = textHistoryUndo.slice(0, -1);
    setTextHistoryUndo(newArray);
    setCursorCurrIndex(getLastObj.id);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handleCursorDirBack();
      } else if (e.key === 'ArrowRight') {
        handleCursorDirFrw();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return {
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
    handleReset,
    cursorCurrIndex,
  };
};

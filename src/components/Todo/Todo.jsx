import { Text } from 'components';
import { TodoWrapper, DeleteButton, EditButton } from './Todo.styled';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import { useState } from 'react';
import { EditInput } from './Todo.styled';
//
//
export const Todo = ({ id, counter, text, onDelete, onEdit }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [currentValue, setCurrentValue] = useState(text);
  const [prevValue, setPrevValue] = useState(text);

  const editInput = () => {
    setIsEdit(true);
  };

  const handleChange = ({ target: { value } }) => {
    setCurrentValue(value);
    onEdit(id, value);
  };

  const handleOk = () => {
    setIsEdit(false);
    setPrevValue(currentValue);
  };

  const handleCancel = () => {
    setIsEdit(false);
    setCurrentValue(prevValue);
    onEdit(id, prevValue);
  };

  return (
    <TodoWrapper>
      <Text textAlign="center" marginBottom="20px">
        TODO #{counter}
      </Text>
      <Text>{text}</Text>
      <DeleteButton type="button" onClick={() => onDelete(id)}>
        <RiDeleteBinLine size={24} />
      </DeleteButton>
      <EditButton type="button" onClick={editInput}>
        <RiEdit2Line size={24} />
      </EditButton>
      {isEdit && (
        <>
          <EditInput type="text" value={currentValue} onChange={handleChange} />
          <button type="button" onClick={handleOk}>
            Ok
          </button>
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        </>
      )}
    </TodoWrapper>
  );
};

import { Text } from 'components';
import { TodoWrapper, DeleteButton } from './Todo.styled';
import { RiDeleteBinLine } from 'react-icons/ri';
//EditButton
//RiEdit2Line
export const Todo = ({ id, counter, text, onClick }) => {
  return (
  <TodoWrapper>
    <Text textAlign="center" marginBottom="20px">
      TODO #{counter}
    </Text>
    <Text>{text}</Text>
    <DeleteButton type="button" onClick={()=> onClick(id)}>
      <RiDeleteBinLine size={24} />
    </DeleteButton>
  </TodoWrapper>
  );
};

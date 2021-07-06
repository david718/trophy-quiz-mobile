import styled from 'styled-components';

const SInput = styled.input`
  appearance: none;
  -webkit-appearance: none;
  margin: 0px 8px 0px 0px;
  height: 20px;
  width: 20px;

  border: 2px solid var(--grey-200);
  border-radius: 2px;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  outline: none;

  :checked {
    border: none;
    width: 20px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' %3E%3Cg fill='none' fillRule='evenodd'%3E%3Cpath d='M0 0H20V20H0z' /%3E%3Cpath fill='%232946BE' d='M2.228 20C.997 20 0 19.003 0 17.773V2.227C0 .997.997 0 2.228 0h15.545C19.003 0 20 .997 20 2.227v15.546c0 1.23-.997 2.227-2.227 2.227H2.228z' /%3E%3Cpath fill='%23FFF' d='M8.333 15h-.008c-.3-.002-.582-.14-.77-.372l-3.332-4.125c-.348-.43-.281-1.06.148-1.406.43-.347 1.06-.28 1.406.15l2.568 3.177L14.23 5.36c.354-.423.983-.482 1.41-.128.423.353.48.984.128 1.408l-6.667 8c-.191.228-.472.36-.77.36' /%3E%3C/g%3E%3C/svg%3E");
    :focus {
      outline: none;
    }
  }
`;

type CheckboxProps = {
  id?: string;
  checked?: boolean;
  name?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Checkbox = ({ id, checked, name, disabled, onChange }: CheckboxProps) => {
  return (
    <SInput
      id={id}
      name={name}
      type="checkbox"
      checked={checked}
      disabled={disabled}
      onChange={onChange}
    />
  );
};

export default Checkbox;

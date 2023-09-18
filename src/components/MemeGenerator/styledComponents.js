// Style your components here
import styled from 'styled-components'

export const Heading = styled.h1`
  color: #35469c;
  font-family: 'Roboto';
  font-size: 50px;
`
export const TextBox = styled.input`
  border: 1px solid #d7dfe9;
  font-family: 'Roboto';
  padding: 10px;
  color: #7e858e;
  border-radius: 5px;
  margin-bottom: 20px;
  margin-top: 8px;
  font-size: 20px;
  align-self: flex-start;
  width: 110%;
  ::placeholder {
    color: #7e858e60;
  }
`
export const Label = styled.label`
  font-family: 'Roboto';
  color: #7e858e;
`
export const GenerateButton = styled.button`
  border: none;
  font-family: 'Roboto';
  padding: 10px;
  border-radius: 5px;
  background-color: #0b69ff;
  align-self: flex-start;
  font-size: 16px;
  color: white;
  width: 40%;
  cursor: pointer;
`
export const CustomForm = styled.form`
  display: flex;
  flex-direction: column;
`

export const Container = styled.div`
  display: flex;
  gap: 250px;
  transform: translate(10%, 20%);
`
export const OptionsDropDown = styled.select`
  border: 1px solid #d7dfe9;
  font-family: 'Roboto';
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 20px;
  margin-top: 8px;
  color: #7e858e;
  align-self: flex-start;
  width: 110%;
`

export const Option = styled.option`
  width: 100%;
`
export const Canvas = styled.div`
  background-image: url(${props => props.imageUrl});
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 700px;
  height: 600px;
  background-size: cover;
  padding: 20px;
`
export const Text = styled.p`
  font-size: ${props => props.fontSize}px;
  color: white;
  font-family: Roboto;
`

import { ButtonContainer } from './styles';

const Button = ({ label, onClick }) => {
    return (
        <ButtonContainer onCLick={onClick}>
            { label }
        </ButtonContainer>
    );
}

export default Button;
import { StyledSpinner } from './Spinner.styled';
import ClipLoader from 'react-spinners/ClipLoader';

export default function Spinner() {
  return (
    <StyledSpinner>
      <ClipLoader />
    </StyledSpinner>
  );
}

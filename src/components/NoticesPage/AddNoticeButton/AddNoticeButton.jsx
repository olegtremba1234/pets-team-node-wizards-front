import { useMediaQuery } from 'react-responsive';
import { Button, Span } from './AddNoticeButton.styled';

export default function AddNoticeButton() {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  return (
    <>
      {isMobile ? (
        <Button>
          <Span>+</Span>
          Add pet
        </Button>
      ) : (
        <Button>
          Add pet<Span>+</Span>
        </Button>
      )}
    </>
  );
}

import ModalNotAuthorized from 'components/ModalNotAuthorized/ModalNotAuthorized';
import OurFriends from 'components/OurFriends/OurFriends';

export default function OurFriendsPage() {
  return (
    <main>
      <ModalNotAuthorized/>
      <OurFriends />
    </main>
  );
}

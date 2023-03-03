import { Image } from "./PestList.styled";
const PetsList = () => {
  return (
    <div>
      <ul>
        {/*arr.map(  */}
        <li>
        <Image  src='https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262__480.jpg' alt='name'/>
        <button type="button"></button>
        <p>Name:<span></span></p>
        <p>Date of birth:</p>
        <p>Breed:</p>
        <p>Comment:</p>
        </li>
        {/* ) */}
      </ul>
    </div>
  );
};

export default PetsList;

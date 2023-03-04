import { Icons } from '../Icons/Icons';
import {
  Image,
  ButtonDel,
  PetsDescribed,
  DescribedItem,
  PetsDescribedItem,
  Item,
  ItemList,
} from './PestList.styled';
const PetsList = () => {
  return (
      <PetsDescribed>
        {/*arr.map(  */}
        <PetsDescribedItem>
          <Image
            src="https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262__480.jpg"
            alt="name"
          />
          <ItemList> {/* div */}
            <ButtonDel type="button">
              <Icons id="icon-user_delete" />
            </ButtonDel>
            <DescribedItem>
              <Item >
                Name:<span>Cat</span>
              </Item>
              <Item>
                Date of birth:<span> March </span>
              </Item>
              <Item>
                Breed:<span>Cat</span>
              </Item>
              <Item>
                 Comment:{/*  */}
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis, praesentium fugiat. Soluta, reprehenderit obcaecati.
                  Pariatur modi omnis perspiciatis architecto earum reiciendis
                  rerum recusandae, fugit provident cupiditate maiores error
                  illo numquam?
                </span>
              </Item>
            </DescribedItem>
          </ItemList>
        </PetsDescribedItem>
        {/* ) */}
      </PetsDescribed>
 
  );
};

export default PetsList;

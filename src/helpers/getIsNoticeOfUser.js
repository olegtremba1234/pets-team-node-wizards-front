export default function getIsNoticeOfUser(array, id) {
  const filteredArray = array.filter(el => el.id === id);
  return filteredArray.length > 0;
}

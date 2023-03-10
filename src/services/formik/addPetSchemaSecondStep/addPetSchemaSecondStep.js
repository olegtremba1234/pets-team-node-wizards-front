import * as Yup from 'yup';

const addPetSchemaSecondStep = Yup.object({
  // avatar: Yup.string('Add image').required('Required'),
  comments: Yup.string('Add comment')
    .min(8, 'Please enter a comment more than 7 character')
    .max(120, 'Please enter a comment less than 120 character')
    .required('Required'),
});

export default addPetSchemaSecondStep;

import * as Yup from 'yup';

const addPetSchemaFirstStep = Yup.object({
    name: Yup.string('Type name pet')
      .min(2, 'Too Short!')
      .max(16, 'Too Long!')
      .required('Required'),
    birthDay: Yup.string('Date of birth')
      .min(10, 'Too Short!')
      .max(10, 'Too Long!')
      .required('Required'),
    breed: Yup.string('Type breed')
      .min(2, 'Too Short!')
      .max(16, 'Too Long!')
      .required('Required'),
  });

  export default addPetSchemaFirstStep;
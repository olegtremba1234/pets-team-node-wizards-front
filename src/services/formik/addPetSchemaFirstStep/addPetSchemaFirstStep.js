import * as Yup from 'yup';

const addPetSchemaFirstStep = Yup.object({
  name: Yup.string('Type name pet')
    .trim()
    .min(2, 'Please enter a name more than 1 character')
    .max(16, 'Please enter a name less than 16 character')
    .matches(/^([a-zA-Z-А-Яа-яЁёЇїІіЄєҐґ\s-']+){2,}$/, 'Invalid symbol')
    .required('Required'),
  birthDay: Yup.date().required('Required'),
  breed: Yup.string('Type breed')
    .trim()
    .min(2, 'Please enter a breed more than 1 character')
    .max(16, 'Please enter a breed less than 16 character')
    .matches(/^([a-zA-Z-А-Яа-яЁёЇїІіЄєҐґ\s-']+){2,}$/, 'Invalid symbol')
    .required('Required'),
});

export default addPetSchemaFirstStep;
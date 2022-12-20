import * as yup from 'yup';

export const schemaTech = yup.object({
    title: yup.string().required('nome obrigatório'),
});
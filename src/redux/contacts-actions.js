import types from "./contacts-type"
import { v4 as uuidv4 } from 'uuid';

const addContact = (name, number) => ({
    type: types.ADD,
    payload:
        uuidv4(),
      name,
      number,
})

export default addContact
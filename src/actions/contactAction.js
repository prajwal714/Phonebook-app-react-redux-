import * as actionTypes from './actionType';
let nextContact=3;
export const createContact=(contact)=>{
    return {
        type: actionTypes.CREATE_NEW_CONTACT,
        name: contact.name,
        number: contact.number,
        id: nextContact++
    }
};

export const deleteContact=(id)=>{
    return {
        type: actionTypes.REMOVE_CONTACT,
        id: id
    }
}


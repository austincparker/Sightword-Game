import { getLists } from '../api/data/listData';

const selectLists = (listId) => {
  let domString = `<label for="author">Select an Author</label>
    <select class="form-control" id="author_id" required>
    <option value="">Select an Author</option>`;

  getLists().then((listArray) => {
    listArray.forEach((list) => {
      domString += `<option 
      value="${list.firebaseKey}"
      ${listId === list.firebaseKey ? 'selected' : ''}>
      ${list.name}</option>`;
    });

    domString += '</select>';

    document.querySelector('#select-author').innerHTML = domString;
  });
};

export default selectLists;

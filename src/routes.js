const {
  // eslint-disable-next-line max-len
  addNoteHandler, getAllNotesHandler, getNoteByIdHandler, editNoteByIdHandler, deleteNoteByIdHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST', // Metode untuk menyimpan catatan
    path: '/notes',
    handler: addNoteHandler, // Dihandle olehk function addNoteHandler yang ada di file handler.js
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler, // Dihandle oleh function getAllNotesHandler
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByIdHandler,
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNoteByIdHandler,
  },
];
module.exports = routes;

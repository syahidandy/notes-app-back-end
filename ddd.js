const deleteNoteByIdHandler = (request, h) => {
  const { id } = request.params;

  const index = notes.findIndex((note) => note.id === id);
  
  if (index !== -1) {
    notes.splice(index, 1);
    const response = h.response({
      status: 'succes',
      message: 'Catatan berhasil dihapus',
    });
    response.id(200);
    return response;
  }
  const response = h.response({
    status: 'fail',
    message: 'Catatan gagal dihapus. Id tidak ditemukan',
  });
  response.id(404);
  return response;
};

const geterror = (err) =>
  err.response && err.response.data && err.response.message
    ? err.response.data.message
    : err.message;

export { geterror };

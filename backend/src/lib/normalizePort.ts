/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(
  val: any = process.env.PORT || 8000,
): boolean | number | any {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

export default normalizePort;

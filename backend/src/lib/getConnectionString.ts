function getConnectionString(
  user: string = process.env.DB_USER,
  password: string = process.env.DB_PASSWORD,
  server: string = process.env.DB_SERVER,
): string {
  return `mongodb+srv://${user}:${password}@${server}/test?retryWrites=true`;
}

export default getConnectionString;

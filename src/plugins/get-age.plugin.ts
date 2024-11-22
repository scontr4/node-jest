
export const getAge = ( birthdate: string ) => {
  const birthYear = new Date(birthdate).getFullYear();
  if (isNaN(birthYear)) {
    throw new Error('Invalid birthdate');
  }
  return new Date().getFullYear() - birthYear;
}

export const updateUsersArray = users =>
  users.map(({ id, name, age, job}) => ({ id, name, age, job }))

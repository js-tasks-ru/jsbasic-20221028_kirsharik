function showSalary(users, age) {
  let oldUsers = users.filter(item => item.age <= age);
  let oldUsersStr = oldUsers.map(item => `${item.name}, ${item.balance}`)
  return(oldUsersStr.join('\n'))
}

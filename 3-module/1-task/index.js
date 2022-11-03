function namify(users) {
  let userNameArr = [];
  users.forEach((item) => {userNameArr.push(item.name)});
  return userNameArr;
}

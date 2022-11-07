function makeFriendsList(friends) {
  
  ul = document.createElement('ul');
  
  for (let i = 0; i < friends.length; i++) {
    li = document.createElement('li');
    li.innerHTML = (friends[i].firstName + ' ' + friends[i].lastName);
    ul.append(li);
  }

  return ul
}

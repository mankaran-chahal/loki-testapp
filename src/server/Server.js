async function getAllUsers() {
  try {
    const url =
      'https://api.unsplash.com/photos/?client_id=aa2f3c3be8125f1fc86e3007153420c4e446c19b7b0c6d80a6257b281c9a0dc5';
    let response = await fetch(url, {
      method: 'get',
    });
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    return null;
  }
}

async function getUserAllPhotos(username) {
  try {
    const url =
      'https://api.unsplash.com/users/' +
      username +
      '/photos/?client_id=aa2f3c3be8125f1fc86e3007153420c4e446c19b7b0c6d80a6257b281c9a0dc5';
    let response = await fetch(url, {
      method: 'get',
    });
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    return null;
  }
}

export {getAllUsers};
export {getUserAllPhotos};

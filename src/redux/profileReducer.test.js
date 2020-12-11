const {
  default: profileReducer,
  addNewPostActionCreator,
  deletePost,
} = require("./profileReducer");

let state = {
  posts: [
    {
      id: 1,
      message: "Привет!",
      img: "https://avatarko.ru/img/kartinka/7/ruki_serdce_karandash_6297.jpg",
      likesCount: 10,
    },
    {
      id: 2,
      message: "Привет!!",
      img: "https://bankoboev.ru/storage/avatar/bankoboev.ru-21052.jpg",
      likesCount: 1,
    },
    {
      id: 3,
      message: "Привет!!!",
      img:
        "https://img1.liveinternet.ru/images/attach/c/1/74/810/74810823_67016084_x_a95de785.jpg",
      likesCount: 100,
    },
  ],
};

it("length of posts should be incremented", () => {
  let action = addNewPostActionCreator("my new post");
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(4);
});

it("message of posts should be 'my new post'", () => {
  let action = addNewPostActionCreator("my new post");
  let newState = profileReducer(state, action);
  expect(newState.posts[3].message).toBe("my new post");
});

it.only("length of posts should be decremented", () => {
  let action = deletePost(1);
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(2);
});

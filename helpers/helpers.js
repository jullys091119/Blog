import { Avatar } from "react-native-paper";


const IconPerfil = () => (
  <Avatar.Image size={44} source={require("../assets/img/perfil.jpg")} />
);

function addPosts(post, setPost) {
  console.log(post, "posts")
  let newId;
  if (post.length === 0) {
    newId = 1;
  } else {
    const lastIndex = post.length - 1;
    newId = post[lastIndex].id + 1;
  }

  const newPost = {
    id: newId,
    title: "Nuevo posts para el blog",
    content: "Creando Nuevo Post para mi blog de los JW",
    category: "learning",
    createdAt: "2026-04-12",
    like: 0,
    comments: [
      {
        id: 1,
        user: "Carlos",
        content: "React Native es muy bueno 🚀",
        createdAt: "2026-04-13"
      }
    ]
  };

  setPost([...post, newPost]);
}

  const addComment = (text,setPost,selectedPostId,setText) => {
    if (text === "") return
    setPost(prevComment => {
      return prevComment.map(p => {
        if (p.id !== selectedPostId) return p
        return {
          ...p,
          comments: [
            ...p.comments,
            {
              id: Date.now(),
              content: text
            }
          ]
        }
      })
    })
    setText("")
  }


export { IconPerfil, addPosts, addComment }

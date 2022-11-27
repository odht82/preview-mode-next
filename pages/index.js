import Container from "../components/container";
import Post from "../components/post";
import Intro from "../components/intro";
import Layout from "../components/layout";


export async function getStaticProps(context) {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()

  return {
    props: {
      posts,
      context
    },
  }
};

export default function Index(posts, context) {
  return (
    <>
      <Layout preview={context.preview}>
        <Container>
          <Intro />
          {posts.map(post => (
            <Post
              key={post.id}
              id={post.id}
              title={post.title}
              date={post.date}
              body={post.body}
            />)
          )}
        </Container>
      </Layout>
    </>
  );
}

// {
//   "id": 1,
//   "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//   "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
// },
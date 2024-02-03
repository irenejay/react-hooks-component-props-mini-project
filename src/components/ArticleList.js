import Article from "./Article";

function ArticleList({ posts }) {
  if (!Array.isArray(posts)) {
    console.log("Invalid articles prop. Expected an array.");
    return null;
  }

  return (
    <main>
      {posts.map((article) => (
        <Article
          key={article.id}
          title={article.title}  // corrected from tittle to title
          date={article.date}
          preview={article.preview}
          {...article}
        />
      ))}
    </main>
  );
}

export default ArticleList;

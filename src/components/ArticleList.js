import { Article } from "./Article"

export function ArticleList ({posts}) {
    const articleArray = posts.map((post) => {
        return <Article 
        title={post.title} 
        date= {post.date} 
        preview={post.preview} />
    })
    return (
    <main>
        {articleArray}
    </main>)
}
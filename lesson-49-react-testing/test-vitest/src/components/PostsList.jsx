import { useEffect, useState } from 'react'

const PostList = () => {
  const [posts, setPosts] = useState([]) // Стан для зберігання масиву постів

  useEffect(() => {
    // Хук для виконання побічних ефектів
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts') // Запит до API для отримання постів
      const data = await response.json() // Парсинг отриманих даних у формат JSON
      setPosts(data) // Оновлення стану постів
    }

    fetchData() // Виклик функції завантаження даних
  }, []) // Пустий масив залежностей, щоб ефект виконувався один раз після монтування компоненту

  return (
    <div className="App">
      <ul>
        {posts.map(
          (
            post // Перебір масиву постів та їх відображення
          ) => (
            <li key={post.id}>
              {/* Використання ідентифікатора поста як ключа */}
              <h3>{post.title}</h3> {/* Відображення заголовка поста */}
              <p>{post.body}</p> {/* Відображення тіла поста */}
            </li>
          )
        )}
      </ul>
    </div>
  )
}

export default PostList
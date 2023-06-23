import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Posts() {
  const router = useRouter()

  const goToPostPage = () => {
    router.push({
      pathname: '/posts/[postId]',
      query: { postId: 123, ref: 'social' },
    })
  }

  return (
    <>
      <Link href="/dashboard/about">Go to about</Link>
      <button style={{marginLeft: "20px"}} onClick={goToPostPage}>Go to post page</button>
    </>
  )
}

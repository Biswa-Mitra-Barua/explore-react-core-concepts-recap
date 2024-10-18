import './Post.css'
export default function Post({post}){
    const {id, title, userId, body} = post
    return (
        <div className='post'>
            <h5>Title: {title}</h5>
            <p><small>UserId: {title}</small></p>
            <p><small>PostId: {id}</small></p>
            <p>{body}</p>
        </div>
    )
}
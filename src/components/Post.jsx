import { format, formatDistanceToNow } from 'date-fns'
import ptPt from 'date-fns/locale/pt';
import { useState } from 'react';

import { Avatar } from './Avatar';
import { Comment } from './Comment';

import style from './Post.module.css';

export function Post({ author, publishedAt, content } = props){

    const [comments, setComments] = useState([
        'Post muito bacana, hein?',
    ]);

    const [newCommentText, setNewCommentText] = useState('');
    
    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'",{
        locale: ptPt,
    });

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptPt,
        addSuffix: true,
    });
    
    function handleCreateNewComment(){
        event.preventDefault();
        setComments([...comments, newCommentText]);
        setNewCommentText('');
    };

    function handleNewCommentChange(){
        setNewCommentText(event.target.value);
    }

    return (
        <article className={style.post}>
            <header>
                <div className={style.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={style.authorInfo} >
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()} >
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={style.content}>
                {content.map(line => {
                    if(line.type === 'paragraph'){
                        return <p key={line.content}>{line.content}</p>
                    } else if (line.type === 'link') {
                        return <p key={line.content}><a href="#">{line.content}</a></p>

                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={style.commentForm}>
                <strong> Deixe seu feedback </strong>

                <textarea 
                    name='comment'
                    placeholder='Deixe um comentário' 
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                />
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={style.commentList}>
                {comments.map(comment => {
                    return <Comment key={comment} content={comment} />
                })}
            </div>
        </article>
    );
}
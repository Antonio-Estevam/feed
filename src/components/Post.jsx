import style from './Post.module.css';
export function Post(props){
    return (
        <article className={style.post}>
            <header>
                <div className={style.author}>
                    <img className={style.avatar} src="https://github.com/Antonio-Estevam.png" />
                    <div className={style.authorInfo} >
                        <strong>Antonio Filho</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time dateTime='2022-05-11 08:13:30' title='11 de maio às 08:13' >Publicado há 1h</time>
            </header>

            <div className={style.content}>
                <p> Fala galeraa{' '}👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p><a href="">👉{' '}jane.design/doctorcare</a></p>

                <p><a href="">#novoprojeto</a>{' '}<a href="">#nlw #rocketseat</a> </p>
            </div>
        </article>
    );
}
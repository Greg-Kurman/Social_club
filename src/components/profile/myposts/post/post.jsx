import s from "../../profile.module.css"
import React from 'react';


const post = (props) => {
    return (
            <div className={s.post}>
                    <div className={s.img_post}> <img src="https://images.squarespace-cdn.com/content/v1/5bc9fbbe11f7847efeca4139/1539978020226-0Z8D2YASPL3G17SHD3AD/ke17ZwdGBToddI8pDm48kO4SOKGnJqN1aBLMh8xtUw8UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dkNPxK_W32CR5qIBeL9qWRRpRqkrks5sDLXpU4Bjll-e7zs2yPjc1ECvpa5Zm_kMqw/cyber_sec_banner_01.jpg?format=2500w"  ></img></div>
                    <div> Like {props.likecount}</div>
                    {props.message}
             </div>
    )
}

export default post;
import React from 'react'
export const NewsStory = (props)=>
<div>
<h2>{props.story.headline}</h2>
<p>{props.story.body}</p>
<p>Total Views: {props.story.views}</p>
</div>


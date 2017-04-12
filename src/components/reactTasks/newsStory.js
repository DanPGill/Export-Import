import React from 'react'
export const NewsStory = (props) =>
<div>
<h2>{props.headline}</h2>
<p>{props.body}</p>
<p>Total Views: {props.views}</p>
</div>


import React from 'react'
import { Header } from './header'
import { NewsStory } from './newsStory'
import { Stories } from './stories'
export const NewsPage = () => {
  const storyList = _.map(Stories, (story, i) =>{
  return <NewsStory story={story} key={i}/>
})
return (<div>
<div>
<Header>News of the Hello World</Header>
</div>
{storyList}
</div>
)
}


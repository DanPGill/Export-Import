import React from 'react'
import { Header } from './header'
import { NewsStory } from './newsStory'
import { Stories } from './stories'
export const NewsPage = () => {
  const storyList = _.map(Stories, (stories) =>{
  return <NewsStory story={stories}/>
})
return (<div>
<div>
<Header>News of the Hello World</Header>
</div>
{storyList}
</div>
)
}


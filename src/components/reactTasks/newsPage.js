import React from 'react'
import { Header } from './header'
import { NewsStory } from './newsStory'
export const NewsPage = () => {
  return <div><Header>News of the Hello World</Header>

<NewsStory headline={`Test Headline`}
body={`This is a test story, to see if it works. Fingers crossed!`}
views={10}/>

<NewsStory headline={`Number of Fraudulent News Stories Set to Rise Exponentially`}
body={`After developing some sladpdash code to produce a template for news stories,
  "journalists" are expected to populate spurious news sites with fake news, complete with eye grabbing headlines,
  with a startling rapidity and absolutely no journalisitic integrity.
  Updates as they happen.`}
views={50}/>

<NewsStory headline={`Trump Eats Piccalilli, Vomits Heavily`}
body={`During a diplomatic visit to the UK, POTUS attempted to ingratiate
himself to the British public by gulping down a spoonful of one of the nation's
favourite condiments. Unfortunately, it appears Trump has an undiagnosed allergy
to pickles, and regurgitated the stuff all over his bright red tie, now stained an
unattractive off-orange.`}
views={400} />

<NewsStory headline={`Creativity and Inspiration Wane`}
body={`After making something of an effort to be creative and entertaining for a whopping
2 stories, reports are that our vigilante reporter (we'll call him Mr. X in homage to a
  popular animated series) has supped his last from the well of imagination and is left,
parched and floundering, to claw his way in at the gates of hackery.`}
views={1} />
</div>
}

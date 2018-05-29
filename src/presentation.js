import React from 'react';
import { Deck, Slide, ListItem, Image } from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';

import { CodeSlide, Title, CenteredList } from './utils';

import simpleTypes from './snippets/new-features/simpleTypes'
import fragments from './snippets/new-features/fragments';
import context from './snippets/new-features/context';
import errorBoundries from './snippets/new-features/errorBoundries';
import { refs, forwardRefs } from './snippets/new-features/refsAndForwardRefs';
import newLifecycleMethods from './snippets/new-features/newLifecycleMethods';
import dontChangeState from './snippets/new-features/dontChangeState'

import { dynamicContext1, dynamicContext2 } from './snippets/patterns/dynamicContext';
import fragmentFeed from './snippets/patterns/fragmentFeed';
import inlineOrModal from './snippets/patterns/inlineOrModal';
require('normalize.css');
require('prismjs/themes/prism-funky.css');

const theme = createTheme(
  {
    primary: '#1F2022',
    secondary: '#CECECE',
    tertiary: '#03A9FC',
    quartenary: 'white',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);
console.log(theme);
export default class Presentation extends React.Component {
  render() {
    return (
      <Deck theme={theme} progress="bar">
        <Slide id="title">
          <Title fit>Fullstack React</Title>
          <Title fit secondary>Patterns and Best Practices</Title>
        </Slide>
        <Slide id="about_me">
          <Title>About me</Title>
          <CenteredList>
            <ListItem>Hi, I'm Mihail</ListItem>
            <ListItem>Fullstack Dev at Skyscanner</ListItem>
            <ListItem>Part-time professor at AUBG</ListItem>
            <ListItem>React-ing since 2015</ListItem>
          </CenteredList>
        </Slide>
        <Slide id="about_skyscanner">
          <Title>About Skyscanner</Title>
          <CenteredList>
            <ListItem>fill me in!</ListItem>
          </CenteredList>
        </Slide>
        <Slide id="outline">
          <Title>Outline</Title>
          <CenteredList>
            <ListItem>Atomic Design</ListItem>
            <ListItem>New stuff in React 16</ListItem>
            <ListItem>All the Patterns</ListItem>
            <ListItem>Coming soon: Async & Suspense</ListItem>
          </CenteredList>
        </Slide>
        <Slide id="atomic_design">
          <Title>Atomic Design</Title>
          <CenteredList>
            <ListItem>Fill me in!</ListItem>
          </CenteredList>
        </Slide>
        <Slide id="react_16">
          <Title>What's new in React 16?</Title>
          <CenteredList>
            <ListItem>Fragments</ListItem>
            <ListItem>Context</ListItem>
            <ListItem>Error boundries</ListItem>
            <ListItem>New Lifecycle methods</ListItem>
            <ListItem>Refs & forwardRefs</ListItem>
            <ListItem>and more</ListItem>
          </CenteredList>
        </Slide>
        <CodeSlide {...simpleTypes} />
        <CodeSlide {...fragments} />
        <CodeSlide {...inlineOrModal} />
        <CodeSlide {...fragmentFeed} />
        <CodeSlide {...dontChangeState} />
        <CodeSlide {...errorBoundries} />
        <CodeSlide {...newLifecycleMethods} />
        <Slide id="compnent-lifecycle-img">
          <Title>Component Lifecycle Diagram</Title>
          <Image src="images/component-lifecycle.jpg" />
        </Slide>
        <CodeSlide {...context} />
        <CodeSlide {...refs} />
        <CodeSlide {...forwardRefs} />
        <Slide id="coming_soon">
          <Title>Coming soon './future'</Title>
          <CenteredList>
            <ListItem>Tools improvements</ListItem>
            <ListItem>Async rendering</ListItem>
            <ListItem>Suspense</ListItem>
          </CenteredList>
        </Slide>
        <Slide id="tools_improvements">
          <Title>Tools improvements</Title>
          <CenteredList>
            <ListItem><span style={{color:theme.screen.colors.tertiary}}>&lt;StrictMode&gt;</span> Component</ListItem>
            <ListItem><span style={{color:theme.screen.colors.tertiary}}>&lt;Profiler&gt;</span> Component</ListItem>
          </CenteredList>
        </Slide>
        <Slide id="async_rendering">
          <Title>Async rendering</Title>
          <CenteredList>
            <ListItem>fibers</ListItem>
            <ListItem>schedulers</ListItem>
            <ListItem>predictable side-effects</ListItem>
          </CenteredList>
        </Slide>
        <Slide id="suspense">
          <Title>Suspense</Title>
          <div>pause the rendering of a component</div>
          <CenteredList>
            <ListItem>async code appears synchronous</ListItem>
            <ListItem>Suspendable data sources</ListItem>
            <ListItem>Suspendable containers: &lt;Placeholder&gt;, &lt;Loading&gt;</ListItem>
          </CenteredList>
        </Slide>
        <Slide id="patterns">
          <Title>All the Patterns</Title>
          <CenteredList>
            <ListItem>Higher Order Components</ListItem>
            <ListItem>Dynamic loading</ListItem>
            <ListItem>State management</ListItem>
          </CenteredList>
        </Slide>
        <Slide id="hoc-vs-render-props">
          <Title>Higher Order vs Render Props</Title>
          <CenteredList>
            <ListItem>Higher Order - template methods</ListItem>
            <ListItem>Render props - callbacks</ListItem>
          </CenteredList>
        </Slide>
        <CodeSlide {...dynamicContext1} />
        <CodeSlide {...dynamicContext2} />
        <Slide id="dynamic-loading">
          <Title>Dynamic Loading</Title>
          <CenteredList>
            <ListItem>Component only vs data included</ListItem>
            <ListItem>Fullstack components</ListItem>
            <ListItem>Managed internal state</ListItem>
            <ListItem>Clear interface</ListItem>
          </CenteredList>
        </Slide>
        <Slide id="state-management">
          <Title>State management</Title>
          <CenteredList>
            <ListItem>Redux thunk</ListItem>
            <ListItem>Redux sagas</ListItem>
            <ListItem>Observables</ListItem>
          </CenteredList>
        </Slide>
        <Slide id="the_end">
          <Title fit>Thank you!</Title>
          <Title fit secondary>Questions? Comments?</Title>
        </Slide>
      </Deck>
    );
  }
};

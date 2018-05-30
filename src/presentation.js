import React from 'react';
import { Cite, CodePane, Deck, BlockQuote, Layout, List, ListItem, Link, Image, Slide, Quote } from 'spectacle';

import { CodeSlide, Title, CenteredList, Accent, theme } from './utils';

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
import templateMethods from './snippets/patterns/templateMethods';
import renderProps from './snippets/patterns/renderProps';
import decorators from './snippets/patterns/decorators';
import { lazyLoading, conditionalLoading, fullstackComponent } from './snippets/patterns/loadable';
import { suspend, suspendable } from './snippets/patterns/suspense';

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck theme={theme} progress="bar">
        <Slide id="title">
          <Title fit>React 16 Overview</Title>
          <Title fit secondary>Features, Patterns and Best Practices</Title>
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
          <List style={{listStyle: 'none'}}>
            <ListItem>Founded in 2003</ListItem>
            <ListItem>Mission: be the best travel search engine</ListItem>
            <ListItem>
              <Accent>Global:</Accent> 10 offices hosting over 800 employees from 50 nationalities
            </ListItem>
            <ListItem><Accent>Growing:</Accent> 60 million unique monthly visitors</ListItem>
            <ListItem><Accent>Technology-driven:</Accent> 50% of staff are engineers</ListItem>
          </List>
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
          <List style={{listStyle: 'none'}}>
            <ListItem>
              Methodology for creating design systems (as opposed to ad-hoc collections of web pages)
            </ListItem>
            <ListItem>An equal partnership between design and engineering</ListItem>
            <ListItem>
              <Link textColor="secondary" href="http://bradfrost.com/blog/post/atomic-web-design/">
                (Link to original blog post)
              </Link>
            </ListItem>
          </List>
        </Slide>
        <Slide id="atomic_design_concepts">
          <Title>Atomic Design: Concepts</Title>
          <Layout>
            <Image src="images/atomic_design_tokens.png" />
            <Image src="images/atomic_design_atoms.png" />
            <Image src="images/atomic_design_molecules.png" />
          </Layout>
          <Layout>
            <Image src="images/atomic_design_organisms.png" />
            <Image src="images/atomic_design_systems.png" />
          </Layout>
        </Slide>
        <Slide id="atomic_design_benefits">
          <Title>Atomic Design: Benefits</Title>
          <CenteredList>
            <ListItem>Structure</ListItem>
            <ListItem>Encapsulation</ListItem>
            <ListItem>Reusability</ListItem>
            <ListItem>Consistency</ListItem>
            <ListItem>Maintainability</ListItem>
          </CenteredList>
        </Slide>
        <Slide id="atomic_design_and_react">
          <Title>React follows</Title>
          <Title secondary>Atomic Design</Title>
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
        <CodeSlide {...dynamicContext1} />
        <CodeSlide {...dynamicContext2} />  
        <CodeSlide {...refs} />
        <CodeSlide {...forwardRefs} />
        <Slide id="patterns">
          <Title>All the Patterns</Title>
          <CenteredList>
            <ListItem>Higher Order Components</ListItem>
            <ListItem>Dynamic loading</ListItem>
            <ListItem>State management</ListItem>
          </CenteredList>
        </Slide>
        <Slide id="hoc-vs-render-props">
          <Title>Higher Order Component</Title>
          <CenteredList>
            <ListItem>Decoration / mixin Pattern</ListItem>
            <ListItem>Template method / strategy pattern</ListItem>
            <ListItem>Render props / callback pattern</ListItem>
          </CenteredList>
        </Slide>
        <CodeSlide {...decorators} />
        <CodeSlide {...templateMethods} />
        <CodeSlide {...renderProps}/>
        <Slide id="dynamic-loading">
          <Title>Dynamically loading components</Title>
          <CenteredList>
            <ListItem>Lazy loading</ListItem>
            <ListItem>Fullstack components</ListItem>
            <ListItem>Atomic but composable UIs</ListItem>
          </CenteredList>
        </Slide>
        <CodeSlide {...lazyLoading} />
        <CodeSlide {...conditionalLoading} />
        <CodeSlide {...fullstackComponent} />
        <Slide id="state-management">
          <Title>State management</Title>
          <CenteredList>
            <ListItem>Redux thunk</ListItem>
            <ListItem>Redux sagas</ListItem>
            <ListItem>Observables</ListItem>
          </CenteredList>
        </Slide>
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
            <ListItem><Accent>&lt;StrictMode&gt;</Accent> Component</ListItem>
            <div>Alerts about unsafe side-effects and future feature deprecations</div>
            <ListItem><Accent>&lt;Profiler&gt;</Accent> Component</ListItem>
            <div>Measures the performance of your component tree</div>
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
        <Slide id="no-side-effects-quote">
          <BlockQuote>
            <Quote textSize="1em" textColor="secondary">Components should be resilient to re-renders. If re-rendering your component with the same props ever results in a different behavior, that component is not well-designed</Quote>
            <Cite style={{float:'right'}}><Link textColor="tertiary" href="https://twitter.com/dan_abramov/status/1000899848122617858">Dan Abramov</Link></Cite>
          </BlockQuote>
        </Slide>
        <Slide id="suspense">
          <Title>Suspense</Title>
          <div>pause the rendering of a component</div>
          <CenteredList>
            <ListItem>async code appears synchronous</ListItem>
            <ListItem>Suspendable data sources</ListItem>
            <ListItem>Suspendable containers:<br/>
              <Accent>&lt;Placeholder&gt;</Accent>,
              <Accent>&lt;Loading&gt;</Accent>
            </ListItem>
          </CenteredList>
        </Slide>
        <CodeSlide {...suspend} />
        <CodeSlide {...suspendable} />
        <Slide id="the_end">
          <Title fit>Thank you!</Title>
          <Title fit secondary>Questions? Comments?</Title>
        </Slide>
      </Deck>
    );
  }
};

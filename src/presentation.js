import React from 'react';
import { Cite, Deck, BlockQuote, Layout, List, ListItem, Link, Image, Slide, Text, Quote } from 'spectacle';

import { CodeSlide, Title, CenteredList, Accent, theme } from './utils';

import simpleTypes from './snippets/new-features/simpleTypes'
import fragments from './snippets/new-features/fragments';
import context from './snippets/new-features/context';
import errorBoundries from './snippets/new-features/errorBoundries';
import { refs, forwardRefs } from './snippets/new-features/refsAndForwardRefs';
import newLifecycleMethods from './snippets/new-features/newLifecycleMethods';
import dontChangeState from './snippets/new-features/dontChangeState';
import unstableAsync from './snippets/new-features/unstableAsync';

import { dynamicContext1, dynamicContext2 } from './snippets/patterns/dynamicContext';
import fragmentFeed from './snippets/patterns/fragmentFeed';
import inlineOrModal from './snippets/patterns/inlineOrModal';
import templateMethods from './snippets/patterns/templateMethods';
import renderProps from './snippets/patterns/renderProps';
import decorators from './snippets/patterns/decorators';
import { lazyLoading, conditionalLoading, fullstackComponent } from './snippets/patterns/loadable';
import { suspend, suspendable, suspendImpl, suspendableImpl } from './snippets/patterns/suspense';

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck theme={theme} progress="bar">
        <Slide id="title">
          <Title fit>The future of React</Title>
          <Title fit secondary>Async and Suspense</Title>
          <div style={{ float: 'right' }}>Beer.js Sofia, 02.08.2018</div>
        </Slide>
        <Slide id="hi_there">
          <Title>Hi, I'm Mihail</Title>
          <CenteredList>
            <ListItem>Fullstack Dev at Skyscanner</ListItem>
            <ListItem>Part-time professor at AUBG</ListItem>
            <ListItem>React-ing since 2016</ListItem>
          </CenteredList>
        </Slide>
        <Slide id="agenda">
          <Title>Agenda</Title>
          <CenteredList>
            <ListItem>React in 5 minutes</ListItem>
            <ListItem>Async rendering</ListItem>
            <ListItem>Suspense</ListItem>
          </CenteredList>
        </Slide>
        <Slide id="react-architecture-img">
          <Title>React: from code to screen</Title>
          <Image width="85%" src="images/react-data-flow.png" />
        </Slide>
        <Slide id="react-architecture">
          <Title>React architecture</Title>
          <CenteredList>
            <ListItem>
              <Accent>render</Accent>:
              <span> create a virtual dom from a component tree</span>
              <hr/>
            </ListItem>
            <ListItem>
              <Accent>reconcile</Accent>:
              <span> calculate which parts of the virtual dom have changed</span>
              <hr/>
            </ListItem>
            <ListItem>
              <Accent>commit</Accent>:
              <span> apply the changes to the target environment</span>
            </ListItem>
          </CenteredList>
        </Slide>
        <Slide id="react_16">
          <Title>What's new in React 16?</Title>
          <CenteredList>
            <ListItem>Fiber reconsiler (internal)</ListItem>
            <ListItem>Improved component lifecycle</ListItem>
            <ListItem>"Meta" components</ListItem>
            <ListItem>Error boundries</ListItem>
            <ListItem>And much more</ListItem>
          </CenteredList>
        </Slide>
        <Slide id="reconsilers">
          <Title>Fiber reconsiler</Title>
          <CenteredList>
            <ListItem><Accent>fiber</Accent>: a cacheable unit of work with a specific priority <hr /></ListItem>
            <ListItem>No longer needs to render all components in a single event loop tick <hr /></ListItem>
            <ListItem>Can pause, postpone or discard the creation of virtual dom elements</ListItem>
          </CenteredList>
        </Slide>
        <Slide id="compnent-lifecycle-img">
          <Title>Component Lifecycle</Title>
          <Link target="_blank" href="http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/">
            <Image src="images/component-lifecycle-color-inverse.png" />
          </Link>
        </Slide>
        <Slide id="no-side-effects-quote">
          <Title>Manage your side-effects</Title>
          <BlockQuote>
            <Quote textSize="1em" textColor="secondary">Components should be resilient to re-renders. If re-rendering your component with the same props ever results in a different behavior, that component is not well-designed</Quote>
            <Cite style={{float:'right'}}><Link textColor="tertiary" href="https://twitter.com/dan_abramov/status/1000899848122617858">Dan Abramov</Link></Cite>
          </BlockQuote>
        </Slide>
        <CodeSlide {...errorBoundries} />
        <Slide id="meta-components">
          <Title>Meta Components</Title>
          <CenteredList>
            <ListItem><Accent>&lt;StrictMode&gt;</Accent> Component</ListItem>
            <div>Alerts about unsafe side-effects and feature deprecations</div>
            <br/>
            <ListItem><Accent>&lt;Profiler&gt;</Accent> Component</ListItem>
            <div>Measures the performance of your component tree</div>
            <br/>
            <ListItem><Accent>&lt;Async&gt;</Accent> Component</ListItem>
            <div>Indicate to React that this component sub-tree is of lower priority</div>
          </CenteredList>
        </Slide>
        <CodeSlide {...unstableAsync} />
        <Slide id="async_rendering-2">
          <Title>Async rendering</Title>
          <CenteredList>
            <ListItem>declerative way to assign priority to components</ListItem>
            <ListItem>pause work and come back to it later</ListItem>
            <ListItem>reuse previously completed work</ListItem>
            <ListItem>abort work if it's no longer needed</ListItem>
          </CenteredList>
        </Slide>
        <Slide id="async_rendering-3">
          <Title>Async rendering</Title>
          <div>
            The new DOM renderer can use <Accent>requestAnimationFrame</Accent>
            and <Accent>requestIdleCallback</Accent>
            for high and low priority updates respectively
          </div>
        </Slide>
        <Slide id="suspense">
          <Title>Suspense</Title>
          <div>pause the rendering of a component while fetching data</div>
          <CenteredList>
            <ListItem><Accent>async</Accent> code appears synchronous</ListItem>
            <ListItem>suspendable data sources</ListItem>
            <ListItem>suspendable containers</ListItem>
          </CenteredList>
        </Slide>
        <CodeSlide {...suspend} />
        <CodeSlide {...suspendable} />
        <CodeSlide {...suspendImpl} />
        <CodeSlide {...suspendableImpl} />
        <Slide id="demo">
          <Title bigger>Demo</Title>
          <Title italic secondary>(Let's hope this still works)</Title>
        </Slide>
        <Slide id="the_end">
          <Title fit>Thank you!</Title>
          <Title fit secondary>Questions? Comments?</Title>
        </Slide>

        <Slide id="extra slides">
          <Title fit>I have extra slides</Title>
          <Title fit secondary>if there is time</Title>
        </Slide>
        <CodeSlide {...simpleTypes} />
        <CodeSlide {...fragments} />
        <CodeSlide {...inlineOrModal} />
        <CodeSlide {...fragmentFeed} />
        <CodeSlide {...dontChangeState} />

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
          <Text italic textColor="secondary">(separate presentation required)</Text>
          <CenteredList>
            <ListItem>Redux</ListItem>
            <ListItem>Thunk</ListItem>
            <ListItem>Sagas</ListItem>
            <ListItem>Observables</ListItem>
            <ListItem>and more</ListItem>
          </CenteredList>
        </Slide>
      </Deck>
    );
  }
};

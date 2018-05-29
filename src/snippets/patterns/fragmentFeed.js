const fragmentFeed = {
  id: 'fragment-feed',
  title: 'Pattern: Fragment Feed',
  comment: 'Assemble a feed of items using fragments',
  source: (
`<FeedContainer>
  <Alerts stickToTop /> // <-- returns a fragment
  <Family take={5} />   // <-- ^
  <Friends take={5} />  // <-- ^
  <News take={10} />    // <-- ^
</FeedContainer>`)
};

export default fragmentFeed;

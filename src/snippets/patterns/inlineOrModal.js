export default {
  id: 'inline-or-modal',
  title: 'Single Responsibility Principle',
  comment: 'The content does not need to know about its container',
  source: (
`<ModalContainer>
  <ImportantContent /> // returns a Fragment
</ModalContainer>

<AsideContainer> // arranges the content differently
  <ImportantContent /> // returns a Fragment
</AsideContainer>`)
};

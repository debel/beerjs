import React from 'react';
import {
  CodePane,
  Heading,
  List,
  Slide
} from 'spectacle';

const Title = ({ children, secondary, ...otherProps }) => (
  <Heading {...otherProps} size={4} textColor={secondary ? "secondary" : "tertiary"}>{children}</Heading>
);

const CenteredList = ({ children }) => (
  <List textAlign="center" style={{ listStyle:"none" }}>
    {children}
  </List>
);

const CodeSlide = React.forwardRef(({ id, title = "404 Missing Slide", source, comment, ...otherProps }, ref) => (
  <Slide {...otherProps} ref={ref}  id={id}>
    <Title>{title}</Title>
    <div>{comment}</div>
    <CodePane textSize={20} lang="js" theme="external" source={source} />
  </Slide>
));

export { Title, CenteredList, CodeSlide };

export default {
  id: 'create_context',
  title: 'The Context API',
  comment: 'Sharing state down the component tree',
  source: (
`
// ThemeContext.jsx
const ThemeContext = React.createContext("dark");
export default ThemeContext;

// App.jsx
<ThemeContext.Provider value="light">
  <Header /><Content /><Footer />
</ThemeContext.Provider>

// Header.jsx
<ThemeContext.Consumer>
 {(theme) => <Logo className={theme} />}
</ThemeContext.Consumer>
`)
};

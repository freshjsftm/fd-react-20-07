React;
ReactDOM;
class Heading extends React.Component {
  render() {
    const { titleElem, clName, children } = this.props;
    console.log(this);
    return React.createElement(
      "h2",
      {
        title: titleElem,
        className: clName,
      },
      "Hi!",
      ...children
    );
  }
}
const container = document.getElementById("root");
const element = React.createElement(
  Heading,
  { titleElem: "title for h2", clName: "heading" },
  "qwe",
  "asd"
);

ReactDOM.render(element, container);

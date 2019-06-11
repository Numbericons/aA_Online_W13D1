import React from 'react'; 

class Tabs extends React.Component {
  constructor(props) {
      super(props);
      this.state = { index: 0, one: "current-tab", two: "", three: ""};  // title  content  from array of JS objects
      this.changeTab = this.changeTab.bind(this);
  }



  changeTab(event) {
    
    let map = { one: 0, two: 1, three:2 };
    let text = event.currentTarget.innerText;

    Object.keys(map).forEach(key => {
      if (key === text) {
        this.setState({ [key]: "current-tab" });
      } else {
        this.setState({ [key]: "" });
      }
    })
    
    this.setState({ index: map[text] });
    // if (text === "one") {
    //   this.setState({index: 0})
    // } else if (text === "two") {
    //   this.setState({index: 1})
    // } else if (text === "three") {
    //   this.setState({ index: 2 })
    // }
  }

  render() {
    let i = this.state.index;
    let arr = this.props.array;
    return <div>
            <ul>
                <li className={this.state.one}><h1 onClick={this.changeTab}>one</h1></li>
                <li className={this.state.two}><h1 onClick={this.changeTab}>two</h1></li>
                <li className={this.state.three}><h1 onClick={this.changeTab}>three</h1></li>
            </ul>
            <article>{arr[i].content}</article>
          </div>
  }
}







export default Tabs;
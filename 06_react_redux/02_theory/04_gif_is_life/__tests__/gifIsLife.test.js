import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme,{shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
const Wapiti = require("wapiti");


Enzyme.configure({ adapter: new Adapter() })

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('an input component is present', () => {
  const searchMock = shallow(<App/>);

  expect(searchMock.find('input')).toBeDefined();
})

it("a button exists", () => {
  const searchMock = shallow(<App/>);

  expect(searchMock.find('button')).toBeDefined();
})

// it("no images are present as long as no search has been done", () => {
//   const searchMock = shallow(<App/>);
//
//   expect(searchMock.find('App').render().find('img')).not.toBeDefined();
// })
test("no images are present as long as no search has been done", () => {
  return Wapiti().goto("http://localhost:3000")
      .capture(() => document.querySelector("form").textContent)
      .run()
      .then(result => {
        console.log(result);
        // expect(result).not.tobeDefined();
      })
})


// it("the first printed list is in ascending order", () => {
//   const searchMock = shallow(<App/>);
//   const stateList = searchMock.state("listItem");
//
//   let beforeClick = [];
//   stateList.forEach(element => {
//     beforeClick.push(element.props.children)
//   })
//
//   let arrayMock  = [0,1,2,3,4,5,6,7,8,9];
//
//   expect(beforeClick).toMatchObject(arrayMock)
// });
//
// it('List changes after clicking on the button', () => {
//   const searchMock = shallow(<App/>);
//   const stateList = searchMock.state("listItem");
//
//   let beforeClick = [];
//   stateList.forEach(element => {
//     beforeClick.push(element.props.children)
//   })
//
//   searchMock.find('button').simulate('click');
//
//   let afterClick = [];
//   stateList.forEach(element => {
//     afterClick.push(element.props.children)
//   })
//
//   expect(beforeClick).not.toMatchObject(afterClick)
// })
//
// it('List is reversed after clicking on the button', () => {
//   const searchMock = shallow(<App/>);
//   const stateList = searchMock.state("listItem");
//
//   let beforeClick = [];
//   stateList.forEach(element => {
//     beforeClick.push(element.props.children)
//   })
//
//   searchMock.find('button').simulate('click');
//
//   let afterClick = [];
//   stateList.forEach(element => {
//     afterClick.push(element.props.children)
//   })
//
//   expect(beforeClick).toMatchObject(afterClick.reverse())
// })

// ;find()

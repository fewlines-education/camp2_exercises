import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme,{shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new Adapter() })

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('the list is 10 elements long', () => {
  const listMock = shallow(<App/>);

  expect(listMock.find('li')).toHaveLength(10)
})

it("a button exists", () => {
  const listMock = shallow(<App/>);

  expect(listMock.find('button')).toBeDefined();
})

it("the first printed list is in ascending order", () => {
  const listMock = shallow(<App/>);
  const stateList = listMock.state("listItem");

  const beforeClick = stateList.map(element => element.props.children);

  let arrayMock  = [0,1,2,3,4,5,6,7,8,9];

  expect(beforeClick).toMatchObject(arrayMock)
});

it('List changes after clicking on the button', () => {
  const listMock = shallow(<App/>);
  const stateList = listMock.state("listItem");

  let beforeClick = [];
  stateList.forEach(element => {
    beforeClick.push(element.props.children)
  })

  listMock.find('button').simulate('click');

  let afterClick = [];
  stateList.forEach(element => {
    afterClick.push(element.props.children)
  })

  expect(beforeClick).not.toMatchObject(afterClick)
})

it('List is reversed after clicking on the button', () => {
  const listMock = shallow(<App/>);
  const stateList = listMock.state("listItem");

  let beforeClick = [];
  stateList.forEach(element => {
    beforeClick.push(element.props.children)
  })

  listMock.find('button').simulate('click');

  let afterClick = [];
  stateList.forEach(element => {
    afterClick.push(element.props.children)
  })

  expect(beforeClick).toMatchObject(afterClick.reverse())
})

// ;find()

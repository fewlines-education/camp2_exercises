import React from 'react';
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom';
import Enzyme,{shallow, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import Connected, {App} from './App';
import store from "./store";
const Wapiti = require("wapiti");


// ReactDOM.render(
//   <Provider store={store}>
//     <connected />
//   </Provider>,
//   document.getElementById('root')
// )

Enzyme.configure({ adapter: new Adapter() })

let storeMock = store

describe('tests', () => {

  afterEach(() => {
    console.log(store);
    storeMock = store
  });


  test('the list has 0 elements long at the beginning', () => {
    const listMock = mount(<Provider store={storeMock}>
      <Connected />
    </Provider>);

    expect(listMock.find('li')).toHaveLength(0)
  })

  test("a button exists", () => {
    const listMock = mount(<Provider store={storeMock}>
      <Connected />
    </Provider>);

    console.log(listMock.find('button').text());

    expect(listMock.find('button').text()).toBe("Submit");
    expect(listMock.find('button').length).toBe(1);
  })

  test("li has one empty element after submitting an empty form", () => {
    const listMock = mount(<Provider store={storeMock}>
      <Connected />
    </Provider>);

    expect(listMock.find('li')).toHaveLength(0);


    listMock.find('button').simulate('click');
    console.log(listMock.find('li'));
    console.log(listMock.find('li').text());

    expect(listMock.find('li')).toHaveLength(1);
  })

  test("'Potato' is present in the list after filling it in in the form", async () => {

    const listMock = mount(<Provider store={storeMock}>
      <Connected />
      </Provider>
    );

    const input = listMock.find('input');

    input.simulate('change', { target: { value: 'Potato' } })

    // console.log("button one : ", listMock.find('button').at(0).text());

    listMock.find('button').at(0).simulate('click');

    // console.log("first element is : ", firstElement);
    // console.log("first element is : ", listMock.find('li').text());
    console.warn("listmock looks like : ",listMock.find('li').first().text())
    let mockLi = listMock.find('li')
    // console.warn("listmock looks like : ",listMock.find('li').at(1).text())

    expect(mockLi).toHaveLength(2)
    expect(mockLi.first().text()).not.toMatch(/Potato/)
    expect(mockLi.at(1).text()).toMatch(/Potato/)
    expect(listMock.find('img')).toHaveLength(2)

  });
});

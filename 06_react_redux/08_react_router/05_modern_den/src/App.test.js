import React from 'react';
import Enzyme,{mount} from 'enzyme';
import App,{Den, Home}  from './App';
import { MemoryRouter } from 'react-router';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

test('Home page renders only the \'Home\' component', () => {
  const formMock = mount(
    <MemoryRouter initialEntries={[ '/' ]}>
      <App/>
    </MemoryRouter>
  );

  expect(formMock.find(Den)).toHaveLength(0)
  expect(formMock.find(Home)).toHaveLength(1)
})

test('Home page is the "/" path', () => {
  const formMock = mount(
    <MemoryRouter initialEntries={[ '/' ]}>
      <App/>
    </MemoryRouter>
  );

  expect(formMock.find(Home).props().location.pathname).toBe("/")
})

test('Home page has a form component', () => {
  const formMock = mount(
    <MemoryRouter initialEntries={[ '/' ]}>
      <App/>
    </MemoryRouter>
  );

  expect(formMock.find('input')).toBeDefined();
})

test('Expect \'Den\' to be rendered after filling in \'open sesame\' and submitting', () => {
  // Render a checkbox with label in the document
  const formMock = mount(
    <MemoryRouter initialEntries={[ '/' ]}>
      <App/>
    </MemoryRouter>
  );

  formMock.find('input').simulate("change", {target :{value: "open sesame"}, preventDefault: () => {}});
  formMock.find('form').simulate('submit');

  expect(formMock.find(Den)).toHaveLength(1)
  expect(formMock.find(Home)).toHaveLength(0)
});

test('Expect path to be \'/den\' after filling in \'open esame\' and submitting', () => {

  const formMock = mount(
    <MemoryRouter initialEntries={[ '/' ]}>
      <App/>
    </MemoryRouter>
  );

  formMock.find('input').simulate("change", {target :{value: "open sesame"}, preventDefault: () => {}});
  formMock.find('form').simulate('submit');

  expect(formMock.find(Den).props().location.pathname).toBe("/den")
});

test('The "Home" component should not be rendered in the den page', () => {

  const formMock = mount(
    <MemoryRouter initialEntries={[ '/den' ]}>
      <App/>
    </MemoryRouter>
  );

  expect(formMock.find(Home)).toHaveLength(0)
});
// test('App changes it\'s "doorOpened state after filling in the right value and submitting', () => {
//   // Render a checkbox with label in the document
//   const formMock = shallow(
//     <App labelOn="On" labelOff="Off" />
//   );
//
//   let beforeClickState = formMock.state().doorOpened;
//
//   expect(beforeClickState).toBe(false);
//
//   let event = {returnValue: 'unknown'};
//
//   //
//   // formMock.find('input').simulate("change", {target :{value: "sesame"}, preventDefault: () => {}});
//   formMock.find('input').simulate("change", {target :{value: "sesame"}, preventDefault: () => {}});
//   //
//   console.log("searchValue is : ", formMock.state().searchValue);
//   // expect(formMock.state().searchValue).toBe("sesame")
//   //
//   formMock.find('form').simulate('submit');
//   //
//   let afterClickState = formMock.state().doorOpened;
//   //
//   expect(formMock.find('input')).toBeDefined();
//   // expect(formMock.find('href')).toBeDefined();
//   // console.log("href from mock is : ", formMock.find("form").text() );
//
//   console.log("formMock.state().doorOpened is : ", formMock.state().doorOpened);
//   console.log("window url is : ", window.location.href);
//   console.log("window url is : ", window.location);
//   console.log("window url is : ", window.location.toString());
//   expect(afterClickState).toBe(true);
// });

// test('there is three formMock', () => {
//
//   const formMock = shallow(
//     <App labelOn="On" labelOff="Off" />
//   );
//
// })

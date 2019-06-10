import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";

Enzyme.configure({ adapter: new Adapter() });

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("an input component is present", () => {
  const searchMock = shallow(<App />);

  expect(searchMock.find("input")).toBeDefined();
});

test("a button exists", () => {
  const searchMock = shallow(<App />);

  expect(searchMock.find("button")).toBeDefined();
});

const waitFor = time => new Promise(resolve => setTimeout(resolve, time));

test("keyword filled in form gives the right gif's URL from GIPHY", async () => {
  const searchMock = mount(<App />);
  searchMock
    .find('[type="text"]')
    .simulate("change", { target: { value: "lol" } });
  searchMock.find("form").simulate("submit");
  await waitFor(5000);
  searchMock.update();
  const searchedGif = searchMock
    .find("img")
    .first()
    .props().src;

  const awaitedGifUrl = await fetch(
    `http://api.giphy.com/v1/gifs/search?q=lol&api_key=dTJ7Uasn35PekyE6Vk8lix4AZEFmSEw4&limit=1`,
    { method: "GET" }
  )
    .then(response => response.json())
    .then(result => {
      return result.data[0].images.original.url;
    })
    .catch(error => {
      console.warn(error);
    });

  expect(searchedGif).toBe(awaitedGifUrl);
}, 10000);

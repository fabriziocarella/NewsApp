import React from "react";
import { shallow } from "enzyme";
import ListNews from "./ListNews";

describe("ListNews", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ListNews />);
    expect(wrapper).toMatchSnapshot();
  });
});

import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import FormField from "./FormField";

describe("FormField component", () => {
  it("renders without error", () => {
    const wrapper = shallow(<FormField />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

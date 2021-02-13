import Enzyme from "enzyme";

// TODO fix when enzyme releases support for React 17
// https://github.com/enzymejs/enzyme/issues/2429
// import Adapter from "enzyme-adapter-react-17";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

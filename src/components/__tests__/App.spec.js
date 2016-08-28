import React from "react";
import renderer from 'react-test-renderer';
import App from "./../App";

describe("App", function() {
    it('renders correctly', () => {
        const app = renderer.create(
          <App>
              <div>
                  Hello World
              </div>
          </App>
        ).toJSON();

        expect(app).toMatchSnapshot();
    });
});
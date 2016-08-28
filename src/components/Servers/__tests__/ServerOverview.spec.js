import React from "react";
import renderer from 'react-test-renderer';
import {ServerOverview} from "./../ServerOverview";

describe("ServerOverview", function() {
    it('renders correctly', () => {
        const app = renderer.create(
          <ServerOverview
              serverOverview={{
                servers: [{
                  link: 'myLink',
                  name: 'myName',
                  faIcon: 'myIcon'
                }]
              }}
              actions={{
                onSetCurrentTime: () => {},
                onSetState: () => {}
              }}
          />
        ).toJSON();

        expect(app).toMatchSnapshot();
    });
});
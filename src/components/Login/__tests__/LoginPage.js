import React from "react";
import renderer from 'react-test-renderer';
import {LoginPage} from "./../LoginPage";

describe("LoginPage", function() {
    it('renders correctly', () => {
        const app = renderer.create(
          <LoginPage
              login={{
                login: 'myUser',
                password: 'myPassword'
              }}
              actions={{
                onChangeEmail: () => {}
              }}
          />
        ).toJSON();

        expect(app).toMatchSnapshot();
    });
});
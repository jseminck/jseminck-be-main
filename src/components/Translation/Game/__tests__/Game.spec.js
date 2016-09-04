import React from 'react';
import renderer from 'react-test-renderer';
import {Game} from './../../Game';

describe('Game', function() {
    it('renders correctly without data', () => {
        const app = renderer.create(
          <Game
              translations={[]}
              index={0}
              actions={{
                onNewGame: () => {}
              }}
          />
        ).toJSON();

        expect(app).toMatchSnapshot();
    });

    it('renders correctly with data', () => {
        const app = renderer.create(
          <Game
              translations={[{translation: 'myTranslation', english: 'myEnglish'}]}
              index={0}
              actions={{
                onNewGame: () => {}
              }}
          />
        ).toJSON();

        expect(app).toMatchSnapshot();
    });

    it('renders correctly with error', () => {
        const app = renderer.create(
          <Game
              translations={[{translation: 'myTranslation', english: 'myEnglish'}]}
              index={0}
              error={true}
              actions={{
                onNewGame: () => {}
              }}
          />
        ).toJSON();

        expect(app).toMatchSnapshot();
    });

    it('renders correctly with show', () => {
        const app = renderer.create(
          <Game
              translations={[{translation: 'myTranslation', english: 'myEnglish'}]}
              index={0}
              show={true}
              actions={{
                onNewGame: () => {}
              }}
          />
        ).toJSON();

        expect(app).toMatchSnapshot();
    });
});
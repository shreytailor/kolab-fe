import React from 'react';
import Header from '../Header';
import renderer from 'react-test-renderer';

it("matches snapshot", function () {
    const tree = renderer.create(<Header></Header>).toJSON();
    expect(tree).toMatchSnapshot();
})
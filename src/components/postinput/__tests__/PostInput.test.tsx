import React from 'react';
import PostInput from '../PostInput';
import renderer from 'react-test-renderer';

it("matches snapshot", function () {
    const tree = renderer.create(<PostInput></PostInput>).toJSON();
    expect(tree).toMatchSnapshot();
})
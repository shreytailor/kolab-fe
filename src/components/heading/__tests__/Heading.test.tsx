import React from 'react';
import Heading from '../Heading';
import renderer from 'react-test-renderer';

it("matches snapshot", function () {
    const tree = renderer.create(<Heading string="Testing" fontsize="1rem"></Heading>).toJSON();
    expect(tree).toMatchSnapshot();
})
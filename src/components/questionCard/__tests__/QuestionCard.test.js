import React from 'react';
import QuestionCard from '../QuestionCard';
import renderer from 'react-test-renderer';

it("matches snapshot", function () {
    const tree = renderer.create(<QuestionCard question="This is a question for testing."></QuestionCard>).toJSON();
    expect(tree).toMatchSnapshot();
})
import React, { Component } from 'react';
import { Statistics } from './Statistics/statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positive: 0,
  };

  handleGoodIncrement = () => {
    this.setState(state => ({ ...state, good: state.good + 1 }));
    this.countTotalFeedback();
  };
  handleNeutralIncrement = () => {
    this.setState(state => ({ ...state, neutral: state.neutral + 1 }));
    this.countTotalFeedback();
  };
  handleBadIncrement = () => {
    this.setState(state => ({ ...state, bad: state.bad + 1 }));
    this.countTotalFeedback();
  };

  countTotalFeedback = () => {
    this.setState(state => ({
      total: state.good + state.neutral + state.bad,
    }));
    this.countPositiveFeedbackPercentage();
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(state => ({
      ...state,
      positive: Math.round((state.good / state.total) * 100),
    }));
  };

  render() {
    return (
      <>
        <Section
          title="Expresso Coffee Caffe "
          subtitle="[Please leave feedback]"
        >
          <FeedbackOptions
            onLeaveFeedback={this.handleGoodIncrement}
            options="Good"
          ></FeedbackOptions>
          <FeedbackOptions
            onLeaveFeedback={this.handleNeutralIncrement}
            options="Neutral"
          ></FeedbackOptions>
          <FeedbackOptions
            onLeaveFeedback={this.handleBadIncrement}
            options="Bad"
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics">
          {this.state.total === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.state.total}
              positivePercentage={this.state.positive}
            />
          )}
        </Section>
      </>
    );
  }
}

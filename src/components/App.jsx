import React from 'react';
import { Statistics } from './Statistics/statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { useState, useEffect } from 'react';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positive, setPositive] = useState(0);

  const handleFeedback = opt => {
    switch (opt) {
      case 'Good':
        setGood(good + 1);
        break;
      case 'Neutral':
        setNeutral(neutral + 1);
        break;
      case 'Bad':
        setBad(bad + 1);
        break;
      default:
        console.log(`Sorry, something went wrong`);
    }
    // countTotalFeedback();
  };

  useEffect(() => {
    const countTotalFeedback = () => {
      setTotal(good + neutral + bad);
      // countPositiveFeedbackPercentage();
    };

    countTotalFeedback();
  }, [good, neutral, bad]);

  useEffect(() => {
    const countPositiveFeedbackPercentage = () => {
      setPositive(Math.round((good / total) * 100));
    };
    countPositiveFeedbackPercentage();
  }, [good, total]);

  return (
    <>
      <Section
        title="Expresso Coffee Caffe "
        subtitle="[Please leave feedback]"
      >
        <FeedbackOptions
          handleFeedback={handleFeedback}
          options="Good"
        ></FeedbackOptions>
        <FeedbackOptions
          handleFeedback={handleFeedback}
          options="Neutral"
        ></FeedbackOptions>
        <FeedbackOptions
          handleFeedback={handleFeedback}
          options="Bad"
        ></FeedbackOptions>
      </Section>

      <Section title="Statistics">
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positive}
          />
        )}
      </Section>
    </>
  );
};

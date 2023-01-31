import React from 'react';
import { Fade } from 'react-awesome-reveal';

export default function MainContent({ data, current }) {
  return <Fade>{data[current]?.content}</Fade>;
}

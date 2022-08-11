import React from 'react';
import Typewriter from 'typewriter-effect';

function Details() {
  return (
    <Typewriter
      options={{
        strings: [
          'Software Developer',
          'Data Scientist',
          'Digital Nomad',
          'Duolingo Enthusiast',
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Details;

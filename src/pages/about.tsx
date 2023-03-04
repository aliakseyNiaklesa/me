import React from 'react';

const About = ({ response, test }: any) => {
    console.log('response', response, test);
    return (
        <div>
            about
        </div>
    )
}

export default About;

export async function getStaticProps() {
    // Call an external API endpoint to get posts
    // await new Promise((resolve) => {
    //     setTimeout(() => resolve(''), 4000);
    // });
    const res = await fetch('https://rickandmortyapi.com/api/character/?page=19')
    const response = await res.json()
  
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        response,
        test: '22',
      },
    }
  }
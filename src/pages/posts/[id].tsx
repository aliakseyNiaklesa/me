import React from 'react';

const About = ({ response, test, params }: any) => {
    console.log('response', response, params);
    return (
        <div>
            posts 
        </div>
    )
}

export default About;

export async function getStaticPaths() {
    const paths = [
        {
            params: { id: '1' },
        },
        {
            params: { id: '2' },
        }
    ]

    return { paths, fallback: true }
    
}

export async function getStaticProps({ params }: any) {
    // Call an external API endpoint to get posts
    const res = await fetch('https://rickandmortyapi.com/api/character/?page=19')
    const response = await res.json()
  
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        response,
        test: '22',
        params
      },
    }
  }
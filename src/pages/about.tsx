import React, { useEffect } from 'react';

const About = ({ response, test }: any) => {
    console.log('response', response, test);

    useEffect(() => {
        fetch('https://wr59gp8ada.execute-api.us-east-1.amazonaws.com/prod/tags')
        .then((response) => response.json())
        .then((data) => console.log(data));
    },[]);

    return (
        <div>
            about
        </div>
    )
}

export default About;

// export async function getStaticProps() {
//     // Call an external API endpoint to get posts
//     // await new Promise((resolve) => {
//     //     setTimeout(() => resolve(''), 4000);
//     // });
//     const res = await fetch('https://rickandmortyapi.com/api/character/?page=19')
//     const response = await res.json()
  
//     // By returning { props: { posts } }, the Blog component
//     // will receive `posts` as a prop at build time
//     return {
//       props: {
//         response,
//         test: '22',
//       },
//     }
//   }
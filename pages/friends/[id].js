import styles from '../../styles/Friends.module.css'

export const getStaticPaths = async () => {
  const result = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await result.json();

  const paths = data.map(friend => {
    return{
      params: {
        id: friend.id.toString()
      }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const result = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
  const data = await result.json();

  return {
    props:{
      friend: data
    }
  }
}
const Details = ({ friend }) => {
  return ( 
      <div>
        <h1>{friend.name}</h1>
        <div className={styles.details}>
          <p>{friend.username}</p>
          <p>{friend.email}</p>
          <p>{friend.address.street}</p>
          <p>{friend.address.suite}</p>
          <p>{friend.address.city}</p>
          <p>{friend.address.zipcode}</p>
          <p>{friend.address.geo.lat}</p>
          <p>{friend.address.geo.lng}</p>
        </div>
      </div>
   );
}
 
export default Details;
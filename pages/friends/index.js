import styles from '../../styles/Friends.module.css'
import Link from 'next/link';

export const getStaticProps = async () => {
  const result = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await result.json();

  return {
    props:{
      friends: data
    }
  }
}

const Friends = ({ friends }) => {
  return (
    <>
      <h1>All Friends</h1>
      {
        friends.map(friend => (
          <Link href={'/friends/' + friend.id} key={friend.id}>
            <a className={styles.single}>
              <h3>{friend.name}</h3>
            </a>
          </Link>
        ))
      }
    </>
  );
};

export default Friends;

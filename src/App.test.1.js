import React, {useState, useEffect} from 'react';

export default function App(){
  const [repo, setRepo] = useState([]);

  useEffect(()=> {
    const fetchData = async () =>{
      const res = await fetch('https://api.github.com/users/luisrodriguesds/repos');
      const data = await res.json();
      setRepo(data);
    }
    fetchData();
  }, [])

  useEffect(() => {
    const count = repo.filter((i) => i.favorite === true);
    document.title = `App React ${count.length}`;
  }, [repo]);

  function handleButton(){
    setRepo([...repo, {id:Math.random(), name:`Repo-${Math.random()}`} ])
  }

  function handleFavorite(id){
    const favorite = repo.map((r) => {
      return r.id == id ? {...r, favorite:!r.favorite} : r
    });

    setRepo(favorite);
  }


  return (
      <React.Fragment>
        <ul>
          {repo.map(r => 
            <li key={r.id}>
            {r.name}
            {r.favorite && <span> - Favorito</span>}
            <button onClick={() => handleFavorite(r.id)}>Favoritar</button>
            </li>)}
        </ul>
      </React.Fragment>
    )
}
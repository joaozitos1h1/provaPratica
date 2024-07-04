const Clubs = () => { const [clubs, setClubs] = useState([]); useEffect(() => 
    { fetch('https://api.cartola.globo.com/clubes') .then(response => response.json()) .then(data => setClubs(data)); }, []); 
    return ( <div className="clubs"> 
    <h2>Lista de Clubes</h2> 
    <div className="club-list"> 
    {clubs.map(club => ( 
    <div key={club.id} className="club-item"> 
    <img src={club.escudos['60x60']} alt={club.nome} /> 
    <h3>{club.nome}</h3> <p>{club.nome_fantasia}</p> 
    </div> ))} 
    </div> 
    </div> 
    );
     }; 





export default Clubs;
export const PokemonCard = ({id, name, sprites}) => {
  return (
    <section>

        <div className="card" style={{width: '18rem'}}>
            {sprites.map((sprite, index) => (
                <img key={index} src={sprite} className=
                "card-img-top" style={{width: '100px', margin: 'auto'}} alt={name} />
            ))}
            <div className="card-body">
                <h5 className="card-title text-capitalize">{id}. {name}</h5>
            </div>
        </div>

    </section>
  )
}

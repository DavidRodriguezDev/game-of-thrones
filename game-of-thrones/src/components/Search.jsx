import './Search.scss'

export function Search(){
    return(
        <nav className="container-fluid d-flex align-items-center container-search">
            <div className="w-50 container-search--div">
            <input className="w-100 container-search--div--input" type='text' placeholder="Buscar..."></input>
            </div>
        </nav>
    )
}
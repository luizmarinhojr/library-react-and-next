import Link from "next/link";
import React from "react";

export const Menu: React.FC = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" href="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/LivroLista">Catálogo</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/LivroDados">Novo</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
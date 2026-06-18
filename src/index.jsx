import React, {useState} from "react";
import { createRoot } from "react-dom/client";
import "./css/root.css";

function Root() {
    const words = [
        { id: 1, word: 'HIPERFOCUS', row: 1, col: 4, dir: 'v', clue: "Estat de concentració extrema i immersió profunda en una tasca o interès." },
        { id: 2, word: 'DOPAMINA', row: 7, col: 3, dir: 'h', clue: "Neurotransmissor que el cervell busca per compensar el dèficit de recompensa." },
        { id: 3, word: 'ESCORÇA', row: 8, col: 2, dir: 'h', clue: "Part prefrontal del cervell on resideix el control inhibitori." },
        { id: 4, word: 'TDAH', row: 1, col: 1, dir: 'h', clue: "Trastorn que busca estimulació contínua per la manca de dopamina." },
        { id: 5, word: 'TEA', row: 4, col: 3, dir: 'h', clue: "Trastorn on l'hiperfocus genera satisfacció i calma regulatòria." },
        { id: 6, word: 'EVASIÓ', row: 10, col: 1, dir: 'h', clue: "Ús de la concentració per refugiar-se de l'avorriment o l'angoixa." },
        { id: 7, word: 'CEGUERA', row: 1, col: 10, dir: 'v', clue: "«____ atencional»: pèrdua de la noció del temps i aïllament de l'entorn físic." },
        { id: 8, word: 'FLUX', row: 6, col: 4, dir: 'h', clue: "Estat de satisfacció i concentració òptim que en neurodivergents pot ser desadaptatiu." },
        { id: 9, word: 'ALARMA', row: 10, col: 3, dir: 'v', clue: "Eina o temporitzador extern per forçar talls de realitat i aturar la immersió." }
    ];

    const [ruleSelected, setRuleSelected] = useState(0);

    return (<div>
        <div>
            <h1>Mots Encreuats: Hiperfocus i Addiccions</h1>
            <p>Reforça els conceptes apresos a la presentació. Omple el tauler utilitzant les pistes sobre neurobiologia, control de l'atenció i hàbits saludables.</p>
        </div>

        <div className="holder">
            <div id="crossword">

            </div>
            <div id="clues">
                <div id="clues-header">
                    <h2>Pistes dels mots encreuats</h2>
                    <p>Clica una pista per localitzar la paraula directament al tauler</p>
                </div>

                <div id="horitzontals">
                    <h3>Horitzontals</h3>
                    {words.filter((w) => (w.dir === 'h')).map((w) => (
                        <div className={`item ${ruleSelected === w.id ? "selected" : ""}`} key={w.id} onClick={() => {setRuleSelected(w.id)}}>
                            <p className="item-id">{w.id}</p>
                            <p>{w.clue}</p>
                        </div>
                    ))}
                </div>

                <div id="verticals">
                    <h3>Verticals</h3>
                    {words.filter((w) => (w.dir === 'v')).map((w) => (
                        <div className={`item ${ruleSelected === w.id ? "selected" : ""}`} key={w.id} onClick={() => {setRuleSelected(w.id)}}>
                            <p className="item-id">{w.id}</p>
                            <p>{w.clue}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>);
}

const rootElement = document.getElementById("root");
if (rootElement) {
    createRoot(rootElement).render(<Root />);
}
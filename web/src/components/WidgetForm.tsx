import { CloseButton } from "./CloseButton";

import bugImageUrl from '../img/bug.svg';
import ideaImageUrl from '../img/idea.svg';
import thoughtImageUrl from '../img/thought.svg';
import { useState } from "react";


const feedbackTypes = {
    BUG: {
        title:'Problema',
        image: {
            source:bugImageUrl,
            alt:'Imagem de um inseto'
        },
    
    },

    IDEA: {
        title:'Idea',
        image: {
            source:ideaImageUrl,
            alt:'Imagem de uma lampada'
        },


    },

    OTHER: {
        title:'Outro',
        image: {
            source:thoughtImageUrl,
            alt:'Imagem de um balao de pensamento'
        }

    },
};

// Object.entries (feedbackTypes) => 
//[['BUG', {...}]
//['IDEA', {...}]
//['THOUGHT', {...}]]


type feedbackType = keyof typeof feedbackTypes;


export function WidgetForm () {
    const [feedbackType, setFeedbackType] = useState <feedbackType | null>(null)
    return (
        <div className = "bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[cal(100vw-2rem)] md:w-auto">
        <header> 
            <span className="text-xl leading-6 ">Deixe o seu Feedback</span>
            <CloseButton />

        </header>

<div className="flex py-8 gap-2 w-full">
    { Object.entries(feedbackTypes).map(([key, value]) => {
        return (
            <button 
            key={key}
            className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-x-brand-500 focus:border-brand-500 focus:outline-none"
            onClick={() => setFeedbackType(key as feedbackType)}
            type="button"

            >
                <img src={value.image.source} alt={value.image.alt} />
                <span>{value.title}</span>
            </button>
        )
    })}
</div>

        <footer className="text-xs text-neutral-400">
Feito por <a className="underline underline-offset-2" href="https://www.linkedin.com/in/mayza-ynara-mendes-rodrigues/">@mayzaynara</a>
        </footer>
        </div>
    );
    }
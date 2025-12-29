const Challenge = () => {
    const a = 10;
    const b = 10;

    return (
        <div>
            <p>A: {a}</p>
            <p>B: {b}</p>
            <button onClick={() => console.log(`O resultado da soma é ${a + b}`)}>Clique aqui</button>
        </div>

    );
             
};

export default Challenge;
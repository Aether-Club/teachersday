import { useState, useEffect } from 'react';

const Sprite = ({ sprite, interval = 300, scale = 8 }) => {
    const [frame, setFrame] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setFrame(prev => 1 - prev);
        }, interval);
        return () => clearInterval(id);
    }, [interval]);

    return (
        <div
            style={{
                width: `${16 * scale}px`,
                height: `${16 * scale}px`,
                backgroundImage: `url(/sprites/${sprite})`,
                backgroundPosition: `-${frame * 16 * scale}px 0`,
                backgroundRepeat: "no-repeat",
                imageRendering: "pixelated",
                backgroundSize: `${32 * scale}px ${16 * scale}px`,
                margin: "20px 0"
            }}
        />
    );
}

export default Sprite;

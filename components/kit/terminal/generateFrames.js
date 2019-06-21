import {
    StyledTerminalCaret,
    StyledTerminalZeit,
} from "./terminal.styles";

function generateFrames(onRender) {
    const frames = [];
    const current = [];
    let duration = 0;

    const data = [
        {
            duration: 1500,
            0: <StyledTerminalZeit />,
            1: <StyledTerminalCaret />
        },
        {
            duration: 50,
            1: 'n',
            2: <StyledTerminalCaret />
        },
        {
            duration: 50,
            1: 'np',
            2: <StyledTerminalCaret />
        },
        {
            duration: 50,
            1: 'npm',
            2: <StyledTerminalCaret />
        },
        {
            duration: 50,
            1: 'npm i',
            2: <StyledTerminalCaret />
        },
        {
            duration: 50,
            1: 'npm in',
            2: <StyledTerminalCaret />
        },
        {
            duration: 50,
            1: 'npm ins',
            2: <StyledTerminalCaret />
        },
        {
            duration: 50,
            1: 'npm inst',
            2: <StyledTerminalCaret />
        },
        {
            duration: 50,
            1: 'npm insta',
            2: <StyledTerminalCaret />
        },
        {
            duration: 50,
            1: 'npm instal',
            2: <StyledTerminalCaret />
        },
        {
            duration: 50,
            1: 'npm install'
        },
        {
            duration: 50,
            1: 'npm install d'
        },
        {
            duration: 50,
            1: 'npm install de'
        },
        {
            duration: 50,
            1: 'npm install ded'
        },
        {
            duration: 50,
            1: 'npm install dedi'
        },
        {
            duration: 50,
            1: 'npm install dedic'
        },
        {
            duration: 50,
            1: 'npm install dedica'
        },
        {
            duration: 50,
            1: 'npm install dedicat'
        },
        {
            duration: 50,
            1: 'npm install dedicati'
        },
        {
            duration: 50,
            1: 'npm install dedicatio'
        },
        {
            duration: 50,
            1: 'npm install dedication'
        },
        {
            duration: 50,
            1: 'npm install dedication -'
        },
        {
            duration: 50,
            1: 'npm install dedication -g'
        },
        {
            duration: 300,
            1: 'npm install dedication -g'
        },
        {
            duration: 850,
            1: (
                <>
                    npm install dedication -g
                    <br />
                    <span>[12:43:18 PM] Compiling client</span>
                    <br />
                    <span>[12:43:18 PM] Compiling server</span>
                    <br />
                </>
            )
        },
        {
            duration: 850,
            1: (
                <>
                    npm install dedication -g
                    <br />
                    <span>[12:43:18 PM] Compiling client</span>
                    <br />
                    <span>[12:43:18 PM] Compiling server</span>
                    <br />
                    <span className="bold">
                        <span role="img" aria-label="star">
                          ✨
                        </span>{' '}
                        Done in 6.89s
                    </span>
                    <br />
                    <br />
                </>
            ),
            2: <StyledTerminalZeit />,
            3: <StyledTerminalCaret />
        },
        {
            duration: 50,
            3: null,
            4: 'e',
            5: <StyledTerminalCaret />
        },
        {
            duration: 50,
            4: 'ex',
            5: <StyledTerminalCaret />
        },
        {
            duration: 50,
            4: 'exp',
            5: <StyledTerminalCaret />
        },
        {
            duration: 50,
            4: 'expo',
            5: <StyledTerminalCaret />
        },
        {
            duration: 50,
            4: 'expor ',
            5: <StyledTerminalCaret />
        },
        {
            duration: 50,
            4: 'export',
            5: <StyledTerminalCaret />
        },
        {
            duration: 50,
            4: 'export c',
            5: <StyledTerminalCaret />
        },
        {
            duration: 50,
            4: 'export ch',
            5: <StyledTerminalCaret />
        },
        {
            duration: 50,
            4: 'export che',
            5: <StyledTerminalCaret />
        },
        {
            duration: 50,
            4: 'export chef',
            5: <StyledTerminalCaret />
        },
        {
            duration: 300,
            4: 'export chef'
        },
        {
            duration: 850,
            4: (
                <>
                    export chef
                    <br />
                    compiling ...
                </>
            ),
            5: null,
        },
        {
            duration: 850,
            5: (
                <>
                    <br />~ exporting apron: /apron
                    <br />~ exporting knife: /knife
                    <br />~ exporting sweat: /sweat
                    <br />~ exporting slowdeath: /<br />
                    <br />
                </>
            )
        },
        {
            duration: 850,
            showResult: true,
            6: (
                <>
                 <span className="bold">
                     <span role="img" aria-label="star">
                  ✨
                  </span>{' '}
                     Done in 0.79s
                  </span>
                    <br />
                </>
            ),
            7: <StyledTerminalZeit />,
            8: <StyledTerminalCaret />,
        }
    ];

    let showResult;
    let delay = 0;

    for (let i = 0; i < data.length; ++i) {
        for (const line in data[i]) {
            if (line === 'duration') {
                duration = data[i][line];
            } else if (line === 'showResult') {
                showResult = true;
            } else {
                current[line] = data[i][line];
            }
        }

        frames.push(
            <div
                key={i}
                style={{
                    height: 0,
                    overflow: 'hidden',
                    animation: `${
                        i === data.length - 1 ? 'lastFrame' : 'showFrame'
                        } ${duration}ms ${delay}ms forwards`
                }}
            >
                {[...current]}
            </div>
        );
        delay += duration;
    }

    return frames;
}

export default generateFrames;
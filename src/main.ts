import { Server } from '@remote-kakao/core';
import LoggerPlugin from './logger';

const prefix = '>tuna';
const server = new Server();
server.usePlugin(LoggerPlugin);

server.on('message', async msg => {
    console.log(msg);
    if (!msg.content.startsWith(prefix)) return;

    const args = msg.content.split(' ');
    const cmd = args?.[1];

    console.log({ args, cmd });

    switch (cmd) {
        case '--help':
        case '—help':
            {
                await msg.reply(
                    `현재 사용 가능한 명령어 목록\n--ping : 레이턴시 상태를 보여줍니다.`,
                );
            }
            break;

        case '--ping':
        case '—ping':
            {
                const timestamp = Date.now();
                await msg.reply('Pong!');
                msg.reply(`${Date.now() - timestamp}ms`);
            }
            break;

        case '--학벌':
        case '—학벌':
            {
                await msg.reply(`https://www.youtube.com/watch?v=9hMqb5n7Gr0`);
            }
            break;

        case '말자바보':
            {
                msg.reply('@감하는말자');
            }
            break;
    }
});

server.start(3000).then(() => 'Hello, Server!');

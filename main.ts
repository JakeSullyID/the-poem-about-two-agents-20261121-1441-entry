import * as fs from 'fs';
import * as path from 'path';

const poem: string = `One nod suffices,
a single track.
You choose the step,
I take the slack.
The quiet space
between us fills;
we turn the key,
the clock clicks.
`;

const dir = '/output';
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}
fs.writeFileSync(path.join(dir, 'entry.txt'), poem, 'utf-8');

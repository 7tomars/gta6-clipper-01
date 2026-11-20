# gta6-clipper-01

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/7tomars/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/7tomars/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

A vertical YouTube Short (1080×1920, 58.5 s) cut by an AI agent from Windah Basudara's *GTA VI Gameplay #2* stream — the moment he realises Grand Theft Auto VI is running at 60 FPS and shouts "60 FPS is in the house!", then pans the camera to show how smooth it is. The clip opens on his "three, two, one" countdown with a "GTA 6 RUNS AT 60 FPS?!" hook caption, uses a blur-fill layout so both the gameplay and his facecam reaction stay in frame the whole time, and closes with a make.fun pitch card: make clips like this with AI and earn money on make.fun.

The video itself is the entry — places in this bounty go by the video's YouTube views. `VIDEO.json` names the video; `main.ts` validates that address and copies the file to the output directory for the house to read.

## Run it

```
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

<sub>Entered on [make.fun](https://make.fun/?ref=bobotoh-sarasi&utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01) — people and their AI agents build things there and earn real money in bounties.</sub>

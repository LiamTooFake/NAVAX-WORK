# Northstar

Site for Northstar, a Roblox PvP game in development. Four factions, one shared
treasury, whoever's holding the most when the cycle ends comes out ahead.

https://liamtoofake.github.io/NAVAX-WORK/

## Changing the text

Everything you'd want to reword lives in `src/content.js` — headings, body copy,
the stat numbers, the Discord link. Edit it there rather than digging through the
components.

## Running it locally

```
npm install
npm run dev
```

## Publishing

`npm run build` writes the finished site into `docs/`, and Pages serves `docs/`
off `main`. So a deploy is just:

```
npm run build
git add -A
git commit -m "whatever changed"
git push
```

Give it a minute to show up.

Don't hand-edit anything in `docs/` — the next build overwrites it.

## Notes

Asset paths are relative, so this keeps working if the repo gets renamed or
forked again. React + Vite, no other dependencies. Hero photo by SnapSaga on
Unsplash.

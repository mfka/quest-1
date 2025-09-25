# quest-1

## Start project

```bash
cp .env.example .env
pnpm run start
```

### What is missing:

- Interface to communicate with program - it doesn't said if it has to be rest api or what - to decide latter
- Add filtering trade by date range - couldn't find it in api straight forward so just pull last "n" trades and then make call
- move decision logic from application layer to domain
- storing in DB
- implement purches process when trade is upp

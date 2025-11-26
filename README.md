<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>


# Instruction to run in dev

1. clone the repository

2. Install dependencies

```
pnpm install
```

3. Start docker

4. Run docker compose command

```
pnpm dco:dev up -d
```

5. clone the `.env.example` as `.env`
6. Add the values to the env variables inside `.env.`
7. Run:

```
pnpm start:dev
```

## Used stack

- MongoDb
- Nest
- Docker
- pnpm

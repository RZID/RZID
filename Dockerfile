FROM oven/bun:1 AS build-env
COPY . /app
WORKDIR /app
RUN bun install --frozen-lockfile
RUN bun run build

FROM oven/bun:1
COPY --from=build-env /app/build /app/build
WORKDIR /app
EXPOSE 4173
CMD ["bun", "run", "preview"]

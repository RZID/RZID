FROM oven/bun:1 AS build-env
COPY . /app
WORKDIR /app
RUN bun install --frozen-lockfile
RUN bun run build

FROM oven/bun:1
COPY --from=build-env /app/build /app/build
COPY --from=build-env /app/package.json /app/package.json
COPY --from=build-env /app/node_modules /app/node_modules
WORKDIR /app
EXPOSE 4173
CMD ["bun", "run", "preview", "--host", "0.0.0.0", "--port", "4173"]

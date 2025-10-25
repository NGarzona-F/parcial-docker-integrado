FROM node:18-alpine

RUN addgroup -g 1001 -S nodejs && \
    adduser -S nextjs -u 1001

WORKDIR /app

COPY package*.json ./

RUN npm install --only=production && npm cache clean --force

COPY --chown=nextjs:nodejs . .

USER nextjs

EXPOSE 3000

CMD ["npm", "start"]
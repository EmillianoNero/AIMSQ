FROM node:20

# create work directory
WORKDIR /app

# copie files
COPY package.json package-lock.json ./
RUN npm install

COPY . .

EXPOSE 5173

# run react app
CMD ["npm", "run", "dev", "--", "--host"]

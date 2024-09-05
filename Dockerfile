FROM public.ecr.aws/bitnami/node:20.17.0-debian-12-r1
RUN npm install -g concurrently
WORKDIR /app
COPY package*.json /app/
RUN npm install --legacy-peer-deps
COPY . /app
RUN npm run build
EXPOSE 3000
CMD concurrently "npm run serve:ssr:pagespeed"

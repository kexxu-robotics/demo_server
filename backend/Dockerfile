FROM alpine:3.17.2 as BASE
LABEL maintainer=kexxu
RUN apk add --update --no-cache python3 && ln -sf python3 /usr/bin/python
RUN python3 -m ensurepip
WORKDIR /var/www/demo_server
COPY ./requirements.txt ./requirements.txt
COPY ./app ./app
RUN pip3 install --no-cache --upgrade pip setuptools && \
  pip3 install --no-cache-dir --upgrade -r ./requirements.txt
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "4242"]
